import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(() => {
	return {
		plugins: [
			dts({
				insertTypesEntry: true,
				copyDtsFiles: true,
			}),
		],
		clearScreen: false,
		build: {
			minify: true,
			emptyOutDir: true,
			lib: {
				entry: resolve(__dirname, 'src/index.ts'),
				name: 'VitePluginBiem',
				formats: ['es'],
				fileName: 'index',
			},
			rollupOptions: {
				external: ['fs', 'path'],
				output: {
					globals: {
						fs: 'fs',
						path: 'path',
					},
				},
			},
		},
	};
});
