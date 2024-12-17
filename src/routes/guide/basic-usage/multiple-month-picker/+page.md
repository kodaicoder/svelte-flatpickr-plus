---
title: Basic usage of Multiple month picker
---

<script>
    import svlatepickr from '$lib';
    let value = $state();
    const options = {
        isMonthPicker:true,
        mode:'multiple'
    };
</script>

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	const options = {
		isMonthPicker: true,
		mode: 'multiple'
	};
</script>

<input name="datepicker" use:svlatepickr={options} />
```

Result :

<input name="multimonthpicker" use:svlatepickr={options} bind:value/>

Value :

{value ? value : "please select month(s) from input above."}
