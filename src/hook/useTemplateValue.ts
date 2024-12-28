import { useMemo } from 'react';

interface TemplateConfig {
	global?: string;
	name?: string;
}

export function useTemplateValue<T>(config: TemplateConfig = {}): T {
	const {
		global = 'window',
		name = 'booking',
	} = config;

	return useMemo(() => {
		try {
			let value = `${global}.${name}`.split('.').reduce<unknown>((obj, key) => {
				const current = obj as Record<string, unknown>;
				return current?.[key] as string;
			}, globalThis);

			const parser = new DOMParser();
			value = parser.parseFromString(value as string, 'text/html');
			value = (value as Document).documentElement.textContent || '';

			return JSON.parse(value as string || '{}') as T;
		}
		catch (error) {
			console.error('Failed to parse template data:', error);
			return {} as T;
		}
	}, [global, name]);
}
