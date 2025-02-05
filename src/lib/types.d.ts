// types.ts

// Represents a date option that can be either a Date object, a string, or a number.
type DateOption = Date | string | number;

// Represents a date range limit with 'from' and 'to' properties.
interface DateRangeLimit<D> {
	from: D; // The start of the date range limit.
	to: D; // The end of the date range limit.
}

// Represents a date limit that can be a single date, a date range limit, or a function that checks dates.
type DateLimit<D> = D | DateRangeLimit<D> | ((date: Date) => boolean);

// A hook function that receives an array of dates, the current date string, the Flatpickr instance, and optional data.
export type Hook = (dates: Date[], currentDateString: string, self: any, data?: any) => void;

// Represents a key for various hooks used in Flatpickr.
type HookKey =
	| 'onChange'
	| 'onClose'
	| 'onDayCreate'
	| 'onDestroy'
	| 'onKeyDown'
	| 'onMonthChange'
	| 'onOpen'
	| 'onParseConfig'
	| 'onReady'
	| 'onValueUpdate'
	| 'onYearChange'
	| 'onPreCalendarPosition';

// Represents the options for Flatpickr.
export default interface FlatpickrOptions {
	allowInput?: boolean; // Allows the user to enter a date directly into the input field.
	allowInvalidPreload?: boolean; // Allow preloading of an invalid date.
	altFormat?: string; // Exactly the same as date format, but for the altInput field.
	altInput?: boolean; // Show the user a readable date (as per altFormat).
	altInputClass?: string; // Class added to the input element created by the altInput option.
	animate?: boolean; // Whether to enable animations, such as month transitions.
	appendTo?: HTMLElement; // Appends the calendar to the specified node instead of body.
	ariaDateFormat?: string; // Defines how the date will be formatted in the aria-label.
	autoFillDefaultTime?: boolean; // Whether the default time should be auto-filled.
	clickOpens?: boolean; // Whether clicking on the input should open the picker.
	closeOnSelect?: boolean; // Whether the calendar should close after date selection.
	conjunction?: string; // Used to join selected dates together for the date input value.
	dateFormat?: string; // Defines how the date will be displayed in the input box.
	defaultDate?: DateOption | DateOption[]; // The initial selected date(s).
	defaultHour?: number; // Initial value of the hour element.
	defaultMinute?: number; // Initial value of the minute element.
	defaultSeconds?: number; // Initial value of the seconds element.
	disable?: DateLimit<DateOption>[]; // Disables certain dates.
	disableMobile?: boolean; // Always use the non-native picker on mobile devices.
	enable?: DateLimit<DateOption>[]; // Disables all dates except these specified.
	enableSeconds?: boolean; // Enables seconds selection in the time picker.
	enableTime?: boolean; // Enables the time picker.
	errorHandler?: (e: Error) => void; // Custom error handling function.
	formatDate?: (date: Date, format: string, locale: any) => string; // Custom date formatting function.
	getWeek?: (date: Date) => string | number; // Outputs the week number for a given date.
	hourIncrement?: number; // Adjusts the step for the hour input.
	ignoredFocusElements?: HTMLElement[]; // Elements that will not close the calendar when clicked.
	inline?: boolean; // Displays the calendar inline.
	isMonthPicker?: boolean; // Whether the calendar is a month picker.
	locale?: any | Partial<any>; // The locale, either as a string or as an object.
	maxDate?: DateOption; // The maximum date that a user can pick.
	maxTime?: DateOption; // The maximum time that a user can pick.
	minDate?: DateOption; // The minimum date that a user can pick.
	minTime?: DateOption; // The minimum time that a user can pick.
	minuteIncrement?: number; // Adjusts the step for the minute input.
	mode?: 'single' | 'multiple' | 'range' | 'time'; // Date selection mode.
	monthSelectorType?: 'dropdown' | 'static'; // How the month selector should be shown.
	nextArrow?: string; // HTML for the right arrow icon.
	noCalendar?: boolean; // Hides the day selection in the calendar.
	now?: DateOption; // Specifies the current date and time.
	onChange?: Hook | Hook[]; // Fires when the selected dates have changed.
	onClose?: Hook | Hook[]; // Fires when the calendar is closed.
	onDayCreate?: Hook | Hook[]; // Fires for every day cell in the calendar.
	onDestroy?: Hook | Hook[]; // Fires before the calendar instance is destroyed.
	onKeyDown?: Hook | Hook[]; // Fires when valid keyboard input for the calendar is detected.
	onMonthChange?: Hook | Hook[]; // Fires after the month has changed.
	onOpen?: Hook | Hook[]; // Fires after the calendar is opened.
	onParseConfig?: Hook | Hook[]; // Fires after the configuration for the calendar is parsed.
	onReady?: Hook | Hook[]; // Fires once the calendar instance is ready.
	onValueUpdate?: Hook | Hook[]; // Fires immediately after any date changes.
	onYearChange?: Hook | Hook[]; // Fires after the year has changed.
	onPreCalendarPosition?: Hook | Hook[]; // Fires before the calendar position is calculated.
	parseDate?: (date: string, format: string) => Date; // A custom datestring parser.
	plugins?: Plugin[]; // Plugins for Flatpickr.
	position?:
		| 'auto'
		| 'above'
		| 'below'
		| 'auto left'
		| 'auto center'
		| 'auto right'
		| 'above left'
		| 'above center'
		| 'above right'
		| 'below left'
		| 'below center'
		| 'below right'
		| ((self: any, customElement: HTMLElement | undefined) => void); // How the calendar should be positioned.
	positionElement?: Element; // The element off of which the calendar will be positioned.
	prevArrow?: string; // HTML for the left arrow icon.
	shorthandCurrentMonth?: boolean; // Whether to display the current month name in shorthand mode.
	shorthand?: boolean; // Whether to display the current date in shorthand mode.
	static?: boolean; // Creates a wrapper to position the calendar.
	showMonths?: number; // Sets the number of months to show.
	time_24hr?: boolean; // Displays time picker in 24-hour mode.
	weekNumbers?: boolean; // Display week numbers left of the calendar.
	wrap?: boolean; // See external elements for Flatpickr.
	useLocaleYear?: boolean; // Handling year as locale year.
	resetMoveDefault?: boolean; // Handling reset and move to calendar to default date.
	resetToDefault?: boolean; // Handling reset and selected a default date.
}

export type FlatpickrAction<Node extends HTMLElement> = (
	node: Node,
	parameter?: FlatpickrOptions
) => void | import('svelte/action').ActionReturn<FlatpickrOptions | undefined, any>;
