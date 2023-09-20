<script>
	import { onMount } from 'svelte';
	import flatpickr from 'flatpickr_plus';

	import monthSelectPlugin from 'flatpickr_plus/dist/plugins/monthSelect';
	import yearDropdownPlugin from 'flatpickr_plus/dist/plugins/yearDropdown';

	export let wrapperClass = '';
	export let inputClass = '';
	export let name = undefined;
	export let placeholder = 'Please select month...';
	export let value = undefined;
	export let string = undefined;
	export let dateFormat = 'Y-m';
	export let locale = 'en';
	export let useLocaleYear = false;
	export let initialDate = null;
	export let minDate = undefined;
	export let maxDate = undefined;
	export let disable = [];
	export let shortMonth = false;

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
			allowInvalidPreload: true,
			wrap: isWrapped,
			onChange: (selectedDates, dateStr) => {
				value = selectedDates[0];
				string = dateStr;
			},
			plugins: [
				new monthSelectPlugin({
					shorthand: shortMonth, //defaults to false
					dateFormat: 'Z', //defaults to "F Y"
					altFormat: dateFormat //defaults to "F Y"
				}),
				new yearDropdownPlugin()
			]
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
			class={inputClass}
			{placeholder}
		/>
		<slot />
	</div>
{:else}
	<input bind:this={input} use:resetFormEvent type="text" {name} class={inputClass} {placeholder} />
{/if}
