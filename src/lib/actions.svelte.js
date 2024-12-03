import flatpickr from 'flatpickr_plus';
import yearDropdownPlugin from 'flatpickr_plus/dist/plugins/yearDropdown';
import monthSelectPlugin from 'flatpickr_plus/dist/plugins/monthSelect';
import 'flatpickr_plus/dist/flatpickr.css';
import 'flatpickr_plus/dist/plugins/monthSelect/style.css';

/**
 * Represents a date option that can be either a Date object, a string, or a number.
 * @typedef {Date | string | number} DateOption
 */

/**
 * Represents a date range limit with 'from' and 'to' properties.
 * @template D
 * @typedef {Object} DateRangeLimit
 * @property {D} from - The start of the date range limit.
 * @property {D} to - The end of the date range limit.
 */

/**
 * Represents a date limit that can be a single date, a date range limit, or a function that checks dates.
 * @template D
 * @typedef {D | DateRangeLimit<D> | ((date: Date) => boolean)} DateLimit
 */

/**
 * A hook function that receives an array of dates, the current date string, the Flatpickr instance, and optional data.
 * @typedef {(dates: Date[], currentDateString: string, self: any, data?: any) => void} Hook
 */

/**
 * Represents a key for various hooks used in Flatpickr.
 * @typedef {"onChange" | "onClose" | "onDayCreate" | "onDestroy" | "onKeyDown" | "onMonthChange" | "onOpen" | "onParseConfig" | "onReady" | "onValueUpdate" | "onYearChange" | "onPreCalendarPosition"} HookKey
 */
