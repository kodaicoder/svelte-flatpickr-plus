<script>
	export let code;

	async function copyCode(ev) {
		await navigator.clipboard.writeText(code);
		changeButtonText(ev.target, 'Copied👍');
	}

	function changeButtonText(button, newText) {
	  // Save the original text of the button
	  const originalText = button.textContent;
	  // Change the text of the button to the new text
	  button.textContent = newText;
	  // Wait for 1.5 seconds
	  setTimeout(() => {
	    // Change the text of the button back to the original text
	    button.textContent = originalText;
	  }, 1500);
	}
</script>

<div>
	<h3>Code</h3>
	<div>
		<code class="code-show-block">{code}</code> <button class="copy-button" on:click={copyCode} >Copy</button>
	</div>
</div>
