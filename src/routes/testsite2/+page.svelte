<script lang="ts">
	import { attachFlatpickr } from '$lib';
	import type { Attachment } from 'svelte/attachments';

	function runFlatpickr(node) {
		const instance = attachFlatpickr(node);
		return () => {
			instance.destroy();
		};
	}
</script>

<input {@attach runFlatpickr} />
