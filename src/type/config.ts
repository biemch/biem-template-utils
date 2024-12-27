import { Template } from './template.js';

export interface Config {
	name: string;
	description: string;
	version: string;
	port: number;
	template: Template;
}
