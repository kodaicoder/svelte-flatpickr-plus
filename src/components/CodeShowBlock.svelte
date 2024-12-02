<script>
	/** @type {{title?: string, code: any}} */
	let { title = 'Code', code, hideTitle = false, ...rest } = $props();

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

<div style={rest.style}>
	{#if !hideTitle}
		<div style="display:flex;align-items:center;padding-bottom:0.5rem;">
			<h3>{title}</h3>
		</div>
	{/if}
	<div class="code-show-block">
		<button class="copy-button" onclick={copyCode}>Copy</button>
		<code><pre>{code}</pre></code>
	</div>
</div>
