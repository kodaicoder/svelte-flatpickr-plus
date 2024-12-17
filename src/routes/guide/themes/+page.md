---
title: Using `themeChanger`
---

<script>
	import svlatepickr from '$lib';
	import { themeChanger,  themeNames } from '$lib';
	const arrayThemeNames = Object.keys(themeNames);

	let value = $state();
	let themeName  = $state(themeNames.default);

	// while change of theme name will be load new css to document
	// but with default theme, it will remove exist flatapickr theme and not load any css
	$effect(async ()=>{
		if (themeName) {
			 themeChanger(themeName);
		}
	});
</script>

:::caution[ theme persistence ]
For now a theme changer will not persistence a theme, after refresh a page the theme will going back to default or what ever you initial setting for theme name that given to `themeChanger`
:::

<p>Lists of theme name:</p>

<select bind:value={themeName}>
	{#each arrayThemeNames as name}
 		<option value={themeNames[name]}>{name}</option>
 	{/each}
</select>

<br/>
<br/>

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	import { themeChanger, themeNames } from 'svelte-flatpickr-plus'; // [svp! ++]

	let value = $state();
	// you can using theme name from svelte-flatpickr-plus
	let themeName = $state(themeNames.default); // [svp! ++]

	// on reactive of theme name will be load new css to document
	// while default theme will remove and not load any .css
	$effect(async () => {
		if (themeName) {
			themeChanger(themeName); // [svp! ++]
		}
	});
</script>

<input name="datepicker" use:svlatepickr />
```

Result:

<input name="datepicker" use:svlatepickr bind:value />

Value :

{value ? value : 'please select date from input above.'}
