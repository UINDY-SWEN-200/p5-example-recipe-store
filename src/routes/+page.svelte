<script lang="ts">
	import {Recipe} from "../lib/recipe"
	import type {RecipeItem} from "../lib/recipe"
	import RecipeItemDisplay from "../components/RecipeItemDisplay.svelte"
	import {DBObserver} from "../lib/dbObserver"
	import type {SingleDB} from "../lib/singledb"
	
	let theRecipe = new Recipe()
	theRecipe.addIngredient("milk", 3, "cups")
	theRecipe.addIngredient("eggs",2,"ea")

	let count = 0;

	const updateCount = (cnt:number) => {
		count = cnt
	}

	let observer = new DBObserver<SingleDB<RecipeItem>, RecipeItem>((cnt) => updateCount(cnt))
	theRecipe.subscribeObserver(observer)

	let theIngredients = theRecipe.getIngredients()
	
	let amount : number | string =''
	let name=''
	let units=''
	let amountField:HTMLInputElement;


	const handleDelete = (i:number) => {
		theRecipe.deleteIngredient(theIngredients[i].name)
		theIngredients = theRecipe.getIngredients()
	}

	const addItem = () => {
		if (typeof amount === "number") {
			theRecipe.addIngredient(name, amount, units)
			theIngredients = theRecipe.getIngredients()
		}
		amount = ''
		name = ''
		units = ''
		amountField.focus()
	}

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
		<label for="amount">Amount:</label><br>
		<input type="number" id="amount" name="amount" bind:value={amount} bind:this={amountField}><br>
		<label for="units"> units:</label><br>
		<input type="text" id="units" name="units" bind:value={units}><br>
		<label for="name"> name:</label><br>
		<input type="text" id="name" name="name" bind:value={name}>  <input type="submit" value="add item">
	</form>		
</div>
<p/>

<div class="recipeDisplay">
	{#each theIngredients as item,i}
		{#if item}
			<RecipeItemDisplay {...item} on:delete={()=>handleDelete(i)}/>
		{/if}
	{/each}
</div>
<div class="ingredientCount">
	Number of ingredients: {count}
</div>


<style>
	.recipeDisplay {
		width:50%;
		border: 1px solid blue;
		padding: 10px;
	}

	.ingredientCount {
		font-size: 1.5rem;
		padding: 3px;
		margin: 2px;
	}
	
</style>