import flatpickr from 'flatpickr_plus';
import yearDropdownPlugin from 'flatpickr_plus/dist/plugins/yearDropdown';
import monthSelectPlugin from 'flatpickr_plus/dist/plugins/monthSelect';
import 'flatpickr_plus/dist/flatpickr.css';
import 'flatpickr_plus/dist/plugins/monthSelect/style.css';

const defaultOptions = {
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: null,
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
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    mode: "single",
    monthSelectorType: "dropdown",
    noCalendar: false,
    position: "auto",
    positionElement: undefined,
    shorthandCurrentMonth: false,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false,
    useLocaleYear: false,
    resetMoveDefault: true,
    resetToDefault: true,
}

const hooks = new Set([
    'onChange',
    'onOpen',
    'onClose',
    'onMonthChange',
    'onYearChange',
    'onReady',
    'onValueUpdate',
    'onDayCreate',
]);

function removeOn(hook) {
    return hook.charAt(2).toLowerCase() + hook.substring(3);
}

function modifyHooks(opts = {}, node) {
    opts = Object.assign({}, opts);
    for (const hook of hooks) {
        //create custom event and adding detail as a flatpickr data
        const eventFirer = (selectedDates, dateStr, instance) => {
            const dispatchEvent = new CustomEvent(removeOn(hook), {
                detail: { selectedDates, dateStr, instance }
            });
            node.dispatchEvent(dispatchEvent);
        };
        if (hook in opts) {
            // modify hook to be array
            if (!Array.isArray(opts[hook])) opts[hook] = [opts[hook]];
            opts[hook].unshift(eventFirer);
        } else {
            opts[hook] = [eventFirer];
        }
    }
    return opts;
}

function attachFlatpickr(node, opts, plugins = [new yearDropdownPlugin()]) {
    const fp = flatpickr(node, {
        ...opts,
        plugins: plugins
    });

    function resetFlatpickr(event) {
        fp.clear();
        //prevent further actual reset form event
        //to prevent a data in input got clear again
        if (opts.defaultDate && opts.resetToDefault)
            event.preventDefault();
    }

    if (opts.wrap)
        node.querySelector('input').form?.addEventListener('reset', resetFlatpickr);
    else
        node.form?.addEventListener('reset', resetFlatpickr);

    return fp;
}

export const datePicker = async (node, options) => {
    options = { ...defaultOptions, ...options };
    const opts = modifyHooks(options, node);

    const datepickerInstance = attachFlatpickr(node, opts);

    return {
        destroy() {
            datepickerInstance.destroy();
            datepickerInstance.removeEventListener('reset');
        },
    };
}

export const monthPicker = async (node, options) => {

    const opts = modifyHooks(options, node);

    const monthPlugins =
        [
            new monthSelectPlugin({
                shorthand: options.shorthand, //defaults to false
                dateFormat: options.dateFormat, //defaults to "F Y"
                altFormat: options.altFormat //defaults to "F Y"
            }),
            new yearDropdownPlugin(),
        ]


    const monthPickerInstance = attachFlatpickr(node, opts, monthPlugins);

    return {
        destroy() {
            monthPickerInstance.destroy();
            monthPickerInstance.removeEventListener('reset');
        },
    };
}

export const dateRangePicker = async (node, options) => {
    options = { ...options, mode: 'range' }

    const opts = modifyHooks(options, node);

    const datepickerRangeInstance = attachFlatpickr(node, opts);

    return {
        destroy() {
            datepickerRangeInstance.destroy();
            datepickerRangeInstance.removeEventListener('reset');
        },
    };
}

export const monthRangePicker = async (node, options) => {
    options = { ...options, mode: 'range' }
    const opts = modifyHooks(options, node);

    const monthRangePlugins =
        [
            new monthSelectPlugin({
                shorthand: options.shorthand, //defaults to false
                dateFormat: options.dateFormat, //defaults to "F Y"
                altFormat: options.altFormat //defaults to "F Y"
            }),
            new yearDropdownPlugin(),
        ]


    const monthRangePickerInstance = attachFlatpickr(node, opts, monthRangePlugins);

    return {
        destroy() {
            monthRangePickerInstance.destroy();
            monthRangePickerInstance.removeEventListener('reset');
        },
    };
}



