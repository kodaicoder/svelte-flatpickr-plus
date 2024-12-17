<script>
	import '../app.css';
	// import { onMount } from 'svelte';
	// import fpThemeChanger from 'flatpickr_plus/dist/plugins/themeChanger';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	// // you need some variable to telling which theme browser has been used
	// let theme = $derived('');
	// onMount(() => {
	// 	if (theme) {
	// 		const flatpickrThemePath = 'node_modules/flatpickr_plus/dist/themes/';
	// 		fpThemeChanger(theme, flatpickrThemePath);
	// 	}
	// });
</script>

{@render children?.()}
