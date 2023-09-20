<script>
	import { onMount } from 'svelte';
	import flatpickr from 'flatpickr_plus';
	import yearDropdownPlugin from 'flatpickr_plus/dist/plugins/yearDropdown';

	export let wrapperClass = '';
	export let inputClass = '';
	export let name = undefined;
	export let placeholder = 'Please select range of date...';
	export let start = null;
	export let end = null;
	export let value = null;
	export let string = null;
	export let dateFormat = 'Y-m-d';
	export let locale = 'en';
	export let useLocaleYear = false;
	export let initialDate = null;
	export let minDate = null;
	export let maxDate = null;
	export let disable = [];

	export let fp = undefined;
	export { fp as flatpickr };

	let input, wrapper;
	$: isWrapped = $$slots.default;

	onMount(() => {
		fp = flatpickr(isWrapped ? wrapper : input, {
			dateFormat: 'Z',
			altFormat: dateFormat,
			altInput: true,
			ariaDateFormat: dateFormat,
			defaultDate: initialDate,
			minDate,
			maxDate,
			disable,
			locale,
			useLocaleYear,
			disableMobile: true,
			mode: 'range',
			wrap: isWrapped,
			onChange: (selectedDates, dateStr) => {
				value = selectedDates;
				start = selectedDates[0];
				end = selectedDates[1];
				string = dateStr;
			},
			plugins: [new yearDropdownPlugin()]
		});

		return () => fp.destroy();
	});

	//! made input listen to form reset event and clear flatpickr
	const resetFormEvent = (node) => {
		const resetFlatpickr = () => {
			input._flatpickr.clear();
		};
		node.form?.addEventListener('reset', resetFlatpickr);
		return {
			destroy() {
				node.form?.removeEventListener('reset', resetFlatpickr);
			}
		};
	};
</script>

{#if $$slots.default}
	<div bind:this={wrapper} class={wrapperClass}>
		<input
			data-input
			bind:this={input}
			use:resetFormEvent
			type="text"
			{name}
			{placeholder}
			class={inputClass}
		/>
		<slot />
	</div>
{:else}
	<input
		data-input
		bind:this={input}
		use:resetFormEvent
		type="text"
		{name}
		{placeholder}
		class={inputClass}
	/>
{/if}
