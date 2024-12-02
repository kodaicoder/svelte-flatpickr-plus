---
title: What is svelte flatpickr plus
---

<script>
	// import CodeShowBlock from '$components/CodeShowBlock.svelte';
	// import svlatepickr from '$lib';
</script>

Svelte Flatpickr Plus is just a svelte actions that you can using with `use:` directive of svelte on input element with any class or style and like the name said it is building on Flatpickr, a lightweight and powerful datetime picker.

<div class="image_section">
<div class="image_container">

![datepicker](/datepicker.png 'datepicker')

</div>
<div class="image_container">

![monthpicker](/monthpicker.png 'monthpicker')

</div>
</div>

<style>
	.image_section{
		display:flex;
		gap:1rem;
	}
	
	.image_container{
		display:flex;
		place-content:center;
		width:45%;
	}
	.image_container p{
		height:280px;
		margin:0 !important;
    	border-radius: 8px;
    	overflow: hidden;
	}
	.image_container p img{
		height:100%;
	}
</style>
