<script>
	import { enhance } from '$app/forms';
	import { monthRangePicker } from '$lib/actions.js';
	import { Thai } from 'flatpickr_plus/dist/l10n/th.js';
	let monthRangePickerElement, informMonthRangePickerElement, myForm;

	const monthRangePickerOptions = {
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

	const defaultDateRangeOptions = {
		...monthRangePickerOptions,
		defaultDate: ['2022-09', '2023-07'],
		resetToDefault: true
	};

	const wrapMonthRangePickerOptions = {
		...monthRangePickerOptions,
		wrap: true
	};

	const handleChange = (event) => {
		if (event.detail) {
			const { selectedDates, dateStr, instance } = event.detail;
			console.log('event change!!!', { selectedDates, dateStr, instance });
		}
	};

	const handleMonthRangePickerBindClick = () => {
		monthRangePickerElement._flatpickr.clear();
	};

	const handleMonthRangePickerInFromBindClick = () => {
		informMonthRangePickerElement._flatpickr.clear();
	};
</script>

<h1>Month Range Picker</h1>

<section>
	<label for="normalMonthRangePicker">Month Range Picker: </label>
	<br />
	<input
		name="normalMonthRangePicker"
		use:monthRangePicker={monthRangePickerOptions}
		on:change={handleChange}
	/>
</section>
<br />
<section>
	<label for="normalMonthRangePickerDefaultDate">Month Range Picker with initial date: </label>
	<br />
	<input name="normalMonthRangePickerDefaultDate" use:monthRangePicker={defaultDateRangeOptions} />
</section>
<br />
<section>
	<label for="normalMonthRangePickerBind">
		Month Range Picker with flatpickr element binding:
	</label>
	<br />
	<input
		name="normalMonthRangePickerBind"
		use:monthRangePicker={monthRangePickerOptions}
		bind:this={monthRangePickerElement}
	/>
	<button type="button" on:click={handleMonthRangePickerBindClick}>Clear</button>
</section>
<br />
<section>
	<label for="withWrapperMonthRangePicker">Month Range Picker with wrapper</label>
	<br />
	<div use:monthRangePicker={wrapMonthRangePickerOptions}>
		<input name="withWrapperMonthRangePicker" data-input />
		<button type="button" title="toggle" data-toggle> toggle </button>
		<button type="button" title="clear" data-clear> clear </button>
	</div>
</section>
<br />

<h1>Using in from</h1>
<form method="POST" use:enhance>
	<section>
		<label for="monthRangePicker1">Month Range Picker: </label>
		<br />
		<input name="monthRangePicker1" use:monthRangePicker={monthRangePickerOptions} />
	</section>
	<br />
	<section>
		<label for="monthRangePicker2">Month Range Picker with initial month: </label>
		<br />
		<input name="monthRangePicker2" use:monthRangePicker={defaultDateRangeOptions} />
	</section>
	<br />
	<section>
		<label for="monthRangePicker3"> Month Range Picker with flatpickr element binding: </label>
		<br />
		<input
			name="monthRangePicker3"
			use:monthRangePicker={monthRangePickerOptions}
			bind:this={informMonthRangePickerElement}
		/>
		<button type="button" on:click={handleMonthRangePickerInFromBindClick}>Clear</button>
	</section>
	<br />
	<section>
		<label for="monthRangePicker4">Month Range Picker with wrapper</label>
		<br />
		<div use:monthRangePicker={wrapMonthRangePickerOptions}>
			<input name="monthRangePicker4" data-input />
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
