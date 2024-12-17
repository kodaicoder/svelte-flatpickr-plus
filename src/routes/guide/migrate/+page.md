---
title: Migration from V1
---

### Importing

Svelte-flatpickr-plus has changed from 4 actions (datePicker, monthPicker, dateRangePicker and monthRangePicker) into only 1 action that you can name it by yourself.

```svelte title=".svelte"
<script>
	// [svp! --] import {
		datePicker, // [svp! --]
		monthPicker, // [svp! --]
		dateRangePicker, // [svp! --]
		monthRangePicker // [svp! --]
	} from 'svelte-flatpickr-plus'; // [svp! --]

	import svlatepickr from 'svelte-flatpickr-plus'; // [svp! ++]
</script>
```

### Date picker

With a normally date picker you can just using your named action into `use:` directive.

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
</script>

<input use:datepicker /> // [svp! --]
<input use:svlatepickr /> // [svp! ++]
```

### Date range picker

With a date range picker you need to adding options object with `mode: 'range'` and passing it into your named action

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	// [svp! ++]const options ={
	// [svp! ++]    mode: 'range'
	// [svp! ++]};
</script>

<input use:svlatepickr={options} /> // [svp! ++]
```

### Month picker

With a month picker you need to adding options object with `isMonthPicker: true` and passing it into your named action

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	// [svp! ++]const options ={
	// [svp! ++]    isMonthPicker: true
	// [svp! ++]};
</script>

<input use:svlatepickr={options} /> // [svp! ++]
```

### Month range picker

With a month range picker you need to adding options object with `isMonthPicker: true` and `mode: 'range'` then passing it into your named action

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	// [svp! ++]const options ={
	// [svp! ++]    isMonthPicker: true,
	// [svp! ++]    mode: 'range'
	// [svp! ++]};
</script>

<input use:svlatepickr={options} /> // [svp! ++]
```

### Fully support on `multiple` mode

For now you can using multiple mode on both date picker or month picker

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	// For date picker
	// [svp! ++]const optionsDatePicker ={
	// [svp! ++]    mode: 'multiple'
	// [svp! ++]};

	//For month picker
	// [svp! ++]const optionsMonthPicker ={
	// [svp! ++]    isMonthPicker: true,
	// [svp! ++]    mode: 'multiple'
	// [svp! ++]};
</script>

<input use:svlatepickr={optionsDatePicker} /> // [svp! ++]
<input use:svlatepickr={optionsMonthPicker} /> // [svp! ++]
```

### Theme Changer

Before user should import it from `flatpickr_plus/dist/plugins/themeChanger` for now has been renamed into `themeChanger` and can be imported from  
`svelte-flatpickr-plus` directly and you can get a correct theme name from  
`themeNames` object that you can import from the same directory.

```svelte title=".svelte"
<script>
	import fpThemeChanger from 'flatpickr_plus/dist/plugins/themeChanger'; // [svp! --]
	import { themeChanger, themeNames } from 'svelte-flatpickr-plus'; // [svp! ++]

	let themeName = $state(themeNames.default); // [svp! ++]
	
	onMount(() => // [svp! --]{
		if (theme) // [svp! --]{
			const flatpickrThemePath = 'node_modules/flatpickr_plus/dist/themes/';// [svp! --]
			fpThemeChanger(themeName, flatpickrThemePath);// [svp! --]
		}// [svp! --]
	});// [svp! --]

	$effect(async () => {
		if (themeName) {
			themeChanger(themeName); // [svp! ++]
		}
	});
</script>
```