/**
 * @typedef {Object} FlatpickrOptions
 * @property {boolean}  [allowInput]  - Allows the user to enter a date directly into the input field. By default, direct entry is disabled.
 * @property {boolean} [allowInvalidPreload] - Allow preloading of an invalid date.
 * @property {string} [altFormat] - Exactly the same as date format, but for the altInput field.
 * @property {boolean} [altInput] - Show the user a readable date (as per altFormat), but return something totally different to the server.
 * @property {string} [altInputClass] - This class will be added to the input element created by the altInput option. Note that altInput already inherits classes from the original input.
 * @property {boolean} [animate] - Whether to enable animations, such as month transitions.
 * @property {HTMLElement} [appendTo] - Instead of body, appends the calendar to the specified node instead.
 * @property {string} [ariaDateFormat] - Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat. If you change this, you should choose a value that will make sense if a screen reader reads it out loud. Defaults to "F j, Y".
 * @property {boolean} [autoFillDefaultTime] - Whether the default time should be auto-filled when the input is empty and gains or loses focus. Defaults to true.
 * @property {boolean} [clickOpens] - Whether clicking on the input should open the picker. Set it to false if you only want to open the calendar programmatically.
 * @property {boolean} [closeOnSelect] - Whether the calendar should close after date selection.
 * @property {string} [conjunction] - If "mode" is "multiple", this string will be used to join selected dates together for the date input value.
 * @property {string} [dateFormat] - A string of characters that are used to define how the date will be displayed in the input box. See https://chmln.github.io/flatpickr/formatting
 * @property {DateOption | DateOption[]} [defaultDate] - The initial selected date(s).
 * @property {number} [defaultHour] - Initial value of the hour element, when no date is selected.
 * @property {number} [defaultMinute] - Initial value of the minute element, when no date is selected.
 * @property {number} [defaultSeconds] - Initial value of the seconds element, when no date is selected.
 * @property {DateLimit<DateOption>[]} [disable] - Disables certain dates, preventing them from being selected. See https://chmln.github.io/flatpickr/examples/#disabling-specific-dates
 * @property {boolean} [disableMobile] - Set this to true to always use the non-native picker on mobile devices. By default, Flatpickr utilizes native datetime widgets unless certain options (e.g., disable) are used.
 * @property {DateLimit<DateOption>[]} [enable] - Disables all dates except these specified. See https://chmln.github.io/flatpickr/examples/#disabling-all-dates-except-select-few
 * @property {boolean} [enableSeconds] - Enables seconds selection in the time picker.
 * @property {boolean} [enableTime] - Enables the time picker.
 * @property {(e: Error) => void} [errorHandler] - Allows using a custom error handling function.
 * @property {(date: Date, format: string, locale: any) => string} [formatDate] - Allows using a custom date formatting function instead of the built-in. Generally unnecessary.
 * @property {(date: Date) => string | number} [getWeek] - If "weekNumbers" are enabled, this is the function that outputs the week number for a given date, optionally along with other text.
 * @property {number} [hourIncrement] - Adjusts the step for the hour input (including scrolling).
 * @property {HTMLElement[]} [ignoredFocusElements] - By default, clicking anywhere outside of the calendar/input will close the calendar. Clicking on elements specified in this option will not close the calendar.
 * @property {boolean} [inline] - Displays the calendar inline.
 * @property {boolean} [isMonthPicker] - Whether the calendar is a month picker.
 * @property {any | Partial<any>} [locale] - The locale, either as a string (e.g., "ru", "en") or as an object. See https://chmln.github.io/flatpickr/localization/
 * @property {DateOption} [maxDate] - The maximum date that a user can pick (inclusive).
 * @property {DateOption} [maxTime] - The maximum time that a user can pick (inclusive).
 * @property {DateOption} [minDate] - The minimum date that a user can pick (inclusive).
 * @property {DateOption} [minTime] - The minimum time that a user can pick (inclusive).
 * @property {number} [minuteIncrement] - Adjusts the step for the minute input (including scrolling). Defaults to 5.
 * @property {"single" | "multiple" | "range" | "time"} [mode] - Date selection mode, defaults to "single".
 * @property {"dropdown" | "static"} [monthSelectorType] - How the month selector in the calendar should be shown.
 * @property {string} [nextArrow] - HTML for the right arrow icon, used to switch months.
 * @property {boolean} [noCalendar] - Hides the day selection in the calendar. Use it along with "enableTime" to create a time picker.
 * @property {DateOption} [now] - Specifies the current date and time.
 * @property {Hook | Hook[]} [onChange] - Fires when the selected dates have changed, either when a date is picked or cleared, by the user or programmatically.
 * @property {Hook | Hook[]} [onClose] - Fires when the calendar is closed.
 * @property {Hook | Hook[]} [onDayCreate] - Fires for every day cell in the calendar, where the fourth argument is the HTML element of the cell. See https://chmln.github.io/flatpickr/events/#ondaycreate
 * @property {Hook | Hook[]} [onDestroy] - Fires before the calendar instance is destroyed.
 * @property {Hook | Hook[]} [onKeyDown] - Fires when valid keyboard input for the calendar is detected.
 * @property {Hook | Hook[]} [onMonthChange] - Fires after the month has changed.
 * @property {Hook | Hook[]} [onOpen] - Fires after the calendar is opened.
 * @property {Hook | Hook[]} [onParseConfig] - Fires after the configuration for the calendar is parsed.
 * @property {Hook | Hook[]} [onReady] - Fires once the calendar instance is ready.
 * @property {Hook | Hook[]} [onValueUpdate] - Like onChange, but fires immediately after any date changes.
 * @property {Hook | Hook[]} [onYearChange] - Fires after the year has changed.
 * @property {Hook | Hook[]} [onPreCalendarPosition] - Fires before the calendar position is calculated.
 * @property {(date: string, format: string) => Date} [parseDate] - A custom datestring parser.
 * @property {Plugin[]} [plugins] - Plugins. See https://chmln.github.io/flatpickr/plugins/
 * @property {"auto" | "above" | "below" | "auto left" | "auto center" | "auto right" | "above left" | "above center" | "above right" | "below left" | "below center" | "below right" | ((self: any, customElement: HTMLElement | undefined) => void)} [position] - How the calendar should be positioned with regards to the input. Defaults to "auto".
 * @property {Element} [positionElement] - The element off of which the calendar will be positioned. Defaults to the date input.
 * @property {string} [prevArrow] - HTML for the left arrow icon, used to switch months.
 * @property {boolean} [shorthandCurrentMonth] - Whether to display the current month name in shorthand mode, e.g., "Sep" instead of "September".
 * @property {boolean} [shorthand] - Whether to display the current date in shorthand mode.
 * @property {boolean} [static] - Creates a wrapper to position the calendar. Use this if the input is inside a scrollable element.
 * @property {number} [showMonths] - Sets the number of months to show.
 * @property {boolean} [time_24hr] - Displays time picker in 24-hour mode without AM/PM selection when enabled.
 * @property {boolean} [weekNumbers] - Display week numbers left of the calendar.
 * @property {boolean} [wrap] - See https://chmln.github.io/flatpickr/examples/#flatpickr-external-elements
 * @property {boolean} [useLocaleYear] - Handling year as locale year.
 * @property {boolean} [resetMoveDefault] - Handling reset and move to calendar to default date.
 * @property {boolean} [resetToDefault] - Handling reset and selected a default date.
 */

const endDayOfNextYear = new Date(new Date().getFullYear() + 1, 11, 31);

/** @type {FlatpickrOptions} */
const defaultOptions = {
    allowInput: true,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "",
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: true,
    enableSeconds: false,
    enableTime: false,
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    isMonthPicker: false,
    locale: "default",
    maxDate: endDayOfNextYear,
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    shorthandCurrentMonth: false,
    shorthand: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false,
    useLocaleYear: false,
    resetMoveDefault: true,
    resetToDefault: true,
};
/** @type {FlatpickrOptions} */
const defaultMonthOptions = {
    ...defaultOptions,
    altFormat: 'F Y',
    ariaDateFormat: 'F Y',
    dateFormat: 'F Y'
}

