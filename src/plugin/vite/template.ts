import nunjucks from 'nunjucks';
import path from 'path';
import {
	HmrContext,
	Plugin,
} from 'vite';

interface PluginOptions<T extends object> {
	defaults: T;
}

export default function vitePluginBiem<T extends object>({ defaults }: PluginOptions<T>): Plugin {
	if (!defaults || typeof defaults !== 'object') {
		throw new Error('defaults must be an object');
	}

	const config = { template: { defaults } };

	return {
		name: 'vite-plugin-biem',
		enforce: 'pre',
		handleHotUpdate(context: HmrContext): void | [] {
			const filename = path.resolve(context.file);

			if (filename.endsWith('.html') || filename.endsWith('.njk')) {
				console.info(`Template file ${path.basename(filename)} has been changed. Sending full-reload.`);
				context.server.ws.send({ type: 'full-reload' });
				return [];
			}
		},
		transformIndexHtml(html: string) {
			try {
				const environment = nunjucks.configure({ autoescape: true });
				environment.addFilter('json', (value: unknown) => JSON.stringify(value));

				if (process.env.NODE_ENV === 'development') {
					return environment.renderString(html, { input: config.template.defaults });
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
