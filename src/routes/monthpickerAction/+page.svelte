<script>
	import { enhance } from '$app/forms';
	import { monthpicker } from '$lib/flatpickrAction/svelte-flatpickr-plus.js';
	import { Thai } from 'flatpickr_plus/dist/l10n/th.js';
	let monthPickerElement, informMonthpickerElement;

	const monthpickerOptions = {
		shorthand: false,
		dateFormat: 'Z',
		altFormat: 'F Y',
		altInput: true,
		ariaDateFormat: 'F Y',
		useLocaleYear: true,
		locale: Thai,
		minDate: '2019-01',
		maxDate: '2033-04',
		disable: ['2023-01', '2022-08', '2021-03', new Date(2020, 11, 1)],
		onChange: (selectedDates, dateStr) => {
			console.log('on change event!');
			console.log(selectedDates[0]);
			console.log(dateStr);
		},
		onOpen: (selectedDates, dateStr) => {
			console.log('on open event!');
		},
		onClose: (selectedDates, dateStr) => {
			console.log('on close event!');
		}
	};

	const defautlMonthOptions = {
		...monthpickerOptions,
		defaultDate: '2023-03'
	};

	const wrapMonthpickerOptions = {
		...monthpickerOptions,
		wrap: true
	};

	const handdleMonthpickerBindClick = () => {
		monthPickerElement._flatpickr.clear();
	};

	const handdleMonthpickerInfromBindClick = () => {
		informMonthpickerElement._flatpickr.clear();
	};
</script>

<h1>Monthpicker</h1>

<section>
	<label for="normalMonthpicker">Month picker: </label>
	<br />
	<input name="normalMonthpicker" use:monthpicker={monthpickerOptions} />
</section>
<br />
<section>
	<label for="normalMonthpickerDefaultMonth">Month picker with initial date: </label>
	<br />
	<input name="normalMonthpickerDefaultMonth" use:monthpicker={defautlMonthOptions} />
</section>
<br />
<section>
	<label for="normalMonthpickerBind"> Month picker with flatpickr element binding: </label>
	<br />
	<input
		name="normalMonthpickerBind"
		use:monthpicker={monthpickerOptions}
		bind:this={monthPickerElement}
	/>
	<button type="button" on:click={handdleMonthpickerBindClick}>Clear</button>
</section>
<br />
<section>
	<label for="withWrapperMonthpicker">Month picker with wrapper</label>
	<br />
	<div use:monthpicker={wrapMonthpickerOptions}>
		<input name="withWrapperMonthpicker" data-input />
		<button title="toggle" data-toggle> toggle </button>
		<button title="clear" data-clear> clear </button>
	</div>
</section>
<br />

<h1>Using in from</h1>
<form method="POST" use:enhance>
	<section>
		<label for="monthpicker1">Month picker: </label>
		<br />
		<input name="monthpicker1" use:monthpicker={monthpickerOptions} />
	</section>
	<br />
	<section>
		<label for="monthpicker2">Month picker with initial month: </label>
		<br />
		<input name="monthpicker2" use:monthpicker={defautlMonthOptions} />
	</section>
	<br />
	<section>
		<label for="monthpicker3"> Month picker with flatpickr element binding: </label>
		<br />
		<input
			name="monthpicker3"
			use:monthpicker={monthpickerOptions}
			bind:this={informMonthpickerElement}
		/>
		<button type="button" on:click={handdleMonthpickerInfromBindClick}>Clear</button>
	</section>
	<br />
	<section>
		<label for="monthpicker4">Month picker with wrapper</label>
		<br />
		<div use:monthpicker={wrapMonthpickerOptions}>
			<input name="monthpicker4" data-input />
			<button type="button" title="toggleInFrom" data-toggle> toggle </button>
			<button type="button" title="clearInFrom" data-clear> clear </button>
		</div>
	</section>
	<br />
	<div>
		<button type="submit">Submit</button>
		<button type="reset">Reset</button>
	</div>
	<br />
</form>
