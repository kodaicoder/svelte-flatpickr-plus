---
title: Basic usage of Month picker
---

<script>
    import svlatepickr from '$lib';
    let value = $state();
    const options = {
        isMonthPicker:true
    };
</script>

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	const options = {
		isMonthPicker: true
	};
</script>

<input name="datepicker" use:svlatepickr={options} />
```

Result :

<input name="monthpicker" use:svlatepickr={options} bind:value/>

Value :

{value ? value : "please select month from input above."}
