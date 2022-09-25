<script>
	let counter = 0;
</script>

<h1>HW 5: Svelte</h1>
<section>
	<div class="prose">
		<p>
			This week we'll begin learning about the <a href="https://svelte.dev">Svelte</a> framework.
		</p>
		<p>
			You can see that with Svelte a <code>page</code> is developed by creating a corresponding
			<code>.svelte</code> file. This one file contains typescript, html, and css. Your challenge this
			week is to implement the project you developed in HW4 using the svelte framework.
		</p>
	</div>
</section>
<div class="cntOutput">
	<span class="displaCnt">{counter}</span>
</div>
<p />
<button class="cntBtn" on:click={() => counter++}>Click me!</button>

<style>
	.cntOutput {
		display: flex;
		margin: auto;
		justify-content: center;
		align-items: center;
		height: 50px;
		width: 50px;
		border: 1px solid black;
		border-radius: 5px;
	}
	.prose {
		margin: 1rem;
	}
	.displaCnt {
		font-size: 2em;
		font-weight: bold;
	}
	.cntBtn {
		background-color: #4caf50;
		border: none;
		border-radius: 0.5rem;
		color: white;
		padding: 1rem 2rem;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 2rem;
		margin: 0.1rem 0.2rem;
	}
</style>
