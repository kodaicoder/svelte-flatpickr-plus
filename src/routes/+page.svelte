<script>
	// calling actions
	import {
		datePicker,
		monthPicker,
		dateRangePicker,
		monthRangePicker
	} from '$lib/actions';

	const datepickerOptions = {
		dateFormat: 'Z',
		altFormat: 'd F Y',
		altInput: true,
		ariaDateFormat: 'd F Y',
		useLocaleYear: true,
		minDate: '2019-03',
		maxDate: '2033-12-31',
		disable: ['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 6, 8)],
		resetMoveDefault: false,
		position: 'auto left',
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

	const monthPickerOptions = {
		dateFormat: 'Z',
		altFormat: 'F Y',
		altInput: true,
		ariaDateFormat: 'F Y',
		useLocaleYear: true,
		minDate: '2019-01',
		maxDate: '2033-04',
		disable: ['2023-09', '2022-07', '2021-03', new Date(2020, 11, 1)],
		resetMoveDefault: false,
		position: 'auto left',
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

	const dateRangePickerOptions = {
		dateFormat: 'Z',
		altFormat: 'd M y',
		altInput: true,
		ariaDateFormat: 'd M y',
		useLocaleYear: true,
		minDate: '2019-03',
		maxDate: '2033-12-31',
		disable: ['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 6, 8)],
		resetMoveDefault: false,
		position: 'auto left',
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

	const monthRangePickerOptions = {
		dateFormat: 'Z',
		altFormat: 'F Y',
		altInput: true,
		ariaDateFormat: 'F Y',
		useLocaleYear: true,
		minDate: '2019-01',
		maxDate: '2033-04',
		disable: ['2023-09', '2022-07', '2021-03', new Date(2020, 11, 1)],
		resetMoveDefault: false,
		position: 'auto left',
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
</script>

<h1>Welcome to Svelte Flatpickr Plus</h1>

<p>
	Flatpickr is a lightweight and powerful datetime picker. Svelte Flatpickr Plus is a wrapper for
	Flatpickr with some extra features.
</p>

<h2>What is difference from Svelte Flatpickr ?</h2>
<ul>
	<li>
		Svelte Flatpickr Plus is just a svelte actions that you can using with use:action directive of
		svelte on input element with any class or style
	</li>
	<li>
		You can using your locale years (e.g. Buddhist Era) with <code>useLocaleYear</code> option.
	</li>
	<li>
		You can setting a reset behavior with <code>resetMoveDefault</code> and
		<code>resetToDefault</code> option.
	</li>
	<li>
		On a calendar, year input has been replace with year dropdown element for easy to select year.
	</li>
	<li>
		Have theme changer plugin to calling and change a theme of calendar while theme has been
		changed.
	</li>
</ul>

<h2>Actions</h2>
<p>Svelte Flatpickr Plus coming with 4 actions</p>
<ul>
	<li>datePicker</li>
	<li>monthPicker</li>
	<li>dateRangePicker</li>
	<li>monthRangePicker</li>
</ul>
<h3>
	Date Picker
	<input
		name="input_datepicker"
		use:datePicker={datepickerOptions}
		placeholder="please select date"
		readonly
	/>
</h3>
<h3>
	Month Picker
	<input
		name="input_monthpicker"
		use:monthPicker={monthPickerOptions}
		placeholder="please select month"
		readonly
	/>
</h3>
<h3>
	Date Range datePicker
	<input
		name="input_daterangepicker"
		use:dateRangePicker={dateRangePickerOptions}
		placeholder="please select date range"
		readonly
	/>
</h3>
<h3>
	Month Range Picker
	<input
		name="input_monthrangepicker"
		use:monthRangePicker={monthRangePickerOptions}
		placeholder="please select month range"
		readonly
	/>
</h3>
