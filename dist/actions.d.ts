/** @type {import('svelte/action').Action<HTMLInputElement, Options>}  */
export const datePicker: import('svelte/action').Action<HTMLInputElement, Options>;
/** @type {import('svelte/action').Action<HTMLInputElement, Options>}  */
export const monthPicker: import('svelte/action').Action<HTMLInputElement, Options>;
/** @type {import('svelte/action').Action<HTMLInputElement, Options>}  */
export const dateRangePicker: import('svelte/action').Action<HTMLInputElement, Options>;
/** @type {import('svelte/action').Action<HTMLInputElement, Options>}  */
export const monthRangePicker: import('svelte/action').Action<HTMLInputElement, Options>;
/**
 * Represents a date option that can be either a Date object, a string, or a number.
 */
export type DateOption = Date | string | number;
/**
 * Represents a date range limit with 'from' and 'to' properties.
 */
export type DateRangeLimit<D> = {
    /**
     * - The start of the date range limit.
     */
    from: D;
    /**
     * - The end of the date range limit.
     */
    to: D;
};
/**
 * Represents a date limit that can be a single date, a date range limit, or a function that checks dates.
 */
export type DateLimit<D> = D | DateRangeLimit<D> | ((date: Date) => boolean);
/**
 * A hook function that receives an array of dates, the current date string, the Flatpickr instance, and optional data.
 */
export type Hook = (dates: Date[], currentDateString: string, self: any, data?: any) => void;
/**
 * Represents a key for various hooks used in Flatpickr.
 */
