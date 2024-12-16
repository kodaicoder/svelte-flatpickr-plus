---
title: Advance usage of Month range picker
---

<script>
    import {formDataToJson,getFirstDaysOfMonth} from '$lib/utils.js'
    import { enhance } from '$app/forms';
    import svlatepickr from '$lib';
    import { l10n } from '$lib';
    const thaiLocale = l10n.th;

    let	dateFormatValue = $state(),
        altInputValue = $state(),
        defaultDateValue = $state(),
        minMaxDateValue = $state(),
        disableDateValue = $state(),
        hooksValue=$state(),
        eventDateValue=$state(),
        domDateValue=$state(),
        domDate,
        clearBehaviorDateValue=$state(),
        clearBehaviorDateElement,
        wrapDateValue=$state(),
        localizeDateValue=$state(),
        informDatePickerElement,
        formDataJSON=$state();

    const todayDate = new Date();

    const dateFormatOptions ={
        isMonthPicker: true,
mode: 'range',
		mode:'range',
        dateFormat: 'Z'
    }

    const altInputOptions = {
        ...dateFormatOptions,
        dateFormat:'Z',
        altInput:true,
        altFormat: 'F Y',
    }

    const defaultDateOptions ={
        ...altInputOptions,
        defaultDate: [
            getFirstDaysOfMonth(0),
            getFirstDaysOfMonth(2)
            ]
    }

    const minMaxDateOptions = {
        ...altInputOptions,
        minDate: getFirstDaysOfMonth(-2),
        maxDate: getFirstDaysOfMonth(2)
      };

    const disableDateOptions  = {
       ...altInputOptions,
        disable: [
            getFirstDaysOfMonth(-2),
            getFirstDaysOfMonth(2)
        ]
    };

    const hooksOptions = {
      ...altInputOptions,
      onChange: (selectedDates, dateStr, instance) => {
        console.log('on change hook!');
        console.log(selectedDates[0]);
        console.log(dateStr);
      },
      onOpen: (selectedDates, dateStr, instance) => {
        console.log('on open hook!');
      },
      onClose: (selectedDates, dateStr, instance) => {
        console.log('on close hook!');
      }
    };

    const eventDateOptions ={
        ...altInputOptions,
    }

    const domDateOptions={
        ...altInputOptions
    }

    const clearBehaviorDateOptions ={
        ...defaultDateOptions,
        resetMoveDefault: false,
        resetToDefault: false,
    }

    const wrapOptions={
        ...altInputOptions,
        wrap:true
    }

    const localizeDateOptions={
        ...altInputOptions,
        locale:thaiLocale,
        useLocaleYear: true
    }

    const changeHandler =(event)=>{
        console.log('event change!',event)
    }

    const valueUpdateHandler = (event) => {
        // console.log(event.target.name);
        if (event.detail) {
           const { selectedDates, dateStr, instance } = event.detail;
           console.log('event value update!', { selectedDates, dateStr, instance });
        }
    };
    const openHandler = (event) => {
        console.log('event open!');
    };
    const closeHandler = (event) => {
        console.log('event close!');
    };

    const beforeSubmitHandler = ({ formElement, formData,  cancel }) => {
        formDataJSON = formDataToJson(formData)
        cancel();
        formElement.reset();
    }

</script>

## Change date format

change the date format as you like

