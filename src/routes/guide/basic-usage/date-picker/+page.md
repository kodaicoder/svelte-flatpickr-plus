---
title: Basic usage of Date picker
---

<script>
    import svlatepickr from '$lib';
     let value = $state();
</script>

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
</script>

<input name="datepicker" use:svlatepickr />
```

Result :

<input name="datepicker" use:svlatepickr bind:value/>

Value :

{value ? value : "please select date from input above."}
