export { default as default } from './actions.svelte.js';
export { createFlatpickr as attachFlatpickr } from './actions.svelte.js';
export { default as l10n } from 'flatpickr_plus/dist/l10n';
import { default as tc, getCurrentThemeName } from './themeChanger.js';
export type { DateLimit, DateOption, Hook, FlatpickrOptions, FlatpickrInstance } from './types.js';

/**
 * Enum-like object defining available theme names
 * @enum {string}
 */
export const themeNames = {
	default: 'default',
	light: 'light',
	dark: 'dark',
	materialBlue: 'material_blue',
	materialGreen: 'material_green',
	materialRed: 'material_red',
	materialOrange: 'material_orange',
	airbnb: 'airbnb',
	confetti: 'confetti'
};

/**
 * Retrieves a CSS file for a given theme name.
 *
 * @param { string } themeName - The name of the theme to load
 * @returns { Promise < string | null >} The CSS content of the theme or null if not found
 *
 * @example
 * // Successful theme load
 * const darkTheme = await themes('dark');
 *
 * @example
 * // Theme not found
 * const missingTheme = await themes('nonexistent');
 * // Returns null
 */
export async function themeChanger(themeName) {
	// Validate input
	if (typeof themeName !== 'string' || !themeName.trim()) {
		return null;
	}

	// Construct the potential theme path
	const themePath = `https://npmcdn.com/flatpickr/dist/themes/`;

	tc(themeName, themePath);
}
export function currentTheme() {
	const themePath = `https://npmcdn.com/flatpickr/dist/themes/`;
	return getCurrentThemeName(themePath);
}
