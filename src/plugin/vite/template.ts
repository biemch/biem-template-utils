import { HmrContext, Plugin } from 'vite';
import fs from 'fs';
import nunjucks from 'nunjucks';
import path from 'path';

interface PluginOptions {
	configFile?: string;
}

export function vitePluginBiem({ configFile }: PluginOptions = { configFile: 'biem.config.json' }): Plugin {
	let config: any;

	function loadConfig() {
		const configPath = path.resolve(configFile!);

		if (!fs.existsSync(configPath)) {
			throw new Error(`${configFile} not found. Please create it in your project root.`);
		}

		try {
			const configContent = fs.readFileSync(configPath, 'utf-8');
			const parsedConfig = JSON.parse(configContent);

			if (!parsedConfig.template?.defaults) {
				throw new Error('Invalid biem.config.json: Missing template.defaults section');
			}

			return parsedConfig;
		}
		catch (err) {
			if (err instanceof SyntaxError) {
				throw new Error(`Invalid JSON in biem.config.json: ${err.message}`);
			}
			throw err;
		}
	}

	return {
		name: 'vite-plugin-biem',
		enforce: 'pre',
		configResolved() {
			try {
				config = loadConfig();
			}
			catch (err) {
				console.error('Biem Plugin Error:', err instanceof Error ? err.message : String(err));
				process.exit(1);
			}
		},
		handleHotUpdate(context: HmrContext): void | [] {
			const filename = path.resolve(context.file);

			if (filename.endsWith('biem.config.json')) {
				try {
					config = loadConfig();
					console.info('biem.config.json has been updated. Reloading configuration.');
					context.server.ws.send({ type: 'full-reload' });
					return [];
				}
				catch (err) {
					console.error('Failed to reload biem.config.json:', err instanceof Error ? err.message : String(err));
					return [];
				}
			}

			if (filename.endsWith('.html') || filename.endsWith('.njk')) {
				console.info(`Template file ${path.basename(filename)} has been changed. Sending full-reload.`);
				context.server.ws.send({ type: 'full-reload' });
				return [];
			}
		},
		transformIndexHtml(html: string) {
			if (!config) {
				try {
					config = loadConfig();
				}
				catch (err) {
					console.error('Biem Plugin Error:', err instanceof Error ? err.message : String(err));
					return html;
				}
			}

			try {
				const environment = nunjucks.configure({ autoescape: false });
				environment.addFilter('json', (value: unknown) => JSON.stringify(value));

				html = html.replace('</body>', '\t<script>window.booking = \'{{ data.booking | json }}\'</script>\n\t</body>');

				if (process.env.NODE_ENV === 'development') {
					return environment.renderString(html, {
						data: {
							booking: config.template.defaults,
						},
					});
				}

				return html;
			}
			catch (err) {
				console.error('Biem Plugin Error during template transformation:', err instanceof Error ? err.message : String(err));
				return html;
			}
		},
	};
}
