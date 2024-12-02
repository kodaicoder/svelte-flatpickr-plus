import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'
import { defineConfig } from 'vite';
import navbar from './config/navbar.js';
import sidebar from './config/sidebar.js';

export default defineConfig({
	plugins: [sveltepress({
		theme: defaultTheme({
			navbar,
			sidebar,
			github: "https://github.com/kodaicoder/svelte-flatpickr-plus",
			logo: '/svelte-flatpickr.png',
			themeColor: {
				gradient: {
					start: '#36D1DC',
					end: '#5B86E5',
				},
			},
			// highlighter: {
			// 	twoslash: true,
			// },
			preBuildIconifyIcons: {
				'twemoji': ['globe-showing-asia-australia',
					'tear-off-calendar',
					'downwards-button',
					'repeat-button',
					'information'],

			},
		}),
		siteConfig: {
			title: 'Svelte Flatpickr +',
			description: 'A easiest date picker actions for Svelte',
		}
	})],
});
