## flatpickr - javascript datetime picker

[![npm version](https://badge.fury.io/js/svelte-flatpickr-plus.svg)](https://badge.fury.io/js/svelte-flatpickr-plus)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/flatpickr/flatpickr/master/LICENSE.md)

## Svelte Flatpickr Plus

Flatpickr is a lightweight and powerful datetime picker. Svelte Flatpickr Plus is a wrapper for Flatpickr with some extra features.

### Feature overview:

[Demo here](https://svelte-flatpickr-plus.vercel.app/)

- all features of Flatpickr
- Svelte Flatpickr Plus is just a svelte actions that you can using with use:action directive of svelte on input element with any class or style
- You can using your locale years (e.g. Buddhist Era) with `useLocaleYear` option.
- You can setting a reset behavior with `resetMoveDefault` and `resetToDefault` option.
- On a calendar, year input has been replace with year dropdown element for easy to select year.
- Have theme changer plugin to calling and change a theme of calendar while theme has been changed.

## Actions

Svelte Flatpickr Plus coming with 4 actions

- [datePicker](https://svelte-flatpickr-plus.vercel.app/datepicker)
- [monthPicker](https://svelte-flatpickr-plus.vercel.app/monthpicker)
- [dateRangePicker](https://svelte-flatpickr-plus.vercel.app/daterangepicker)
- [monthRangePicker](https://svelte-flatpickr-plus.vercel.app/monthrangepicker)

## Installation

`npm i svelte-flatpickr-plus`

or

`pnpm i svelte-flatpickr-plus`

## Basic Usage

you can import any actions and passing options to that actions that all you need to do

example for build date picker element

```
<script>
    //? import datePicker svelte action from 'svelte-flatpickr-plus'
    import { datePicker } from 'svelte-flatpickr-plus';

    //? declare any options you want to set in flatpickr
    const options = {
            dateFormat: 'Z',
            altFormat: 'd F Y',
            altInput: true
          };
</script>

//? using svelte action with html input element and set `options` to it
    <input
        name="input_datepicker"
        use:datePicker={options}
        placeholder="please select date"
        readonly
    />
```

[demo repl for datePicker action](https://www.sveltelab.dev/t4zx1p7v6mcp3yj?files=.%2Fsrc%2Froutes%2F%2Bpage.svelte)

## Compatibility

IE9 and up, Edge, iOS Safari 6+, Chrome 8+, Firefox 6+

## Supporting main project - flatpickr

flatpickr will never change its license, pester users for donations, or engage in other user-hostile behavior.

Nevertheless, if you enjoyed working with this library or if its made your life easier, you can buy them a cup of coffee :)

[❤️ Go here ](https://github.com/flatpickr/flatpickr/tree/master)
