<script>
	import { enhance } from '$app/forms';
	import { monthPicker } from '$lib/actions.js';
	import { Thai } from 'flatpickr_plus/dist/l10n/th.js';
	let monthPickerElement, informMonthPickerElement, myForm;

	const monthPickerOptions = {
		dateFormat: 'Z',
		altFormat: 'F Y',
		altInput: true,
		ariaDateFormat: 'F Y',
		useLocaleYear: true,
		locale: Thai,
		minDate: '2019-01',
		maxDate: '2033-04',
		disable: ['2023-09', '2022-07', '2021-03', new Date(2020, 11, 1)],
		resetMoveDefault: false,
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

	const monthOptions = {
		dateFormat: 'Z',
		altFormat: 'F Y',
		altInput: true,
		ariaDateFormat: 'F Y'
	};

	const defaultDateRangeOptions = {
		...monthPickerOptions,
		defaultDate: '2023-07',
		resetToDefault: true
	};

	const wrapMonthPickerOptions = {
		...monthPickerOptions,
		wrap: true
	};

	const handleChange = (event) => {
		if (event.detail) {
			const { selectedDates, dateStr, instance } = event.detail;
			console.log('event change!!!', { selectedDates, dateStr, instance });
		}
	};

	const handleMonthPickerBindClick = () => {
		monthPickerElement._flatpickr.clear();
	};

	const handleMonthPickerInFromBindClick = () => {
		informMonthPickerElement._flatpickr.clear();
	};
</script>

<a href="/">« Back</a>
<h1>Month Picker</h1>

<section>
	<label for="normalMonthPicker">Month Picker: </label>
	<br />
	<input name="normalMonthPicker" use:monthPicker={monthPickerOptions} on:change={handleChange} />
</section>
<br />
<section>
	<label for="normalMonthPickerDefaultDate">Month Picker with initial date: </label>
	<br />
	<input name="normalMonthPickerDefaultDate" use:monthPicker={defaultDateRangeOptions} />
</section>
<br />
<section>
	<label for="normalMonthPickerBind"> Month Picker with flatpickr element binding: </label>
	<br />
	<input
		name="normalMonthPickerBind"
		use:monthPicker={monthPickerOptions}
		bind:this={monthPickerElement}
	/>
	<button type="button" on:click={handleMonthPickerBindClick}>Clear</button>
</section>
<br />
<section>
	<label for="withWrapperMonthPicker">Month Picker with wrapper</label>
	<br />
	<div use:monthPicker={wrapMonthPickerOptions}>
		<input name="withWrapperMonthPicker" data-input />
		<button type="button" title="toggle" data-toggle> toggle </button>
		<button type="button" title="clear" data-clear> clear </button>
	</div>
</section>
<br />

<h1>Using in from</h1>
<form method="POST" use:enhance>
	<section>
		<label for="monthPicker1">Month Picker: </label>
		<br />
		<input name="monthPicker1" use:monthPicker={monthPickerOptions} />
	</section>
	<br />
	<section>
		<label for="monthPicker2">Month Picker with initial month: </label>
		<br />
		<input name="monthPicker2" use:monthPicker={defaultDateRangeOptions} />
	</section>
	<br />
	<section>
		<label for="monthPicker3"> Month Picker with flatpickr element binding: </label>
		<br />
		<input
			name="monthPicker3"
			use:monthPicker={monthPickerOptions}
			bind:this={informMonthPickerElement}
		/>
		<button type="button" on:click={handleMonthPickerInFromBindClick}>Clear</button>
	</section>
	<br />
	<section>
		<label for="monthPicker4">Month Picker with wrapper</label>
		<br />
		<div use:monthPicker={wrapMonthPickerOptions}>
			<input name="monthPicker4" data-input />
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
