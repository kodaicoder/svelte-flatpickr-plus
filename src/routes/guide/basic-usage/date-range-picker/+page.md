---
title: Basic usage of Date range picker
---

<script>
    import svlatepickr from '$lib';
    let value = $state();
    const options = {
        mode: 'range'
    }
</script>

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	const options = {
		mode: 'range'
	};
</script>

<input name="daterangepicker" use:svlatepickr={options} />
```

Result :

<input name="datepicker" use:svlatepickr={options} bind:value/>

Value :

{value ? value : "please select date range from input above."}
