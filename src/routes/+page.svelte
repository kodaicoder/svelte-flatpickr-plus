<script>
	import CodeShowBlock from '$components/CodeShowBlock.svelte';
	// calling actions
	import { datePicker, monthPicker, dateRangePicker, monthRangePicker } from '$lib';

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

<h2 id="actions">Actions<a href="#actions" class="permalink">🔗</a></h2>
<p>Svelte Flatpickr Plus coming with 4 actions</p>
<ul>
	<li><a href="/datepicker">datePicker</a></li>
	<li><a href="/monthpicker">monthPicker</a></li>
	<li><a href="/daterangepicker">dateRangePicker</a></li>
	<li><a href="/monthrangepicker">monthRangePicker</a></li>
</ul>
<br />
<h2 id="basic_usage">Basic Usage<a href="#basic_usage" class="permalink">🔗</a></h2>
<div style="display: flex; gap: 1rem;">
	<div class="element-block">
		<h3>Date Picker</h3>
		<div>
			<input use:datePicker placeholder="please select date" readonly />
		</div>
	</div>

	<CodeShowBlock code={`<input use:datePicker placeholder="please select date" readonly />`} />
</div>
<hr />
<div style="display: flex; gap: 1rem;">
	<div class="element-block">
		<h3>Month Picker</h3>
		<div>
			<input use:monthPicker placeholder="please select month" readonly />
		</div>
	</div>

	<CodeShowBlock code={`<input use:monthPicker placeholder="please select month" readonly />`} />
</div>
<hr />
<div style="display: flex; gap: 1rem;">
	<div class="element-block">
		<h3>Date Range Picker</h3>
		<div>
			<input use:dateRangePicker placeholder="please select date range" readonly />
		</div>
	</div>

	<CodeShowBlock
		code={`<input use:dateRangePicker placeholder="please select date range" readonly />`}
	/>
</div>
<hr />
<div style="display: flex; gap: 1rem;">
	<div class="element-block">
		<h3>Month Range Picker</h3>
		<div>
			<input use:monthRangePicker placeholder="please select month range" readonly />
		</div>
	</div>

	<CodeShowBlock
		code={`<input use:monthRangePicker placeholder="please select month range" readonly />`}
	/>
</div>
<hr />

