import { useMemo } from 'react';

export function useTemplateValue<T>(): T {
	return useMemo(() => {
		try {
			const data = JSON.parse(
				// @ts-expect-error - window is not defined in typescript
				(window as unknown as Record<string, string>)?.booking || '{}',
			);

			return data;
		}
		catch (error) {
			console.error('Failed to parse booking data:', error);

			return {};
		}
	}, []);
}
