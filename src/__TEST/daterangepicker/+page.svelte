<script>
	import { enhance } from '$app/forms';
	import svlatepickr from '$lib';
	import { Thai } from 'flatpickr_plus/dist/l10n/th.js';
	let dateRangePickerElement = $state(),
		informDateRangePickerElement = $state(),
		myForm;

	const dateRangePickerOptions = {
		mode: 'range',
		dateFormat: 'Z',
		altFormat: 'd M y',
		altInput: true,
		ariaDateFormat: 'd M y',
		useLocaleYear: true,
		locale: Thai,
		minDate: '2019-03',
		maxDate: '2033-12-31',
		disable: ['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 6, 8)],
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
		...dateRangePickerOptions,
		defaultDate: ['2020-08-01', '2023-12-28'],
		resetToDefault: true
	};

	const wrapDateRangePickerOptions = {
		...dateRangePickerOptions,
		wrap: true
	};

	const handleChange = (event) => {
		if (event.detail) {
			const { selectedDates, dateStr, instance } = event.detail;
			console.log('event change!!!', { selectedDates, dateStr, instance });
		}
	};

	const handleDateRangePickerBindClick = () => {
		dateRangePickerElement._flatpickr.clear();
	};

	const handleDateRangePickerInFromBindClick = () => {
		informDateRangePickerElement._flatpickr.clear();
	};
</script>

<a href="/#advances">« Back</a>
<h1>Date Range Picker</h1>

<section>
	<label for="normalDateRangePicker">Date Range Picker: </label>
	<br />
	<input
		name="normalDateRangePicker"
		use:svlatepickr={dateRangePickerOptions}
		onchange={handleChange}
	/>
</section>
<br />
<section>
	<label for="normalDateRangePickerDefaultDate">Date Range Picker with initial date: </label>
	<br />
	<input name="normalDateRangePickerDefaultDate" use:svlatepickr={defaultDateRangeOptions} />
</section>
<br />
<section>
	<label for="normalDateRangePickerBind"> Date Range Picker with flatpickr element binding: </label>
	<br />
	<input
		name="normalDateRangePickerBind"
		use:svlatepickr={dateRangePickerOptions}
		bind:this={dateRangePickerElement}
	/>
	<button type="button" onclick={handleDateRangePickerBindClick}>Clear</button>
</section>
<br />
<section>
	<label for="withWrapperDateRangePicker">Date Range Picker with wrapper</label>
	<br />
	<div use:svlatepickr={wrapDateRangePickerOptions}>
		<input name="withWrapperDateRangePicker" data-input />
		<button type="button" title="toggle" data-toggle> toggle </button>
		<button type="button" title="clear" data-clear> clear </button>
	</div>
</section>
<br />

<h1>Using in from</h1>
<form method="POST" use:enhance>
	<section>
		<label for="dateRangePicker1">Date Range Picker: </label>
		<br />
		<input name="dateRangePicker1" use:svlatepickr={dateRangePickerOptions} />
	</section>
	<br />
	<section>
		<label for="dateRangePicker2">Date Range Picker with initial date: </label>
		<br />
		<input name="dateRangePicker2" use:svlatepickr={defaultDateRangeOptions} />
	</section>
	<br />
	<section>
		<label for="dateRangePicker3"> Date Range Picker with flatpickr element binding: </label>
		<br />
		<input
			name="dateRangePicker3"
			use:svlatepickr={dateRangePickerOptions}
			bind:this={informDateRangePickerElement}
		/>
		<button type="button" onclick={handleDateRangePickerInFromBindClick}>Clear</button>
	</section>
	<br />
	<section>
		<label for="dateRangePicker4">Date Range Picker with wrapper</label>
		<br />
		<div use:svlatepickr={wrapDateRangePickerOptions}>
			<input name="dateRangePicker4" data-input />
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
<a href="/#advances" style="display:block;margin-top:1rem;">« Back to Main page</a>
