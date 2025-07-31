---
title: Basic usage of Year picker
---

<script>
    import svlatepickr from '$lib';
    let value = $state();
    const options = {
        isYearPicker:true
    };
    const currentYear = new Date().getFullYear();
</script>

:::tip[Default date format is "Y"]
With `isYearPicker` set to true a default config for alternative date format is "Y" but if you set a alternative date format into something else such as "d m Y" this will show you a first day of the January of your selected year e.g. 1 1 {currentYear} if you select a current year
:::

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	const options = {
		isYearPicker: true
	};
</script>

<input name="yearpicker" use:svlatepickr={options} />
```

Result :

<input name="yearpicker" use:svlatepickr={options} bind:value/>

Value :

{value ? value : "please select year from input above."}

:::caution[ using both "isMonthPicker" and "isYearPicker"]
While you set both `isMonthPicker` and `isYearPicker` to `true` a `isMonthPicker` will override a `isYearPicker` completely, that mean it will come out as month picker input element
:::
