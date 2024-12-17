---
title: Basic usage of Month range picker
---

<script>
    import svlatepickr from '$lib';
    let value = $state();
    const options = {
        isMonthPicker:true,
        mode:'range'
    };
</script>

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	const options = {
		isMonthPicker: true,
		mode: 'range'
	};
</script>

<input name="datepicker" use:svlatepickr={options} />
```

Result :

<input name="daterangepicker" use:svlatepickr={options} bind:value/>

Value :

{value ? value : "please select month range from input above."}
