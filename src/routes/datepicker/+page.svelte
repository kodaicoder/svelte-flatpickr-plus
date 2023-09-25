<script>
	import { enhance } from '$app/forms';
	import { datePicker } from '$lib/svelte-flatpickr-plus.js';
	import { Thai } from 'flatpickr_plus/dist/l10n/th.js';
	let datepickerElement, informDatepickerElement, myForm;

	const datepickerOptions = {
		dateFormat: 'Z',
		altFormat: 'd F Y',
		altInput: true,
		ariaDateFormat: 'd F Y',
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

	const defaultDateOptions = {
		...datepickerOptions,
		defaultDate: '2023-12-30',
		resetToDefault: true
	};

	const wrapDatepickerOptions = {
		...datepickerOptions,
		wrap: true
	};

	const handleChange = (event) => {
		if (event.detail) {
			const { selectedDates, dateStr, instance } = event.detail;
			console.log('event change!!!', { selectedDates, dateStr, instance });
		}
	};

	const handdleDatepickerBindClick = () => {
		datepickerElement._flatpickr.clear();
	};

	const handdleDatepickerInfromBindClick = () => {
		informDatepickerElement._flatpickr.clear();
	};
</script>

<h1>Datepicker</h1>

<section>
	<label for="normalDatepicker">Date picker: </label>
	<br />
	<input name="normalDatepicker" use:datePicker={datepickerOptions} on:change={handleChange} />
</section>
<br />
<section>
	<label for="normalDatepickerDefaultDate">Date picker with initial date: </label>
	<br />
	<input name="normalDatepickerDefaultDate" use:datePicker={defaultDateOptions} />
</section>
<br />
<section>
	<label for="normalDatepickerBind"> Date picker with flatpickr element binding: </label>
	<br />
	<input
		name="normalDatepickerBind"
		use:datePicker={datepickerOptions}
		bind:this={datepickerElement}
	/>
	<button type="button" on:click={handdleDatepickerBindClick}>Clear</button>
</section>
<br />
<section>
	<label for="withWrapperDatepicker">Date picker with wrapper</label>
	<br />
	<div use:datePicker={wrapDatepickerOptions}>
		<input name="withWrapperDatepicker" data-input />
		<button type="button" title="toggle" data-toggle> toggle </button>
		<button type="button" title="clear" data-clear> clear </button>
	</div>
</section>
<br />

<h1>Using in from</h1>
<form method="POST" use:enhance>
	<section>
		<label for="datepicker1">Date picker: </label>
		<br />
		<input name="datepicker1" use:datePicker={datepickerOptions} />
	</section>
	<br />
	<section>
		<label for="datepicker2">Date picker with initial date: </label>
		<br />
		<input name="datepicker2" use:datePicker={defaultDateOptions} />
	</section>
	<br />
	<section>
		<label for="datepicker3"> Date picker with flatpickr element binding: </label>
		<br />
		<input
			name="datepicker3"
			use:datePicker={defaultDateOptions}
			bind:this={informDatepickerElement}
		/>
		<button type="button" on:click={handdleDatepickerInfromBindClick}>Clear</button>
	</section>
	<br />
	<section>
		<label for="datepicker4">Date picker with wrapper</label>
		<br />
		<div use:datePicker={wrapDatepickerOptions}>
			<input name="datepicker4" data-input />
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
