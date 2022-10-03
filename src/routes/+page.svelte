<script lang="ts">
	import {Recipe} from "../lib/recipe"
	let theRecipe = new Recipe()
	theRecipe.addIngredient("milk", 3, "cups")
	theRecipe.addIngredient("eggs",2,"ea")
	import RecipeItemDisplay from "../components/RecipeItemDisplay.svelte"
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
			week is to implement the recipe manager using the svelte framework.
		</p>
	</div>
</section>

<div>
	{#each theRecipe.getIngredients() as item}
		{#if item}
			<RecipeItemDisplay name = {item.name} amount = {item.amount} units={item.units} />
		{/if}
	{/each}

</div>