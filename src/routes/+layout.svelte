<script>
	import { onMount } from 'svelte';
	import fpThemeChanger from 'flatpickr_plus/dist/plugins/themeChanger';

	// you need some variable to telling which theme browser has been used
	$: theme = 'dark';
	onMount(() => {
		if (theme) {
			const flatpickrThemePath = 'node_modules/flatpickr_plus/dist/themes/';
			fpThemeChanger(theme, flatpickrThemePath);
		}
	});
</script>

<slot />