<h2 id="options">Options <a href="#options" class="permalink">🔗</a></h2>
<div style="padding:0 5rem;">
	<table>
		<thead>
			<tr>
				<th>Config Option</th>
				<th>Default</th>
				<th>Type</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>allowInput</td>
				<td>true</td>
				<td>Boolean</td>
				<td
					>Allows the user to enter a date directly input the input field. By default, direct entry
					is disabled.</td
				>
			</tr>
			<tr>
				<td>allowInvalidPreload</td>
				<td>false</td>
				<td>Boolean</td>
				<td>Allow preloading of invalid date.</td>
			</tr>
			<tr>
				<td>altFormat</td>
				<td>"F j, Y"</td>
				<td>String</td>
				<td>Exactly the same as date format, but for the altInput field.</td>
			</tr>
			<tr>
				<td>altInput</td>
				<td>false</td>
				<td>Boolean</td>
				<td
					>Show the user a readable date (as per altFormat), but return something totally different
					to the server.</td
				>
			</tr>
			<tr>
				<td>altInputClass</td>
				<td>null</td>
				<td>String</td>
				<td
					>This class will be added to the input element created by the altInput option. Note that
					altInput already inherits classes from the original input.</td
				>
			</tr>
			<tr>
				<td>ariaDateFormat</td>
				<td>"F j, Y"</td>
				<td>String</td>
				<td
					>Defines how the date will be formatted in the aria-label for calendar days, using the
					same tokens as dateFormat. If you change this, you should choose a value that will make
					sense if a screen reader reads it out loud.</td
				>
			</tr>
			<tr>
				<td>autoFillDefaultTime</td>
				<td>true</td>
				<td>Boolean</td>
				<td
					>Whether the default time should be auto-filled when the input is empty and gains or loses
					focus.</td
				>
			</tr>
			<tr>
				<td>clickOpens</td>
				<td>true</td>
				<td>Boolean</td>
				<td
					>Whether clicking on the input should open the picker. Set it to false if you only want to
					open the calendar programmatically.</td
				>
			</tr>
			<tr>
				<td>closeOnSelect</td>
				<td>true</td>
				<td>Boolean</td>
				<td>Whether calendar should close after date selection.</td>
			</tr>
			<tr>
				<td>conjunction</td>
				<td>", "</td>
				<td>String</td>
				<td>
					If "mode" is "multiple", this string will be used to join selected dates together for the
					date input value.</td
				>
			</tr>
			<tr>
				<td>dateFormat</td>
				<td>"Y-m-d"</td>
				<td>String</td>
				<td
					>A string of characters which are used to define how the date will be displayed in the
					input box. (<a href="https://flatpickr.js.org/formatting/" target="_blank"
						>See supported format</a
					>)</td
				>
			</tr>
			<tr>
				<td>defaultDate</td>
				<td>null</td>
				<td>Date | string | number</td>
				<td>The initial selected date(s).</td>
			</tr>
			<tr>
				<td>defaultHour</td>
				<td>12</td>
				<td>Number</td>
				<td>Initial value of the hour element, when no date is selected.</td>
			</tr>
			<tr>
				<td>defaultMinute</td>
				<td>0</td>
				<td>Number</td>
				<td>Initial value of the minute element, when no date is selected.</td>
			</tr>
			<tr>
				<td>defaultSeconds</td>
				<td>0</td>
				<td>Number</td>
				<td>Initial value of the seconds element, when no date is selected.</td>
			</tr>
			<tr>
				<td>disable</td>
				<td>[]</td>
				<td>Date | string | number | function</td>
				<td
					>Disables certain dates, preventing them from being selected. (<a
						href="https://flatpickr.js.org/examples/#disabling-dates"
						target="_blank">See detail of enabling & disabling dates)</a
					></td
				>
			</tr>
			<tr>
				<td>disableMobile</td>
				<td>true</td>
				<td>Boolean</td>
				<td
					>Set this to true to always use the non-native picker on mobile devices. (By default is
					set to true to off a mobile mode for working with month plugin & year dropdown plugin)</td
				>
			</tr>
			<tr>
				<td>enable</td>
				<td>[]</td>
				<td>Date | string | number | function</td>
				<td
					>Disables all dates except these specified. (<a
						href="https://flatpickr.js.org/examples/#disabling-dates"
						target="_blank">See detail of enabling & disabling dates)</a
					></td
				>
			</tr>
			<tr>
				<td>enableSeconds</td>
				<td>false</td>
				<td>Boolean</td>
				<td>Enables seconds selection in the time picker.</td>
			</tr>
			<tr>
				<td>enableTime</td>
				<td>false</td>
				<td>Boolean</td>
				<td> Enables the time picker.</td>
			</tr>
			<tr>
				<td>inline</td>
				<td>false</td>
				<td>Boolean</td>
				<td>Displays the calendar inline.</td>
			</tr>
			<tr>
				<td>locale</td>
				<td>"default"</td>
				<td>LocaleKey | Partial{`<CustomLocale>`}</td>
				<td
					>The locale, either as a string (e.g. "ru", "en") or as an object. (<a
						href="https://flatpickr.js.org/localization/"
						target="_blank">See Localization</a
					>)</td
				>
			</tr>
			<tr>
				<td>maxDate</td>
				<td>null</td>
				<td>Date | string | number</td>
				<td
					>The maximum date that a user can pick to (inclusive) and this will extended a maximum
					year you can select in year dropdown if it greater than current year.
				</td>
			</tr>
			<tr>
				<td>maxTime</td>
				<td>null</td>
				<td>Date | string | number</td>
				<td>The maximum time that a user can pick to (inclusive).</td>
			</tr>
			<tr>
				<td>minDate</td>
				<td>null</td>
				<td>Date | string | number</td>
				<td>The minimum date that a user can start picking from (inclusive).</td>
			</tr>
			<tr>
				<td>minTime</td>
				<td>null</td>
				<td>Date | string | number</td>
				<td>The minimum time that a user can start picking from (inclusive).</td>
			</tr>
			<tr>
				<td>minuteIncrement</td>
				<td>5</td>
				<td>number</td>
				<td>Adjusts the step for the minute input (incl. scrolling).</td>
			</tr>
			<!-- <tr>
      <td>mode</td>
      <td>"single"</td>
      <td>"single" | "multiple" | "range" | "time"</td>
      <td>Date selection mode</td>
    </tr> -->
			<tr>
				<td>monthSelectorType</td>
				<td>"dropdown"</td>
				<td>"dropdown" | "static"</td>
				<td>How the month selector in the calendar should be shown.</td>
			</tr>
			<!-- <tr>
      <td>noCalendar</td>
      <td>false</td>
      <td>Boolean</td>
      <td> Hides the day selection in calendar.
Use it along with "enableTime" to create a time picker. </td>
    </tr> -->
			<tr>
				<td>position</td>
				<td>"auto"</td>
				<td
					>"auto" | "above" | "below" | "auto left" | "auto center" | "auto right" | "above left" |
					"above center" | "above right" | "below left" | "below center" | "below right"</td
				>
				<td>How the calendar should be positioned with regards to the input.</td>
			</tr>
			<tr>
				<td>positionElement</td>
				<td>undefined</td>
				<td>HTMLElement</td>
				<td>The element to use as the position reference for the calendar.</td>
			</tr>
			<tr>
				<td>shorthandCurrentMonth</td>
				<td>false</td>
				<td>Boolean</td>
				<td>Enables the use of shorthand for the current month.</td>
			</tr>
			<tr>
				<td>static</td>
				<td>false</td>
				<td>Boolean</td>
				<td>Enables the calendar to be displayed statically.</td>
			</tr>
			<tr>
				<td>time_24hr</td>
				<td>false</td>
				<td>Boolean</td>
				<td>Enables the use of 24-hour time format.</td>
			</tr>
			<tr>
				<td>weekNumbers</td>
				<td>false</td>
				<td>Boolean</td>
				<td>Enables the display of week numbers.</td>
			</tr>
			<tr>
				<td>wrap</td>
				<td>false</td>
				<td>Boolean</td>
				<td>
					<a href="https://flatpickr.js.org/examples/#flatpickr-external-elements">
						Custom elements and input groups
					</a>
				</td>
			</tr>
			<tr>
				<td>useLocaleYear</td>
				<td>false</td>
				<td>Boolean</td>
				<td>Enables the use of the locale-specific year format.(e.g. Buddhist Era)</td>
			</tr>
			<tr>
				<td>resetMoveDefault</td>
				<td>true</td>
				<td>Boolean</td>
				<td>On resets the calendar, move a calendar back to the default date/time.</td>
			</tr>
			<tr>
				<td>resetToDefault</td>
				<td>true</td>
				<td>Boolean</td>
				<td>On resets the calendar, set the default date/time to input element.</td>
			</tr>
		</tbody>
	</table>
</div>
<hr />
