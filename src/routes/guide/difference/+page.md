---
title: What it difference from normal Svelte Flatpickr ?
---

There was has a [Svelte Flatpickr](https://github.com/jacobmischka/svelte-flatpickr?tab=readme-ov-file) before this but there no update for so long and lack of some feature , here a list that svelte flatpickr plus is difference

- On a calendar, year input has been replace with year dropdown element for easy to select year.
<div class="image_section">
    <div class="image_container">

![year-dropdown](/year-dropdown.png 'year dropdown')

</div>
</div>

- You can setting a reset behavior with `resetMoveDefault` and `resetToDefault`option.

<video width="320" height="240" autoplay loop style="border-radius:8px;margin-left:1rem;">
  <source src="/reset_behavior.mp4" type="video/mp4">
</video>

- You can using your locale years (e.g. Buddhist Era) with `useLocaleYear` option.
<div class="image_section">
    <div class="image_container">

![locale-year](/locale_year.png 'locale year')

</div>
</div>

<!-- - Have theme changer plugin to calling and change a theme of calendar while theme has been changed. -->

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
