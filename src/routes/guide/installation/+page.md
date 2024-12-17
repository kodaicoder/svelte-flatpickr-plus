---
title: Installation
---

### Install package to your project

:::tip[PNPM first]
Use pnpm as much as possible. It respects package version more than npm.
:::

@install-pkg(svelte-flatpickr-plus)

### Import it to your `.svelte` file

import to your code and using a action on `input` element with `use:` directive

:::important[Name your action]{icon=twemoji:information}
You can name a action as you like but in this document I will calling it

`svlatepickr` (svelte + flatpickr)
:::

```svelte title=".svelte"
<script>
	import svlatepickr from 'svelte-flatpickr-plus'; // [svp! ++]
</script>

<input name="datepicker" use:svlatepickr />
```