:::tip[Support Format]
You can check supported date format characters [here](https://flatpickr.js.org/formatting/)
:::

```svelte title=".svelte" ln
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	const options = {
		isMonthPicker: true,
		mode: 'range',
		dateFormat: 'Z' /*set as ISO Date format**/ // [svp! ++]
	};
</script>

<input name="dateFormat" use:svlatepickr={options} />
```

Result:

<input name="dateFormat" use:svlatepickr={dateFormatOptions} bind:value={dateFormatValue}/>

Value:

{dateFormatValue ?dateFormatValue : 'Please select date from above input.'}

## Alt input

change the date format as you like , unaffected a real value

:::tip[Support Format]
You can check supported date format characters [here](https://flatpickr.js.org/formatting/)
:::

```svelte title=".svelte" ln
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	const options = {
		isMonthPicker: true,
		mode: 'range',
		dateFormat: 'Z' /*set as ISO Date format**/,
		altInput: true, // [svp! ++]
		altFormat: 'F Y' // [svp! ++]
	};
</script>

<input name="altInput" use:svlatepickr={options} />
```

Result:

<input name="altInput" use:svlatepickr={altInputOptions} bind:value={altInputValue}/>

Value:

{altInputValue ?altInputValue : 'Please select date from above input.'}

## Set default date

Set a default date to input after component is mounted

:::note[select one date]
If select only one date and click out side of calendar with `defaultDate` options provided, this will reset a select date range to a default date that provided, if not want it reset into a default date just passing additional options `resetToDefault` as `false`.
:::

:::caution[defaultDate]
If sending more than 2 date data in `defaultDate` options flatpickr will using only the first two date data in array as a default date
:::

```svelte title=".svelte" ln
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	const todayDate = new Date(); // [svp! ++]
	const options = {
		isMonthPicker: true,
		mode: 'range',
		dateFormat: 'Z' /*set as ISO Date format**/,
		altInput: true,
		altFormat: 'F Y',
		defaultDate: // [svp! ++][
			/**Set default date as today month to next 2 month*/ // [svp! ++]
			getFirstDaysOfMonth(0), // [svp! ++]
			getFirstDaysOfMonth(2) // [svp! ++]
		] // [svp! ++]
	};

        // [svp! ++]function getFirstDaysOfMonth(offset) {
            const date = new Date(); // [svp! ++]
            date.setDate(1); // [svp! ++]
            date.setMonth(date.getMonth() + offset); // [svp! ++]
            date.setHours(0, 0, 0, 0, 0); // [svp! ++]
            return date.toISOString(); // [svp! ++]
        } // [svp! ++]
</script>

<input name="altInput" use:svlatepickr={options} />
```

Result:

<input name="defaultDate" bind:value={defaultDateValue} use:svlatepickr={defaultDateOptions} />

Value:

{defaultDateValue ?defaultDateValue : 'Please select date from above input.'}

## Set min/max date

Set a min/max date to a date picker

:::important[minDate]
Be careful while setting a `minDate` please rechecking that minDate is starting from a first date of the month
if it not it will cause a problem that you can not select a month even it available to selected.
:::

```svelte title=".svelte" ln
<script>
	import svlatepickr from 'svelte-flatpickr-plus';

	const options = {
        isMonthPicker: true,
        mode: 'range',
		dateFormat: 'Z' /*set as ISO Date format**/,
		altInput: true,
		altFormat: 'F Y',
		minDate: getFirstDaysOfMonth(-2) /*set min month to 2 month ago**/, // [svp! ++]
		maxDate: getFirstDaysOfMonth(2) /*set max month to 2 month later**/ // [svp! ++]
	};

	// [svp! ++]function getFirstDaysOfMonth(offset) {
		const date = new Date(); // [svp! ++]
		date.setDate(1); // [svp! ++]
		date.setMonth(date.getMonth() + offset); // [svp! ++]
		date.setHours(0, 0, 0, 0, 0); // [svp! ++]
		return date.toISOString(); // [svp! ++]
        } // [svp! ++]
</script>

<input name="minMaxDate" use:svlatepickr={options} />
```

Result:

<input name="minMaxDate" bind:value={minMaxDateValue} use:svlatepickr={minMaxDateOptions} />

Value:

{minMaxDateValue ?minMaxDateValue : 'Please select date from above input.'}

## Set disable date

Disable any date in calendar

```svelte title=".svelte" ln
<script>
    import svlatepickr from 'svelte-flatpickr-plus';

    const options = {
        isMonthPicker: true,
        mode: 'range',
        dateFormat: 'Z' /*set as ISO Date format**/,
        altInput: true,
        altFormat: 'F Y',
        // [svp! ++]disable: [
            getFirstDaysOfMonth(-2),/*disable a month that 2 days ago**/ // [svp! ++]
            getFirstDaysOfMonth(-2)/*disable a month that 2 days later**/ // [svp! ++]
        ]// [svp! ++]
    };

    	// [svp! ++]function getFirstDaysOfMonth(offset) {
		const date = new Date(); // [svp! ++]
		date.setDate(1); // [svp! ++]
		date.setMonth(date.getMonth() + offset); // [svp! ++]
		date.setHours(0, 0, 0, 0, 0); // [svp! ++]
		return date.toISOString(); // [svp! ++]
        } // [svp! ++]
</script>

<input name="disableDate" use:svlatepickr={options} />
```

Result:

<input name="disableDate" bind:value={disableDateValue} use:svlatepickr={disableDateOptions} />

Value:

{disableDateValue ?disableDateValue : 'Please select date from above input.'}

## Hooks

Build a date picker with hooks options

:::tip[Hooks]
You can check all supported hooks name [here](https://flatpickr.js.org/events/#hooks)
:::

```svelte title=".svelte" ln
<script>
    import svlatepickr from 'svelte-flatpickr-plus';
    const options = {
        isMonthPicker: true,
        mode: 'range',
        dateFormat: 'Z' /*set as ISO Date format**/,
        altInput: true,
        altFormat: 'F Y',
        // [svp! ++]onChange: (selectedDates, dateStr) => {
                console.log('on change hook!');// [svp! ++]
                console.log(selectedDates[0]);// [svp! ++]
                console.log(dateStr);// [svp! ++]
            },// [svp! ++]
            // [svp! ++]onOpen: (selectedDates, dateStr) => {
                console.log('on open hook!');// [svp! ++]
            },// [svp! ++]
            // [svp! ++]onClose: (selectedDates, dateStr) => {
                console.log('on close hook!');// [svp! ++]
            }// [svp! ++]
    };
</script>

<input name="hooks" use:svlatepickr={options} />
```

Result: <mark>open developer tools and checking console for hooks results</mark>

<input name="hooks" bind:value={hooksValue} use:svlatepickr={hooksOptions} />

Value:

{hooksValue ?hooksValue : 'Please select date from above input.'}

## Listen to events

Listen to event of the date picker from input and with that you can get  
`selectedDates`, `dateStr` or `instance` data with `detail` object from callback Event data

:::tip[Events]
All supported events name is just like as hooks name but in **_all lower case_**.  
you can check all supported hooks name [here](https://flatpickr.js.org/events/#hooks)
:::

:::caution[ onchange event ]
With `onchange` event you can not access to `detail` object because  
`onchange` event itself is a DOM Native Event that cannot modify and adding `detail` object.
By the way you can using `onvalueupdate` event instead to access to `detail` object from callback Event data
or you can using [hooks](./#Hooks-date-picker) approach instead
:::

```svelte title=".svelte" ln
<script>
    import svlatepickr from 'svelte-flatpickr-plus';
    const options = {
        isMonthPicker: true,
        mode: 'range',
        dateFormat: 'Z' /*set as ISO Date format**/,
        altInput: true,
        altFormat: 'F Y'
    };

    // [svp! ++]const changeHandler =(event)=>{
    // [svp! ++]    console.log('event change!')
    // [svp! ++]}

    // [svp! ++]const valueUpdateHandler = (event) => {
    // [svp! ++]    if (event.detail) {
    // [svp! ++]       const { selectedDates, dateStr, instance } = event.detail;
    // [svp! ++]       console.log('event value update!', { selectedDates, dateStr, instance });
    // [svp! ++]    }
    // [svp! ++]};

    // [svp! ++]const openHandler = (event) => {
    // [svp! ++]	console.log('event open!');
    // [svp! ++]};

    // [svp! ++]const closeHandler = (event) => {
    // [svp! ++]	console.log('event close!');
    // [svp! ++]};
</script>

<input
    name="eventDate"
// [svp! ++]	onchange={changeHandler}
// [svp! ++]	onvalueupdate={valueUpdateHandler}
// [svp! ++]	onopen={openHandler}
// [svp! ++]	onclose={closeHandler}
    use:svlatepickr={options}
/>
```

Result: <mark>open developer tools and checking console for events results</mark>

<input name="eventDate"  onchange={changeHandler} onvalueupdate={valueUpdateHandler} onopen={openHandler} onclose={closeHandler}  bind:value={eventDateValue} use:svlatepickr={eventDateOptions}/>

Value:

{eventDateValue ? eventDateValue : 'Please select date from above input.'}

## Reference to a DOM node

You can binding the DOM node of date picker with `bind:this` directive and you can access a flatpickr instance with `._flatpickr`.

:::tip[Flatpickr instance]
With access to instance of flatpickr you can using any properties and method that flatpickr provide [here](https://flatpickr.js.org/instance-methods-properties-elements/#properties)
:::

```svelte title=".svelte" ln
<script>
    import svlatepickr from 'svelte-flatpickr-plus';
    let datePickerElement; // [svp! ++]
    const options = {
        isMonthPicker: true,
        mode: 'range',
        dateFormat: 'Z' /*set as ISO Date format**/,
        altInput: true,
        altFormat: 'F Y'
    };

    function clearDatePicker(){// [svp! ++]
        datePickerElement._flatpickr.clear();// [svp! ++]
    }// [svp! ++]
</script>

<input name="domDate"
// [svp! ++] bind:this={datePickerElement}
 use:svlatepickr={options} />

// [svp! ++]<button onclick={clearDatePicker}> Clear </button>
```

Result:

<input name="domDate"  bind:this={domDate} bind:value={domDateValue} use:svlatepickr={domDateOptions}/>
<button onclick={()=> domDate._flatpickr.clear()}> Clear </button>

Value:

{domDateValue ? domDateValue : 'Please select date from above input.'}

## Control clear behavior

Control on `.clear()` behavior with `resetMoveDefault` and `resetToDefault` in options

:::info[resetMoveDefault]
with `resetMoveDefault` as `true` (by default) while instance of date picker got reset with `.clear()`
it will move calendar to a default (or today date if `defaultDate` not set in options), if it set to `false` this the calendar will stay on a latest position of a date before.
:::

:::info[resetToDefault]
with `resetToDefault` as `true` (by default) while instance of date picker got reset with `.clear()`
a value in input DOM will be reset back to a default date (or empty string if it set to be `false` or `defaultDate` not set in options)
:::

```svelte title=".svelte" ln
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	const todayDate = new Date();
	const options = {
		isMonthPicker: true,
		mode: 'range',
		dateFormat: 'Z' /*set as ISO Date format**/,
		altInput: true,
		altFormat: 'F Y',
		defaultDate: new Date(),
		resetMoveDefault: false, // [svp! ++]
		resetToDefault: false // [svp! ++]
	};
</script>

<input name="clearBehaviorDate" use:svlatepickr={options} />
```

Result:

<input name="clearBehaviorDate" bind:this={clearBehaviorDateElement} bind:value={clearBehaviorDateValue} use:svlatepickr={clearBehaviorDateOptions} />
<button onclick={()=>clearBehaviorDateElement._flatpickr.clear()}>Clear</button>

Value:

{clearBehaviorDateValue? clearBehaviorDateValue : 'Please select date from above input.'}

## External element

Can using a datepicker action on external element (aka. wrapper element) such as  
`div` by passing `wrap: true` as a additional option and adding `data-input`  
as a attribute to input element.

:::important
The selector for flatpickr should be the wrapping div with class  
`flatpickr` not the `input` tag.
:::

```svelte title=".svelte" ln
<script>
    import svlatepickr from 'svelte-flatpickr-plus';

    const options = {
        isMonthPicker: true,
        mode: 'range',
        dateFormat: 'Z' /*set as ISO Date format**/,
        altInput: true,
        altFormat: 'F Y',
        wrap: true // [svp! ++]
    };
</script>


<div // [svp! ++]use:svlatepickr={options}>
    <input name="wrapDate" data-input />// [svp! ++]
    <button type="button" title="toggle" data-toggle> toggle </button>// [svp! ++]
    <button type="button" title="clear" data-clear> clear </button>// [svp! ++]
</div// [svp! ++]>
```

Result:

<div use:svlatepickr={wrapOptions}>
    <input name="wrapDate" data-input bind:value={wrapDateValue}/>
    <button type="button" title="toggle" data-toggle> toggle </button>
    <button type="button" title="clear" data-clear> clear </button>
</div>

Value:

{wrapDateValue ? wrapDateValue : 'Please select date from above input.'}

## Localize date picker

In this example will using Thai language by adding `locale: Thai` in options  
while `Thai` is imported from `l10n` and using Buddhist era by adding `useLocaleYear: true` in options

:::tip[Support locales]
You can check supported locales [here](https://github.com/flatpickr/flatpickr/tree/master/src/l10n)
:::

:::note[Wrong locale year]
If your localize file giving wrong locale year please let me know by open a issue [here](https://github.com/kodaicoder/svelte-flatpickr-plus/issues) with tag `localize`
:::

```svelte title=".svelte" ln
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
	import { l10n } from '$lib'; // [svp! ++]
	const thaiLocale = l10n.th; // [svp! ++]

	const options = {
		isMonthPicker: true,
		mode: 'range',
		dateFormat: 'Z' /*set as ISO Date format**/,
		altInput: true,
		altFormat: 'F Y',
		locale: thaiLocale, // [svp! ++]
		useLocaleYear: true // [svp! ++]
	};
</script>

<input name="localizeDate" use:svlatepickr={options} />
```

Result:

<input name="localizeDate" bind:value={localizeDateValue} use:svlatepickr={localizeDateOptions}/>

Value:

{localizeDateValue ?localizeDateValue : 'Please select date from above input.'}

## Using in form action

```svelte title=".svelte" ln
<script>
    import svlatepickr from 'svelte-flatpickr-plus';
    // [svp! ++]import {formDataToJson} from '$lib/utils.js'
    // [svp! ++] let informDatePickerElement;
    // [svp! ++] const altInputOptions = {
    // [svp! ++]	isMonthPicker: true,
    // [svp! ++]	mode: 'range',
    // [svp! ++]	dateFormat: 'Z' /*set as ISO Date format**/,
    // [svp! ++]	altInput: true,
    // [svp! ++]	altFormat: 'F Y',
    // [svp! ++] };
    // [svp! ++] const defaultDateOptions ={
    // [svp! ++]	...altInputOptions,
    // [svp! ++]	defaultDate: new Date()
    // [svp! ++]}
    // [svp! ++] const wrapOptions ={
    // [svp! ++]	...altInputOptions,
    // [svp! ++]	wrap: true
    // [svp! ++] }

    // [svp! ++] const beforeSubmitHandler = ({ formElement, formData, cancel }) => {
    // [svp! ++]	formDataJSON = formDataToJson(formData)
    // [svp! ++]	cancel();
    // [svp! ++]	formElement.reset();
    // [svp! ++] }
</script>

// [svp! ++]<form name="datePickerForm" method="POST" use:enhance={beforeSubmitHandler} >
// [svp! ++]	<section>
// [svp! ++]		<label for="datePicker_1">Month range picker:
// [svp! ++]		<br />
// [svp! ++]		<input name="datePicker_1" use:svlatepickr={altInputOptions}>
// [svp! ++]	</section>
// [svp! ++]	<br />
// [svp! ++]	<section>
// [svp! ++]		<label for="datePicker_2">Month range picker with initial date: </label>
// [svp! ++]		<br />
// [svp! ++]		<input id="datePicker_2" name="datePicker_2" use:svlatepickr={defaultDateOptions} />
// [svp! ++]	</section>
// [svp! ++]	<br />
// [svp! ++]	<section>
// [svp! ++]		<label for="datePicker_3">Month range picker with flatpickr element binding: </label>
// [svp! ++]		<br />
// [svp! ++]		<input
// [svp! ++]			id="datePicker_3"
// [svp! ++]			name="datePicker_3"
// [svp! ++]			bind:this={informDatePickerElement}
// [svp! ++]			use:svlatepickr={defaultDateOptions}
// [svp! ++]		/>
// [svp! ++]		<button type="button" onclick={()=>{informDatePickerElement._flatpickr.clear()}}>
// [svp! ++]			Clear
// [svp! ++]		</button>
// [svp! ++]	</section>
// [svp! ++]	<br />
// [svp! ++]	<section>
// [svp! ++]		<label for="datePicker_4">Month range picker with wrapper</label>
// [svp! ++]		<br />
// [svp! ++]		<div use:svlatepickr={wrapOptions}>
// [svp! ++]			<input id="datePicker_4" name="datePicker_4" data-input />
// [svp! ++]			<button type="button" title="toggleInFrom" data-toggle> toggle </button>
// [svp! ++]			<button type="button" title="clearInFrom" data-clear> clear </button>
// [svp! ++]		</div>
// [svp! ++]	</section>
// [svp! ++]	<br />
// [svp! ++]	<div>
// [svp! ++]		<div>
// [svp! ++]			<button type="submit">Submit</button>
// [svp! ++]			<button type="reset">Reset</button>
// [svp! ++]		</div>
// [svp! ++]	</div>
// [svp! ++]</form>
```

Result :

<form name="datePickerForm" method="POST" use:enhance={beforeSubmitHandler} >
    <section>
        <label for="datePicker_1">Month range picker:
        <br />
        <input name="datePicker_1" use:svlatepickr={altInputOptions}>
    </section>
    <br />
    <section>
        <label for="datePicker_2">Month range picker with initial date: </label>
        <br />
        <input id="datePicker_2" name="datePicker_2" use:svlatepickr={defaultDateOptions} />
    </section>
    <br />
    <section>
        <label for="datePicker_3">Month range picker with flatpickr element binding: </label>
        <br />
        <input
            id="datePicker_3"
            name="datePicker_3"
            bind:this={informDatePickerElement}
            use:svlatepickr={defaultDateOptions}
        />
        <button type="button" onclick={()=>{informDatePickerElement._flatpickr.clear()}}>Clear</button>
    </section>
    <br />
    <section>
        <label for="datePicker_4">Month range picker with wrapper</label>
        <br />
        <div use:svlatepickr={wrapOptions}>
            <input id="datePicker_4" name="datePicker_4" data-input />
            <button type="button" title="toggleInFrom" data-toggle> toggle </button>
            <button type="button" title="clearInFrom" data-clear> clear </button>
        </div>
    </section>
    <br />
    <div>
        <div>
            <button type="submit" >Submit</button>
            <button type="reset">Reset</button>
        </div>
    </div>
</form>

Form data JSON:

{ formDataJSON ??'Please submit form above'}
