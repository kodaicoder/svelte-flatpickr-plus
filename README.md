<img src="https://raw.githubusercontent.com/kodaicoder/svelte-flatpickr-plus/refs/heads/v2.0/static/svelte-flatpickr.png" width=150>

## Svelte Flatpickr Plus

[![npm](https://img.shields.io/npm/v/svelte-flatpickr-plus?logo=npm&color=green)](https://www.npmjs.com/package/svelte-flatpickr-plus)
[![npm](https://img.shields.io/npm/dt/svelte-flatpickr-plus)](https://www.npmjs.com/package/svelte-flatpickr-plus)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/flatpickr/flatpickr/master/LICENSE.md)

Flatpickr is a lightweight and powerful datetime picker. Svelte Flatpickr Plus is a wrapper for Flatpickr with some extra features.

### Feature overview:

[Demo here](svelte-flatpickr-plus.vercel.app/guide/basic-usage/date-picker/)

- all features of Flatpickr
- Svelte Flatpickr Plus is just a svelte actions that you can using with use:action directive of svelte on input element with any class or style
- You can using your locale years (e.g. Buddhist Era) with `useLocaleYear` option.
- You can setting a reset behavior with `resetMoveDefault` and `resetToDefault` option.
- On a calendar, year input has been replace with year dropdown element for easy to select year.
- Have theme changer function to calling and change a theme of calendar easier.

## Actions

Svelte Flatpickr Plus coming with 1 powerful action and you can name it what ever you want.

```javascript
<script>import name_it_yourself from 'svelte-flatpickr-plus';</script>
```

## Installation

`npm i svelte-flatpickr-plus`

or

`pnpm i svelte-flatpickr-plus`

## Basic Usage

you can import any actions and passing options to that actions that all you need to do

example for build date picker element

```javascript
<script>
	import svlatepickr from 'svelte-flatpickr-plus';
</script>

<input name="datepicker" use:svlatepickr />
```

## Advance Usage ?

check it on the website for more information and advance usage >> [HERE](svelte-flatpickr-plus.vercel.app/) <<

## Compatibility

IE9 and up, Edge, iOS Safari 6+, Chrome 8+, Firefox 6+

## Supporting main project - flatpickr

flatpickr will never change its license, pester users for donations, or engage in other user-hostile behavior.

Nevertheless, if you enjoyed working with this library or if its made your life easier, you can buy them a cup of coffee :)

[❤️ Go here ](https://github.com/flatpickr/flatpickr/tree/master)
