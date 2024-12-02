---
title: Migration from V1
---

### Importing

I has changed from 4 actions (datePicker, monthPicker, dateRangePicker and monthRangePicker) into only 1 action that you can name it by yourself.

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
