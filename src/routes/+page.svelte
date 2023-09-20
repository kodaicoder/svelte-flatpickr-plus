<script>
	import { enhance } from '$app/forms';
	import Datepicker from '$lib/Datepicker.svelte';
	import RangeDatepicker from '$lib/RangeDatepicker.svelte';
	import Monthpicker from '$lib/Monthpicker.svelte';
	import RangeMonthpicker from '../lib/RangeMonthpicker.svelte';
	import { Thai } from 'flatpickr_plus/dist/l10n/th.js';

	let dateval;
	let datestr;
	let monthval;
	let monthstr;
	let rangeDateValStart;
	let rangeDateValEnd;
	let rangeDateStr;
	let rangeMonthValStart;
	let rangeMonthValEnd;
	let rangeMonthStr;

	$: console.log('datepicker value: ', dateval);
	$: console.log('datepicker string: ', datestr);

	$: console.log('monthpicker value: ', monthval);
	$: console.log('monthpicker string: ', monthstr);

	$: console.log('rangedatepicker start value: ', rangeDateValStart);
	$: console.log('rangedatepicker end value: ', rangeDateValEnd);
	$: console.log('rangedatepicker string: ', rangeDateStr);

	$: console.log('rangemonthpicker start value: ', rangeMonthValStart);
	$: console.log('rangemonthpicker end value: ', rangeMonthValEnd);
	$: console.log('rangemonthpicker string: ', rangeMonthStr);

	let datepickerBind;
	let monthpickerBind;
	let rangedatepickerBind;
	let rangemonthpickerBind;

	const handdleDatepickerBindClick = () => {
		if (datepickerBind) {
			datepickerBind.clear();
		}
	};

	function handdleMonthpickerBindClick() {
		if (monthpickerBind) {
			monthpickerBind.clear();
		}
	}

	function handdleRangeDatepickerBindClick() {
		if (rangedatepickerBind) {
			rangedatepickerBind.clear();
		}
	}

	function handdleRangeMonthpickerBindClick() {
		if (rangemonthpickerBind) {
			rangemonthpickerBind.clear();
		}
	}
</script>

<h1>Welcome to Svelte-Flatpickr-Plus</h1>

<p>
	It support locale year by using <code>useLocaleYear: true</code> and set "locale" as you want
	<br />e.g. <code>locale= &#123;Thai&#125;</code>
	<br />that you need to import form "flatpickr_plus/dist/l10n/YOUR_LOCALE.js"
	<br /> e.g flatpickr_plus/dist/l10n/th.js
	<br />and I changing a year input into a year dropdown list that working with locale year and
	monthselect plugin
	<br />
	<br />
</p>

<h2 style="margin-bottom: .5rem;">Demo</h2>
<p>
	For demo I will use <code>Thai</code> localization and using <code>useLocaleYear</code>
	<br />
	you will seen year as Buddhist Era (+543 years from C.E.) in year dropdown list
	<br />
	day and month name will be in Thai language
	<br />
	with the min/max date and disable date has been set
	<br />
