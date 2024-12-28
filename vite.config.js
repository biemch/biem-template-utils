import { extname, relative, resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

export default defineConfig(() => {
	return {
		plugins: [
			dts(),
			{
				generateBundle: (_, bundle) => {
					Object.keys(bundle).forEach((key) => {
						if (bundle[key].fileName.startsWith('type/')) {
							delete bundle[key];
						}
					});
				},
			},
		],
		clearScreen: false,
		build: {
			minify: true,
			emptyOutDir: true,
			copyPublicDir: false,
			lib: {
				entry: resolve(__dirname, 'src/index.ts'),
				formats: ['es'],
			},
			rollupOptions: {
				external: ['fs', 'path', 'react', 'nunjucks'],
				input: Object.fromEntries(
					glob.sync('src/**/*.{ts,tsx}', {
						ignore: ['src/**/*.d.ts'],
					}).map(file => [
						relative('src', file.slice(0, file.length - extname(file).length)),
						fileURLToPath(new URL(file, import.meta.url)),
					]),
				),
				output: {
					entryFileNames: '[name].js',
				},
			},
		},
	};
});
