import type { FieldList } from './field-list.js';

export interface Template {
	name: string;
	description: string;
	fieldList: FieldList[];
	defaults: Record<string, unknown>;
}
