<script>
	import CodeShowBlock from '$components/CodeShowBlock.svelte';
	import { enhance } from '$app/forms';
	import { datePicker } from '$lib/actions.js';
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

	const dateOptions = {
		dateFormat: 'Z',
		altFormat: 'd F Y',
		altInput: true,
		ariaDateFormat: 'd F Y'
	};

	const defaultDateOptions = {
		...dateOptions,
		defaultDate: '2023-05-25',
		resetToDefault: true
	};

	const minMaxDateOptions = {
		...dateOptions,
		minDate: '2019-03',
		maxDate: '2033-12-31'
	};

	const hookDateOptions = {
		...dateOptions,
		onChange: (selectedDates, dateStr) => {
			console.log('on change hook!');
			console.log(selectedDates[0]);
			console.log(dateStr);
		},
		onOpen: (selectedDates, dateStr) => {
			console.log('on open hook!');
		},
		onClose: (selectedDates, dateStr) => {
			console.log('on close hook!');
		}
	};
	const wrapDatepickerOptions = {
		...datepickerOptions,
		wrap: true
	};

	const changeHandler = (event) => {
		if (event.detail) {
			const { selectedDates, dateStr, instance } = event.detail;
			console.log('event change!', { selectedDates, dateStr, instance });
		}
	};

	const openHandler = (event) => {
		console.log('event open!');
	};

	const closeHandler = (event) => {
		console.log('event close!');
	};

	const handdleDatepickerBindClick = () => {
		datepickerElement._flatpickr.clear();
	};

	const handdleDatepickerInfromBindClick = () => {
		informDatepickerElement._flatpickr.clear();
	};
</script>