export type HookKey = "onChange" | "onClose" | "onDayCreate" | "onDestroy" | "onKeyDown" | "onMonthChange" | "onOpen" | "onParseConfig" | "onReady" | "onValueUpdate" | "onYearChange" | "onPreCalendarPosition";
export type Options = {
    /**
     * - Allows the user to enter a date directly into the input field. By default, direct entry is disabled.
     */
    allowInput?: boolean;
    /**
     * - Allow preloading of an invalid date.
     */
    allowInvalidPreload?: boolean;
    /**
     * - Exactly the same as date format, but for the altInput field.
     */
    altFormat?: string;
    /**
     * - Show the user a readable date (as per altFormat), but return something totally different to the server.
     */
    altInput?: boolean;
    /**
     * - This class will be added to the input element created by the altInput option. Note that altInput already inherits classes from the original input.
     */
    altInputClass?: string;
    /**
     * - Whether to enable animations, such as month transitions.
     */
    animate?: boolean;
    /**
     * - Instead of body, appends the calendar to the specified node instead.
     */
    appendTo?: HTMLElement;
    /**
     * - Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat. If you change this, you should choose a value that will make sense if a screen reader reads it out loud. Defaults to "F j, Y".
     */
    ariaDateFormat?: string;
    /**
     * - Whether the default time should be auto-filled when the input is empty and gains or loses focus. Defaults to true.
     */
    autoFillDefaultTime?: boolean;
    /**
     * - Whether clicking on the input should open the picker. Set it to false if you only want to open the calendar programmatically.
     */
    clickOpens?: boolean;
    /**
     * - Whether the calendar should close after date selection.
     */
    closeOnSelect?: boolean;
    /**
     * - If "mode" is "multiple", this string will be used to join selected dates together for the date input value.
     */
    conjunction?: string;
    /**
     * - A string of characters that are used to define how the date will be displayed in the input box. See https://chmln.github.io/flatpickr/formatting
     */
    dateFormat?: string;
    /**
     * - The initial selected date(s).
     */
    defaultDate?: DateOption | DateOption[];
    /**
     * - Initial value of the hour element, when no date is selected.
     */
    defaultHour?: number;
    /**
     * - Initial value of the minute element, when no date is selected.
     */
    defaultMinute?: number;
    /**
     * - Initial value of the seconds element, when no date is selected.
     */
    defaultSeconds?: number;
    /**
     * - Disables certain dates, preventing them from being selected. See https://chmln.github.io/flatpickr/examples/#disabling-specific-dates
     */
    disable?: DateLimit<DateOption>[];
    /**
     * - Set this to true to always use the non-native picker on mobile devices. By default, Flatpickr utilizes native datetime widgets unless certain options (e.g., disable) are used.
     */
    disableMobile?: boolean;
    /**
     * - Disables all dates except these specified. See https://chmln.github.io/flatpickr/examples/#disabling-all-dates-except-select-few
     */
    enable?: DateLimit<DateOption>[];
    /**
     * - Enables seconds selection in the time picker.
     */
    enableSeconds?: boolean;
    /**
     * - Enables the time picker.
     */
    enableTime?: boolean;
    /**
     * - Allows using a custom error handling function.
     */
    errorHandler?: (e: Error) => void;
    /**
     * - Allows using a custom date formatting function instead of the built-in. Generally unnecessary.
     */
    formatDate?: (date: Date, format: string, locale: any) => string;
    /**
     * - If "weekNumbers" are enabled, this is the function that outputs the week number for a given date, optionally along with other text.
     */
    getWeek?: (date: Date) => string | number;
    /**
     * - Adjusts the step for the hour input (including scrolling).
     */
    hourIncrement?: number;
    /**
     * - By default, clicking anywhere outside of the calendar/input will close the calendar. Clicking on elements specified in this option will not close the calendar.
     */
    ignoredFocusElements?: HTMLElement[];
    /**
     * - Displays the calendar inline.
     */
    inline?: boolean;
    /**
     * - The locale, either as a string (e.g., "ru", "en") or as an object. See https://chmln.github.io/flatpickr/localization/
     */
    locale?: any | Partial<any>;
    /**
     * - The maximum date that a user can pick (inclusive).
     */
    maxDate?: DateOption;
    /**
     * - The maximum time that a user can pick (inclusive).
     */
    maxTime?: DateOption;
    /**
     * - The minimum date that a user can pick (inclusive).
     */
    minDate?: DateOption;
    /**
     * - The minimum time that a user can pick (inclusive).
     */
    minTime?: DateOption;
    /**
     * - Adjusts the step for the minute input (including scrolling). Defaults to 5.
     */
    minuteIncrement?: number;
    /**
     * - Date selection mode, defaults to "single".
     */
    mode?: "single" | "multiple" | "range" | "time";
    /**
     * - How the month selector in the calendar should be shown.
     */
    monthSelectorType?: "dropdown" | "static";
    /**
     * - HTML for the right arrow icon, used to switch months.
     */
    nextArrow?: string;
    /**
     * - Hides the day selection in the calendar. Use it along with "enableTime" to create a time picker.
     */
    noCalendar?: boolean;
    /**
     * - Specifies the current date and time.
     */
    now?: DateOption;
    /**
     * - Fires when the selected dates have changed, either when a date is picked or cleared, by the user or programmatically.
     */
    onChange?: Hook | Hook[];
    /**
     * - Fires when the calendar is closed.
     */
    onClose?: Hook | Hook[];
    /**
     * - Fires for every day cell in the calendar, where the fourth argument is the HTML element of the cell. See https://chmln.github.io/flatpickr/events/#ondaycreate
     */
    onDayCreate?: Hook | Hook[];
    /**
     * - Fires before the calendar instance is destroyed.
     */
    onDestroy?: Hook | Hook[];
    /**
     * - Fires when valid keyboard input for the calendar is detected.
     */
    onKeyDown?: Hook | Hook[];
    /**
     * - Fires after the month has changed.
     */
    onMonthChange?: Hook | Hook[];
    /**
     * - Fires after the calendar is opened.
     */
    onOpen?: Hook | Hook[];
    /**
     * - Fires after the configuration for the calendar is parsed.
     */
    onParseConfig?: Hook | Hook[];
    /**
     * - Fires once the calendar instance is ready.
     */
    onReady?: Hook | Hook[];
    /**
     * - Like onChange, but fires immediately after any date changes.
     */
    onValueUpdate?: Hook | Hook[];
    /**
     * - Fires after the year has changed.
     */
    onYearChange?: Hook | Hook[];
    /**
     * - Fires before the calendar position is calculated.
     */
    onPreCalendarPosition?: Hook | Hook[];
    /**
     * - A custom datestring parser.
     */
    parseDate?: (date: string, format: string) => Date;
    /**
     * - Plugins. See https://chmln.github.io/flatpickr/plugins/
     */
    plugins?: Plugin[];
    /**
     * - How the calendar should be positioned with regards to the input. Defaults to "auto".
     */
    position?: "auto" | "above" | "below" | "auto left" | "auto center" | "auto right" | "above left" | "above center" | "above right" | "below left" | "below center" | "below right" | ((self: any, customElement: HTMLElement | undefined) => void);
    /**
     * - The element off of which the calendar will be positioned. Defaults to the date input.
     */
    positionElement?: Element;
    /**
     * - HTML for the left arrow icon, used to switch months.
     */
    prevArrow?: string;
    /**
     * - Whether to display the current month name in shorthand mode, e.g., "Sep" instead of "September".
     */
    shorthandCurrentMonth?: boolean;
    /**
     * - Creates a wrapper to position the calendar. Use this if the input is inside a scrollable element.
     */
    static?: boolean;
    /**
     * - Sets the number of months to show.
     */
    showMonths?: number;
    /**
     * - Displays time picker in 24-hour mode without AM/PM selection when enabled.
     */
    time_24hr?: boolean;
    /**
     * - Display week numbers left of the calendar.
     */
    weekNumbers?: boolean;
    /**
     * - See https://chmln.github.io/flatpickr/examples/#flatpickr-external-elements
     */
    wrap?: boolean;
    /**
     * - Handling year as locale year.
     */
    useLocaleYear?: boolean;
    /**
     * - Handling reset and move to calendar to default date.
     */
    resetMoveDefault?: boolean;
    /**
     * - Handling reset and selected a default date.
     */
    resetToDefault?: boolean;
};
