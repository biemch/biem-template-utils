const replacePlaceholders = <T extends Record<string, string>>(content: string, placeholders: T): string => {
	for (const [key, value] of Object.entries(placeholders)) {
		content = content.replace(new RegExp(`{{\\s*${key}\\s*}}`, 'g'), value);
	}

	return content;
};

export { replacePlaceholders };
