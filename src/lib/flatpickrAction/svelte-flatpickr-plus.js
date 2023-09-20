import { createEventDispatcher } from 'svelte';
import flatpickr from 'flatpickr_plus';
import yearDropdownPlugin from 'flatpickr_plus/dist/plugins/yearDropdown';
import monthSelectPlugin from 'flatpickr_plus/dist/plugins/monthSelect';
import 'flatpickr_plus/dist/flatpickr.css';
import 'flatpickr_plus/dist/plugins/monthSelect/style.css';

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

const removeOn = (hook) => {
    return hook.charAt(2).toLowerCase() + hook.substring(3);
}

//// const updateValue = (newValue, dateStr, fp) => {
////     const newModeValue = getModeValue(fp, newValue);
////     // If both are already falsey, don't perform prop update
////     if (!areValuesEqual(value, newModeValue) && (value || newModeValue)) {
////         value = newModeValue;
////     }
////     formattedValue = dateStr;
//// }

export const datepicker = async (node, options) => {
    const dispatch = createEventDispatcher();
    const modifyHooks = (opts = {}) => {
        opts = Object.assign({}, opts);

        for (const hook of hooks) {
            const eventFirer = (selectedDates, dateStr, instance) => {
                dispatch(removeOn(hook), [selectedDates, dateStr, instance]);
            };

            if (hook in opts) {
                // modify hook to be array
                if (!Array.isArray(opts[hook])) opts[hook] = [opts[hook]];
                opts[hook].push(eventFirer);
            } else {
                opts[hook] = [eventFirer];
            }
        }

        //// if (opts.onChange && !opts.onChange.includes(updateValue))
        ////     opts.onChange.push(updateValue);

        return opts;
    }
    const opts = modifyHooks(options);

    console.dir(opts);

    const datepickerNode = flatpickr(node, {
        // ...options,
        ...opts,
        plugins: [new yearDropdownPlugin()]
    });

    const resetFlatpickr = async () => {
        datepickerNode.clear();
    };

    if (opts.wrap)
        node.querySelector('input').form?.addEventListener('reset', resetFlatpickr);
    else
        node.form?.addEventListener('reset', resetFlatpickr);

    return {
        destroy() {
            datepickerNode.destroy();
            node.form?.removeEventListener('reset', resetFlatpickr);
        },
    };
}

export const monthpicker = async (node, options) => {
    console.log(node);
    console.log(options);

    const monthpickerNode = flatpickr(node, {
        ...options,
        plugins: [
            new monthSelectPlugin({
                shorthand: options.shorthand, //defaults to false
                dateFormat: options.dateFormat, //defaults to "F Y"
                altFormat: options.altFormat //defaults to "F Y"
            }),
            new yearDropdownPlugin(),
        ]
    });

    const resetFlatpickr = () => {
        monthpickerNode.clear();
    };
    node.form?.addEventListener('reset', resetFlatpickr);

    return {
        destroy() {
            monthpickerNode.destroy();
            node.form?.removeEventListener('reset', resetFlatpickr);
        },
    };
}