</p>
<br />
<details open>
	<summary>Datepicker</summary>
	<section>
		<section>
			<label for="normalDatepicker">Date picker: </label>
			<br />
			<Datepicker
				bind:value={dateval}
				bind:string={datestr}
				name="normalDatepicker"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="d F Y"
				minDate="2019-01"
				maxDate="2033-12-31"
				disable={['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 6, 8)]}
			/>
		</section>
		<br />
		<section>
			<label for="normalDatepickerDefaultDate">Date picker with initial date: </label>
			<br />
			<Datepicker
				name="normalDatepickerDefaultDate"
				initialDate="2021-08-01"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="d F Y"
				minDate="2019-01"
				maxDate={new Date().fp_incr(14)}
				disable={['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 6, 8)]}
			/>
		</section>
		<br />
		<section>
			<label for="normalDatepickerBind"> Date picker with flatpickr element binding: </label>
			<br />
			<Datepicker
				bind:flatpickr={datepickerBind}
				name="normalDatepickerBind"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="d F Y"
				minDate="2019-01"
				maxDate={new Date().fp_incr(14)}
				disable={['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 6, 8)]}
			/>
			<button on:click={handdleDatepickerBindClick}>Clear</button>
		</section>
		<br />
		<section>
			<label for="withSlotDatepicker">Date picker with slot</label>
			<br />
			<Datepicker
				name="withSlotDatepicker"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="d F Y"
				minDate="2019-01"
				maxDate={new Date().fp_incr(14)}
				disable={['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 6, 8)]}
			>
				<button title="toggle" data-toggle> toggle </button>
				<button title="clear" data-clear> clear </button>
			</Datepicker>
		</section>
		<br />
	</section>
</details>
<br />
<details>
	<summary>Monthpicker</summary>
	<section>
		<section>
			<label for="normalMonthpicker">Month picker: </label>
			<br />
			<Monthpicker
				bind:value={monthval}
				bind:string={monthstr}
				name="normalMonthpicker"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="F Y"
				minDate="2019-01"
				maxDate="2023-04"
				disable={['2023-01', '2022-08', '2021-03', new Date(2020, 11, 1)]}
			/>
		</section>
		<br />
		<section>
			<label for="normalMonthpickerDefaultDate">Month picker with initial month: </label>
			<br />
			<Monthpicker
				name="normalMonthpickerDefaultDate"
				initialDate="2023-02"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="F Y"
				minDate="2019-01"
				maxDate="2023-04"
				disable={['2023-01', '2022-08', '2021-03', new Date(2020, 11, 1)]}
			/>
		</section>
		<br />
		<section>
			<label for="normalMonthpickerBind"> Month picker with flatpickr element binding: </label>
			<br />
			<Monthpicker
				bind:flatpickr={monthpickerBind}
				name="normalMonthpickerBind"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="F Y"
				minDate="2019-01"
				maxDate="2023-04"
				disable={['2023-01', '2022-08', '2021-03', new Date(2020, 11, 1)]}
			/>
			<button on:click={handdleMonthpickerBindClick}>Clear</button>
		</section>
		<br />
		<section>
			<label for="withSlotMonthpicker">Month picker with slot</label>
			<br />
			<Monthpicker
				name="withSlotMonthpicker"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="F Y"
				minDate="2019-01"
				maxDate="2023-04"
				disable={['2023-01', '2022-08', '2021-03', new Date(2020, 11, 1)]}
			>
				<button title="toggle" data-toggle> toggle </button>
				<button title="clear" data-clear> clear </button>
			</Monthpicker>
		</section>
		<br />
	</section>
</details>
<br />
<details>
	<summary>Range Datepicker</summary>
	<section>
		<section>
			<label for="normalRangeDatepicker">Range date picker: </label>
			<br />
			<RangeDatepicker
				bind:start={rangeDateValStart}
				bind:end={rangeDateValEnd}
				bind:string={rangeDateStr}
				name="normalRangeDatepicker"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="d F Y"
				minDate="2019-01"
				maxDate={new Date().fp_incr(14)}
				disable={['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 6, 8)]}
			/>
		</section>
		<br />
		<section>
			<label for="normalRangeDatepickerDefaultDate">Range date picker with initial date: </label>
			<br />
			<RangeDatepicker
				name="normalRangeDatepickerDefaultDate"
				initialDate={['2021-08-01', '2022-12-28']}
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="d F Y"
				minDate="2019-01"
				maxDate={new Date().fp_incr(14)}
				disable={['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 6, 8)]}
			/>
		</section>
		<br />
		<section>
			<label for="normalRangeDatepickerBind">
				Range date picker with flatpickr element binding:
			</label>
			<br />
			<RangeDatepicker
				bind:flatpickr={rangedatepickerBind}
				name="normalRangeDatepickerBind"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="d F Y"
				minDate="2019-01"
				maxDate={new Date().fp_incr(14)}
				disable={['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 6, 8)]}
			/>
			<button on:click={handdleRangeDatepickerBindClick}>Clear</button>
		</section>
		<br />
		<section>
			<label for="withSlotRangeDatepicker">Range date picker with slot</label>
			<br />
			<RangeDatepicker
				name="withSlotRangeDatepicker"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="d F Y"
				minDate="2019-01"
				maxDate={new Date().fp_incr(14)}
				disable={['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 6, 8)]}
			>
				<button title="toggle" data-toggle> toggle </button>
				<button title="clear" data-clear> clear </button>
			</RangeDatepicker>
		</section>
		<br />
	</section>
</details>
<br />
<details>
	<summary>Range Monthpicker</summary>
	<section>
		<section>
			<label for="normalRangeMonthpicker">Range month picker: </label>
			<br />
			<RangeMonthpicker
				bind:start={rangeMonthValStart}
				bind:end={rangeMonthValEnd}
				bind:string={rangeMonthStr}
				name="normalRangeMonthpicker"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="F Y"
				minDate="2019-01"
				maxDate="2023-04"
				disable={['2023-01', '2022-08', '2021-03', new Date(2020, 11, 1)]}
			/>
		</section>
		<br />
		<section>
			<label for="normalRangeMonthpickerDefaultDate">Range month picker with initial month: </label>
			<br />
			<RangeMonthpicker
				name="normalRangeMonthpickerDefaultDate"
				initialDate={['2019-07', '2020-08']}
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="F Y"
				minDate="2019-01"
				maxDate="2023-04"
				disable={['2023-01', '2022-08', '2021-03', new Date(2020, 11, 1)]}
			/>
		</section>
		<br />
		<section>
			<label for="normalRangeMonthpickerBind">
				Range month picker with flatpickr element binding:
			</label>
			<br />
			<RangeMonthpicker
				bind:flatpickr={rangedatepickerBind}
				name="normalRangeMonthpickerBind"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="F Y"
				minDate="2019-01"
				maxDate="2023-04"
				disable={['2023-01', '2022-08', '2021-03', new Date(2020, 11, 1)]}
			/>
			<button on:click={handdleRangeMonthpickerBindClick}>Clear</button>
		</section>
		<br />
		<section>
			<label for="withSlotRangeMonthpicker">Range month picker with slot</label>
			<br />
			<RangeMonthpicker
				name="withSlotRangeMonthpicker"
				inputClass=""
				useLocaleYear={true}
				locale={Thai}
				dateFormat="F Y"
				minDate="2019-01"
				maxDate="2023-04"
				disable={['2023-01', '2022-08', '2021-03', new Date(2020, 11, 1)]}
			>
				<button title="toggle" data-toggle> toggle </button>
				<button title="clear" data-clear> clear </button>
			</RangeMonthpicker>
		</section>
		<br />
	</section>
</details>
<br />

<details>
	<summary>Using in <code>form</code> with <code>use:enhance</code></summary>
	<section>
		<form method="POST" use:enhance>
			<section>
				<label for="myDatepicker1">Choose a date: </label>
				<br />
				<Datepicker
					name="myDatepicker1"
					inputClass=""
					useLocaleYear={true}
					locale={Thai}
					dateFormat="d F Y"
					minDate="2019-01"
					maxDate={new Date().fp_incr(14)}
					disable={['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 6, 8)]}
				/>
			</section>
			<br />
			<section>
				<label for="myMonthpicker1">Choose month: </label>
				<br />
				<Monthpicker
					name="myMonthpicker1"
					inputClass=""
					useLocaleYear={true}
					locale={Thai}
					dateFormat="F Y"
					minDate="2019-01"
					maxDate="2023-04"
					disable={['2023-01', '2022-08', '2021-03', new Date(2020, 11, 1)]}
				/>
			</section>
			<br />
			<section>
				<label for="myRangepicker1">Choose range of date: </label>
				<br />
				<RangeDatepicker
					name="myRangepicker1"
					inputClass=""
					useLocaleYear={true}
					locale={Thai}
					dateFormat="d F Y"
					minDate="2019-01"
					maxDate={new Date().fp_incr(14)}
					disable={['2023-08-30', '2023-07-21', '2023-06-08', new Date(2023, 6, 8)]}
				/>
			</section>
			<br />
			<section>
				<label for="myRangeMonthpicker1">Choose range of month: </label>
				<br />
				<RangeMonthpicker
					name="myRangeMonthpicker1"
					inputClass=""
					useLocaleYear={true}
					locale={Thai}
					dateFormat="F Y"
					minDate="2019-01"
					maxDate="2023-04"
					disable={['2023-01', '2022-08', '2021-03', new Date(2020, 11, 1)]}
				/>
			</section>
			<br />
			<div class="my-4">
				<button type="submit">Submit</button>
				<button type="reset">Reset</button>
			</div>
			<br />
		</form>
	</section>
</details>
<br />

<h2 style="margin-bottom: .5rem;">Props</h2>
<p>The props that you can bind or passing to a component</p>
<small class="note">
	* if you not set min/max date the year dropdown list will shown minimum year as current year - 150
	and maximum year as current year
	<br />
	* value of the date will be return as long date format (DAY MM DD YYYY hh:mm:ss TZD (Time Zone Designator))
	<br />
	* string of the date will be return as ISO date format (YYYY-MM-DDThh:mm:ss.sssZ)
</small>
<br />
<br />
<details>
	<summary> Datepicker </summary>
	<section>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Default Value</th>
					<th>Bindable</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>wrapperClass</td>
					<td>''</td>
					<td class="text-red">No</td>
					<td
						>A string that represents the CSS class(es) to apply to the wrapper element of the
						datepicker component.
						<br />
						<span class="note">* will affected while you passing a slot into a component</span>
					</td>
				</tr>
				<tr>
					<td>inputClass</td>
					<td>''</td>
					<td class="text-red">No</td>
					<td
						>A string that represents the CSS class(es) to apply to the input element of the
						datepicker component.</td
					>
				</tr>
				<tr>
					<td>name</td>
					<td>undefined</td>
					<td class="text-red">No</td>
					<td
						>A string that represents the name attribute of the input element of the datepicker
						component.</td
					>
				</tr>
				<tr>
					<td>placeholder</td>
					<td>'Please select date...'</td>
					<td class="text-red">No</td>
					<td
						>A string that represents the placeholder text to display in the input element of the
						datepicker component.</td
					>
				</tr>
				<tr>
					<td>value</td>
					<td>null</td>
					<td class="text-green">Yes</td>
					<td>A Date object that represents the selected date in the datepicker component.</td>
				</tr>
				<tr>
					<td>string</td>
					<td class="text-green">null</td>
					<td>No</td>
					<td
						>A string that represents the selected date in the datepicker component, formatted
						according to the dateFormat prop.</td
					>
				</tr>
				<tr>
					<td>dateFormat</td>
					<td class="text-red">'Y-m-d'</td>
					<td>No</td>
					<td
						>A string that represents the format to use when displaying the selected date in the
						input element of the datepicker component. The format should use the following
						placeholders: Y for the year, m for the month, and d for the day.</td
					>
				</tr>
				<tr>
					<td>locale</td>
					<td>'en'</td>
					<td>Yes</td>
					<td
						>A string that represents the locale to use when formatting the selected date. The value
						should be a two-letter language code, such as 'en' for English or 'fr' for French.</td
					>
				</tr>
				<tr>
					<td>useLocaleYear</td>
					<td>false</td>
					<td>Yes</td>
					<td
						>A boolean that indicates whether to use the locale-specific year format when formatting
						the selected date. If true, the year will be formatted according to the locale-specific
						year format, such as 'yy' for a two-digit year. If false, the year will be formatted
						using four digits.</td
					>
				</tr>
				<tr>
					<td>initialDate</td>
					<td>null</td>
					<td>Yes</td>
					<td
						>A Date object that represents the initial date to display in the datepicker component.
						If this prop is not set, the current date will be used as the initial date.</td
					>
				</tr>
				<tr>
					<td>minDate</td>
					<td>null</td>
					<td>Yes</td>
					<td
						>A Date object that represents the minimum date that can be selected in the datepicker
						component. If this prop is set, dates before the minimum date will be disabled.</td
					>
				</tr>
				<tr>
					<td>maxDate</td>
					<td>null</td>
					<td>Yes</td>
					<td
						>A Date object that represents the maximum date that can be selected in the datepicker
						component. If this prop is set, dates after the maximum date will be disabled.</td
					>
				</tr>
				<tr>
					<td>disable</td>
					<td>[]</td>
					<td>Yes</td>
					<td
						>An array of Date objects that represent specific dates that should be disabled in the
						datepicker component. If a date in the array matches the selected date, it will be
						disabled.</td
					>
				</tr>
			</tbody>
		</table>
	</section>
</details>
<br />

<!--
<h3>Range date picker</h3>
<table>
	<colgroup>
		<col width="15%" />
		<col width="15%" />
		<col width="15%" />
		<col width="55%" />
	</colgroup>
	<thead>
		<tr>
			<th>Name</th>
			<th>Default Value</th>
			<th>Can bind?</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>inputClass</td>
			<td>''</td>
			<td><span class="text-red">No</span></td>
			<td>The CSS class for styling the input element.</td>
		</tr>
		<tr>
			<td>name</td>
			<td>undefined</td>
			<td><span class="text-red">No</span></td>
			<td>The name identifier for the datepicker.</td>
		</tr>
		<tr>
			<td>start</td>
			<td>null</td>
			<td><span class="text-green">Yes</span></td>
			<td>The start date value for a selected date range. (ISO date format)</td>
		</tr>
		<tr>
			<td>end</td>
			<td>null</td>
			<td><span class="text-green">Yes</span></td>
			<td>The end date value for a selected date range. (ISO date format)</td>
		</tr>
		<tr>
			<td>value</td>
			<td>null</td>
			<td><span class="text-green">Yes</span></td>
			<td>The array of date for a selected date range. (ISO date format)</td>
		</tr>
		<tr>
			<td>string</td>
			<td>null</td>
			<td><span class="text-green">Yes</span></td>
			<td
				>A returned string of date that have range separator text between (long date format)
				<br />
				<small class="note"
					>*range separator text will be depended on locale function you loading into component</small
				>
			</td>
		</tr>
		<tr>
			<td>dateFormat</td>
			<td>'Y-m-d'</td>
			<td><span class="text-red">No</span></td>
			<td>The format for displaying dates.</td>
		</tr>
		<tr>
			<td>locale</td>
			<td>en</td>
			<td><span class="text-red">No</span></td>
			<td>The function of locale for date and time formatting.</td>
		</tr>
		<tr>
			<td>useLocaleYear</td>
			<td>false</td>
			<td><span class="text-red">No</span></td>
			<td>Whether to display the year according to the locale.</td>
		</tr>
		<tr>
			<td>minDate</td>
			<td>null</td>
			<td><span class="text-red">No</span></td>
			<td>The minimum selectable date.</td>
		</tr>
		<tr>
			<td>maxDate</td>
			<td>null</td>
			<td><span class="text-red">No</span></td>
			<td>The maximum selectable date.</td>
		</tr>
		<tr>
			<td>disable</td>
			<td>[]</td>
			<td><span class="text-red">No</span></td>
			<td>An array of dates to be disabled in the datepicker.</td>
		</tr>
	</tbody>
</table> -->

<style>
	p {
		margin: 0;
	}
	code {
		background-color: lightgrey;
	}
	.note {
		color: darkred;
	}

	details {
		border: 1px solid #aaa;
		border-radius: 4px;
		padding: 0.5em 0.5em 0;
	}

	summary {
		font-weight: bold;
		margin: -0.5em -0.5em 0;
		padding: 0.5em;
	}

	details[open] {
		padding: 0.5em;
	}

	details[open] summary {
		border-bottom: 1px solid #aaa;
		margin-bottom: 0.5em;
	}

	table {
		border-collapse: collapse;
		width: 70%;
		margin-bottom: 20px;
	}

	th,
	td {
		border: 1px solid #ccc;
		padding: 8px;
		text-align: left;
	}

	th {
		background-color: #f2f2f2;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	tr:hover {
		background-color: #e0e0e0;
	}

	.text-green {
		color: green;
	}

	.text-red {
		color: darkred;
	}
</style>
