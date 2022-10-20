<script lang="ts">
	import { theRecipe } from '$lib/store';
	import RecipeItemDisplay from '../components/RecipeItemDisplay.svelte';

	theRecipe.set([
		{ name: 'milk', amount: 3, units: 'cups' },
		{ name: 'eggs', amount: 2, units: 'ea' }
	]);

	let count = 0;
	theRecipe.subscribe((recipe) => {
		count = recipe.length;
	});

	let amount: number | string = '';
	let name = '';
	let units = '';
	let amountField: HTMLInputElement;

	const handleDelete = (i: number) => {
		const recipe = [...$theRecipe];
		recipe.splice(i, 1);
		theRecipe.set(recipe);
	};

	const addItem = () => {
		if (typeof amount === 'number') {
			const newRecipe = [...$theRecipe, { name, amount, units }];
			theRecipe.set(newRecipe);
		}
		amount = '';
		name = '';
		units = '';
		amountField.focus();
	};
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

<div class="recipeForm">
	<form on:submit|preventDefault={() => addItem()}>
		<label for="amount">Amount:</label><br />
		<input type="number" id="amount" name="amount" bind:value={amount} bind:this={amountField} /><br
		/>
		<label for="units"> units:</label><br />
		<input type="text" id="units" name="units" bind:value={units} /><br />
		<label for="name"> name:</label><br />
		<input type="text" id="name" name="name" bind:value={name} />
		<input type="submit" value="add item" />
	</form>
</div>
<p />

<div class="recipeDisplay">
	{#each $theRecipe as item, i}
		{#if item}
			<RecipeItemDisplay {...item} on:delete={() => handleDelete(i)} />
		{/if}
	{/each}
</div>
<div class="ingredientCount">
	Number of ingredients: {count}
</div>

<style>
	.recipeDisplay {
		width: 50%;
		border: 1px solid blue;
		padding: 10px;
	}

	.ingredientCount {
		font-size: 1.5rem;
		padding: 3px;
		margin: 2px;
	}
</style>
