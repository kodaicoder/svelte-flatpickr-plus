<script>
	import CodeShowBlock from '$components/CodeShowBlock.svelte';
	import { enhance } from '$app/forms';
	import { datePicker } from '$lib/actions.js';
	import { Thai } from 'flatpickr_plus/dist/l10n/th.js';
	let datepickerElement, informDatepickerElement, myForm;

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

	const disabledOptions = {
		...dateOptions,
		disable: ['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 11, 30)]
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
	const wrapOptions = {
		...dateOptions,
		wrap: true
	};

	const localizeOptions = {
		...dateOptions,
		useLocaleYear: true,
		locale: Thai
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

<a href="/">« Back to Main page</a>
<h1>Datepicker</h1>
<div class="details">
	<section>
		<div>
			<h4 id="normaldatepicker" for="normalDatepicker">
				Normal Date picker<a href="#normaldatepicker" class="permalink">🔗</a>
			</h4>

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
		<h4 id="initaildatepicker" for="datepickerDefaultDate">
			Date picker with initial date<a href="#initaildatepicker" class="permalink">🔗</a>
		</h4>

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
		<h4 id="minmaxdatepicker" for="datepickerMinMaxDate">
			Date picker with min/max date<a href="#minmaxdatepicker" class="permalink">🔗</a>
		</h4>

		<input name="datepickerMinMaxDate" use:datePicker={minMaxDateOptions} readonly />
		<details>
			<summary>How to ?</summary>
			<p>
				adding `minDate` and/or `maxDate` to options and passing date string or date object as a
				value
			</p>
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
		<h4 id="disableddatepicker" for="datepickerDisableDate">
			Date picker with disable date<a href="#disableddatepicker" class="permalink">🔗</a>
		</h4>

		<input name="datepickerDisableDate" use:datePicker={disabledOptions} readonly />
		<details>
			<summary>How to ?</summary>
			<p>adding `disable` to options and passing date string or date object as a value</p>
			<div style="display:flex;gap:1rem;flex-wrap: wrap;">
				<CodeShowBlock
					title="Options"
					code={`const disabledOptions = {
	dateFormat: 'Z',
	altFormat: 'd F Y',
	altInput: true,
	ariaDateFormat: 'd F Y',
	disable: ['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 11, 30)]
};`}
				/>

				<CodeShowBlock
					code={`<input name="datepickerDisableDate" use:datePicker={disabledOptions} readonly />`}
				/>
			</div>
		</details>
	</section>
	<br />
	<section>
		<h4 id="hookdatepicker" for="datepickerHookDate">
			Date picker with hook options <a href="#hookdatepicker" class="permalink">🔗</a>
		</h4>

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
		<h4 id="eventdatepicker" for="datepickerOnDirectiveDate">
			Date picker with `on` directive<a href="#eventdatepicker" class="permalink">🔗</a>
		</h4>

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
		<h4 id="binddatepicker" for="normalDatepickerBind">
			Date picker with flatpickr element binding<a href="#binddatepicker" class="permalink">🔗</a>
		</h4>

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
		<h4 id="wrapdatepicker" for="wrapperDatepicker">
			Date picker with wrapper<a href="#wrapdatepicker" class="permalink">🔗</a>
		</h4>
		<div use:datePicker={wrapOptions}>
			<input name="wrapperDatepicker" data-input />
			<button type="button" title="toggle" data-toggle> toggle </button>
			<button type="button" title="clear" data-clear> clear </button>
		</div>
		<details>
			<summary>How to ?</summary>
			<p>
				You can using a datepicker action on wrapper element such as `div` by passing `wrap: true`
				as a additional option and adding `data-input` as a attribute to input element.
			</p>
			<div style="display:flex;gap:1rem;flex-wrap: wrap;">
				<CodeShowBlock
					title="Options"
					code={`const wrapOptions = {
	dateFormat: 'Z',
	altFormat: 'd F Y',
	altInput: true,
	ariaDateFormat: 'd F Y',
	wrap:true
};`}
				/>

				<CodeShowBlock
					code={`<div use:datePicker={wrapOptions}>
	<input name="wrapperDatepicker" data-input />
	<button type="button" title="toggle" data-toggle> toggle </button>
	<button type="button" title="clear" data-clear> clear </button>
</div>
`}
				/>
			</div>
		</details>
	</section>
	<br />

	<section>
		<div>
			<h4 id="localdatepicker" for="localizeDatepicker">
				Localize and Local year<a href="#localdatepicker" class="permalink">🔗</a>
			</h4>

			<input name="localizeDatepicker" use:datePicker={localizeOptions} readonly />
		</div>
		<details>
			<summary>How to ?</summary>
			<p>
				In this example will using Thai language by adding `locale: Thai` to options while `Thai` is
				imported from `flatpickr_plus/dist/l10n/th.js` and using Buddhist era by
				adding`useLocaleYear: true` to options
			</p>
			<div style="display:flex;gap:1rem;flex-wrap: wrap;">
				<CodeShowBlock
					title="Options"
					code={`const dateOptions = {
	dateFormat: 'Z',
	altFormat: 'd F Y',
	altInput: true,
	ariaDateFormat: 'd F Y',
	locale: Thai,
	useLocaleYear: true
};`}
				/>
				<CodeShowBlock
					title="Script"
					code={`import { Thai } from 'flatpickr_plus/dist/l10n/th.js';`}
				/>
				<CodeShowBlock
					code={`<input name="localizeDatepicker" use:datePicker={localizeOptions} readonly />`}
				/>
			</div>
		</details>
	</section>
	<br />
</div>
<h1>Using in from</h1>
<p>
	you can checking this usage at <a href="https://www.sveltelab.dev/tn5l4ht64wch792" target="_blank"
		>this REPL</a
	>
</p>
<form method="POST" use:enhance>
	<section>
		<label for="datepicker1">Date picker: </label>
		<br />
		<input name="datepicker1" use:datePicker={dateOptions} />
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
		<div use:datePicker={wrapOptions}>
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
</form>
