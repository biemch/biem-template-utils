import nunjucks from 'nunjucks';
import path from 'path';
import {
	HmrContext,
	Plugin,
} from 'vite';

interface PluginOptions<T extends object> {
	defaults: T;
	template?: {
		global?: string;
		name?: string;
		namespace?: string;
		key?: string;
	};
}

export default function vitePluginBiem<T extends object>({
	defaults,
	template = {
		global: 'window',
		name: 'booking',
		namespace: 'data',
		key: 'booking',
	},
}: PluginOptions<T>): Plugin {
	if (!defaults || typeof defaults !== 'object') {
		throw new Error('defaults must be an object');
	}

	const config = { template: { defaults } };

	const {
		namespace = 'data',
		key = 'booking',
		global = 'window',
		name = 'booking',
	} = template;

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

				const assignmentPath = name.split('.');
				const initializationScript = assignmentPath
					.reduce<string[]>((acc, _, index, arr) => {
						if (index === arr.length - 1) return acc;
						const currentPath = [`${global}`].concat(arr.slice(0, index + 1)).join('.');
						acc.push(`${currentPath} = ${currentPath} || {};`);
						return acc;
					}, [])
					.join('\n');

				const fullPath = `${global}.${name}`;
				const namespaceRef = `${namespace}.${key}`;
				const scriptInjection = `\t<script>${initializationScript}${fullPath} = '{{ ${namespaceRef} | json | safe }}'</script>`;

				html = html.replace('</body>', `${scriptInjection}\n\t</body>`);

				if (process.env.NODE_ENV === 'development') {
					const templateData = namespace.split('.').reduceRight<Record<string, unknown>>((value, key) => ({ [key]: value }), { [key]: config.template.defaults });

					return environment.renderString(html, templateData);
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
