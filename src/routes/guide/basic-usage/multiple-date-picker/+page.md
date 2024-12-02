---
title: Basic usage of Multiple date picker
---

<script>
    import svlatepickr from '$lib';
    let value = $state();
    const options = {
        mode: 'multiple'
    }
</script>

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	const options = {
		mode: 'multiple'
	};
</script>

<input name="multidatepicker" use:svlatepickr={options} />
```

Result :

<input name="datepicker" use:svlatepickr={options} bind:value />

Value :

{value ? value : "please select date(s) from input above."}