<a href="/">« Back</a>
<h1>Datepicker</h1>
<div class="details">
	<section>
		<div>
			<h4 for="normalDatepicker">Normal Date picker</h4>
			<input name="normalDatepicker" use:datePicker={dateOptions} readonly />
		</div>
		<details>
			<summary>How to ?</summary>
			<div style="display:flex;gap:1rem;flex-wrap: wrap;">
				<CodeShowBlock
					title="Options"
					code={`const dateOptions = {
	dateFormat: 'Z',
	altFormat: 'd F Y',
	altInput: true,
	ariaDateFormat: 'd F Y',
};`}
				/>

				<CodeShowBlock
					code={`<input name="normalDatepicker" use:datePicker={dateOptions} readonly/>`}
				/>
			</div>
		</details>
	</section>
	<br />
	<section>
		<h4 for="datepickerDefaultDate">Date picker with initial date:</h4>
		<input name="datepickerDefaultDate" use:datePicker={defaultDateOptions} readonly />
		<details>
			<summary>How to ?</summary>
			<p>adding `defaultDate` to options</p>
			<div style="display:flex;gap:1rem;flex-wrap: wrap;">
				<CodeShowBlock
					title="Options"
					code={`const defaultDateOptions = {
	dateFormat: 'Z',
	altFormat: 'd F Y',
	altInput: true,
	ariaDateFormat: 'd F Y',
	defaultDate: '2023-12-30',
};`}
				/>

				<CodeShowBlock
					code={`<input name="datepickerDefaultDate" use:datePicker={defaultDateOptions} readonly/>`}
				/>
			</div>
		</details>
	</section>
	<br />
	<section>
		<h4 for="datepickerMinMaxDate">Date picker with min/max date:</h4>
		<input name="datepickerMinMaxDate" use:datePicker={minMaxDateOptions} readonly />
		<details>
			<summary>How to ?</summary>
			<p>adding `minDate` and/or `maxDate` to options</p>
			<p>
				`maxDate` will extended a maximum year you can select in year dropdown if it greater than
				current year.
			</p>
			<div style="display:flex;gap:1rem;flex-wrap: wrap;">
				<CodeShowBlock
					title="Options"
					code={`const minMaxDateOptions = {
	dateFormat: 'Z',
	altFormat: 'd F Y',
	altInput: true,
	ariaDateFormat: 'd F Y',
	minDate: '2019-03',
	maxDate: '2033-12'
};`}
				/>

				<CodeShowBlock
					code={`<input name="datepickerMinMaxDate" use:datePicker={minMaxDateOptions} readonly />`}
				/>
			</div>
		</details>
	</section>
	<br />
	<section>
		<h4 for="datepickerHookDate">Date picker with hook options:</h4>
		<input name="datepickerHookDate" use:datePicker={hookDateOptions} readonly />
		<details>
			<summary>How to ?</summary>
			<p>
				in this example is using only `onChange`, `onOpen` and `onClose` but you can adding any
				flatpickr hook to the options. (you can open console to see the hook is working)
			</p>
			<div style="display:flex;gap:1rem;flex-wrap: wrap;">
				<CodeShowBlock
					title="Options"
					code={`const hookDateOptions = {
	...dateOptions,
	onChange: (selectedDates, dateStr) => {
		console.log('on change hook!');
		console.log(selectedDates[0]);
		console.log(dateStr);
	},
	onOpen: (selectedDates, dateStr) => {
		console.log('on open hook!');
	},
	onClose: (selectedDates, dateStr) => {
		console.log('on close hook!');
	}
};`}
				/>

				<CodeShowBlock
					code={`	<input name="datepickerHookDate" use:datePicker={hookDateOptions} readonly />`}
				/>
			</div>
		</details>
	</section>
	<br />
	<section>
		<h4 for="datepickerOnDirectiveDate">Date picker with `on` directive:</h4>
		<input
			name="datepickerOnDirectiveDate"
			use:datePicker={dateOptions}
			on:change={changeHandler}
			on:open={openHandler}
			on:close={closeHandler}
			readonly
		/>
		<details>
			<summary>How to ?</summary>
			<p>
				also like a datepicker with hook you can using svelte's `on` directive with a name of hook
				too.
			</p>
			<p>
				you can access to a data of hook by using `event.detail` (you can open console to see the
				event is working)
			</p>
			<div style="display:flex;gap:1rem;flex-wrap: wrap;">
				<CodeShowBlock
					title="Options"
					code={`const dateOptions = {
	dateFormat: 'Z',
	altFormat: 'd F Y',
	altInput: true,
	ariaDateFormat: 'd F Y'
};`}
				/>
				<CodeShowBlock
					title="Script"
					code={`const changeHandler = (event) => {
	if (event.detail) {
		const { selectedDates, dateStr, instance } = event.detail;
		console.log('event change!', { selectedDates, dateStr, instance });
	}
};
const openHandler = (event) => {
	console.log('event open!');
};
const closeHandler = (event) => {
	console.log('event close!');
};`}
				/>

				<CodeShowBlock
					code={`<input name="datepickerOnDirectiveDate" 
	use:datePicker={dateOptions} 
	on:change={changeHandler} 
	on:open={openHandler} 
	on:close={closeHandler} 
	readonly 
/>`}
				/>
			</div>
		</details>
	</section>
	<br />
	<section>
		<h4 for="normalDatepickerBind">Date picker with flatpickr element binding:</h4>
		<input name="normalDatepickerBind" use:datePicker={dateOptions} bind:this={datepickerElement} />
		<button type="button" on:click={handdleDatepickerBindClick}>Clear</button>
		<details>
			<summary>How to ?</summary>
			<p>You can binding a element and using `._flatpickr` to access to flatpickr instance</p>
			<div style="display:flex;gap:1rem;flex-wrap: wrap;">
				<CodeShowBlock
					title="Options"
					code={`const defaultDateOptions = {
	dateFormat: 'Z',
	altFormat: 'd F Y',
	altInput: true,
	ariaDateFormat: 'd F Y',
};`}
				/>
				<CodeShowBlock
					title="Script"
					code={`let datepickerElement;
const handdleDatepickerBindClick = () => {
	datepickerElement._flatpickr.clear();
};
					`}
				/>
				<CodeShowBlock
					code={`<input name="normalDatepickerBind" use:datePicker={dateOptions} bind:this={datepickerElement} readonly/>
<button type="button" on:click={handdleDatepickerBindClick}>Clear</button>`}
				/>
			</div>
		</details>
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
</div>
