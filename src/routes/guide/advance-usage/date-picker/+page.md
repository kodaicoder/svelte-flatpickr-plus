---
title: Advance usage of Date picker
---

<script>
    import svlatepickr from '$lib';
     let    dateFormatValue = $state(),
            altInputValue = $state(),
            defaultDateValue = $state(undefined);

    const dateFormatOptions ={
        dateFormat: 'Z'
    }

    const altInputOptions = {
        ...dateFormatOptions,
        altInput:true,
        altFormat: 'd F Y',
    }

    const defaultDateOptions ={
        ...altInputOptions,
        defaultDate: new Date()
    }

</script>

## Default date

Set a default date to input after component is mounted

Result:

<input name="defaultDate" bind:value={defaultDateValue} use:svlatepickr={defaultDateOptions}/>

Value:

{defaultDateValue ?? 'Please select date from above input.'}
