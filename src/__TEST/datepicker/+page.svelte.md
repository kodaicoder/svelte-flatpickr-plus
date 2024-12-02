<script>
	import CodeShowBlock from '$components/CodeShowBlock.svelte';
	import { enhance } from '$app/forms';
	import svlatepickr from '$lib';
	import { Thai } from 'flatpickr_plus/dist/l10n/th.js';

	let datepickerElement, informDatepickerElement, myForm;

	const todayDate = new Date();

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
		minDate: new Date().setDate(todayDate.getDate() - 5),
		maxDate: new Date().setDate(todayDate.getDate() + 5)
	};

	const disabledOptions = {
		...dateOptions,
		disable: [
			new Date().setDate(todayDate.getDate() - 3),
			new Date().setDate(todayDate.getDate() + 3)
		]
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

	const timeOptions = {
		defaultDate: '12:30',
		enableTime: true,
		noCalendar: true,
		dateFormat: 'H:i'
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

<a href="/#advances">« Back to Main page</a>

<div class="content">

    <h1>Date picker</h1>

    <div class="details">
    	<section>
    		<div>

    		### Normal Date picker🔗

    			<input name="normalDatepicker" use:svlatepickr={dateOptions} readonly />
    		</div>
    		<details>
    			<summary>How to ?</summary>
    			<div>

```svelte
<script>
</script>
```

    		</div>
    		</details>
    	</section>
    </div>

</div>