/** @type {HookKey[]} */
const hooks = [
    'onChange',
    'onMonthChange',
    'onYearChange',
    'onReady',
    'onOpen',
    'onDayCreate',
    'onClose',
    'onValueUpdate'
];

function removeOn(hook) {
    return hook.charAt(2).toLowerCase() + hook.substring(3);
}

function modifyHooks(opts = {}, node) {
    opts = Object.assign({}, opts);
    // console.log(node.name, node);
    for (const hook of hooks) {
        //create custom event and adding detail as a flatpickr data
        // const eventFirer = (selectedDates, dateStr, instance) => {
        //     const dispatchEvent = new CustomEvent(removeOn(hook), {
        //         detail: { selectedDates, dateStr, instance }
        //     });
        //     node.dispatchEvent(dispatchEvent);
        // };
        if (!Array.isArray(opts[hook])) opts[hook] = [opts[hook]];
        // if (hook in opts) {
        //     // modify hook to be array
        //     // if (!Array.isArray(opts[hook])) opts[hook] = [opts[hook]];
        //     opts[hook].unshift(eventFirer);
        // } else {
        //     opts[hook] = [eventFirer];
        // }
    }
    return opts;
}

function resetFlatpickr(event, fp, opts) {
    fp.clear();
    //prevent further actual reset form event
    //to prevent a data in input got clear again
    if (opts.defaultDate && opts.resetToDefault)
        event.preventDefault();
}

function attachFlatpickr(node, opts, plugins = opts.noCalendar ? [] : [yearDropdownPlugin()]) {
    node.setAttribute('autocomplete', 'off');
    if (!opts.allowInput) {
        node.setAttribute('readonly', 'true');
    }
    const fp = flatpickr(node, {
        ...opts,
        onOpen: [
            async function (selectedDates, dateStr, instance) {
                if (!opts.allowInput) {
                    if (instance.altInput) {
                        const dayElement = await instance.days;
                        if (dayElement) {
                            if (dayElement.querySelector('.today')) {
                                /** @type {HTMLElement} */
                                (dayElement.querySelector('.today'))?.focus();
                            } else {
                                /** @type {HTMLElement} */
                                (dayElement.querySelector('.selected'))?.focus();
                            }
                        }
                    } else {
                        const dayElement = await instance.days;
                        if (dayElement) {
                            if (dayElement.querySelector('.today')) {
                                /** @type {HTMLElement} */
                                (dayElement.querySelector('.today'))?.focus();
                            } else {
                                /** @type {HTMLElement} */
                                (dayElement.querySelector('.selected'))?.focus();
                            }
                            return
                        }
                        instance.hourElement?.focus()
                    }
                }
            },
            ...opts.onOpen
        ],
        onClose: [
            function (selectedDates, dateStr, instance) {
                if (instance.altInput) {
                    instance.altInput.blur();
                } else {
                    instance.input.blur();
                }
            },
            ...opts.onClose
        ],
        plugins: plugins
    });

    if (opts.wrap)
        node.querySelector('input').form?.addEventListener('reset', (ev) => resetFlatpickr(ev, fp, opts));
    else
        node.form?.addEventListener('reset', (ev) => resetFlatpickr(ev, fp, opts));

    return fp;
}

/** @type {import('svelte/action').Action} */
const datePicker = (node, options) => {
    options = { ...defaultOptions, ...options };
    const opts = modifyHooks(options, node);
    // const optsRemoveDefault = { ...opts, defaultDate: [] }
    const instance = attachFlatpickr(node, opts);

    $effect(() => {
        if (opts.defaultDate) {
            const event = new Event('input');
            node.dispatchEvent(event);
        }
        return () => {
            instance.destroy();
            instance._input?.form?.removeEventListener('reset', (ev) => resetFlatpickr(ev, instance, opts));
        };
    });
}

/** @type {import('svelte/action').Action} */
const monthPicker = (node, options) => {
    options = { ...defaultOptions, ...options };
    const opts = modifyHooks(options, node);
    const monthPlugins =
        [
            monthSelectPlugin({
                shorthand: options.shorthand, //defaults to false
                dateFormat: options.dateFormat, //defaults to "F Y"
                altFormat: options.altFormat //defaults to "F Y"
            }),
            yearDropdownPlugin(),
        ]
    const instance = attachFlatpickr(node, opts, monthPlugins);
    $effect(() => {
        if (opts.defaultDate) {
            const event = new Event('input');
            node.dispatchEvent(event);
        }

        return () => {
            instance.destroy();
            instance._input?.form?.removeEventListener('reset', (ev) => resetFlatpickr(ev, instance, opts));
        };
    });
}

/** @type {import('svelte/action').Action} */
export default function (node, options = defaultOptions) {
    if (options.isMonthPicker) {
        options = {
            ...defaultMonthOptions, ...options
        }
        monthPicker(node, options);
    } else {
        options = {
            ...defaultOptions, ...options
        }
        datePicker(node, options);
    }
}