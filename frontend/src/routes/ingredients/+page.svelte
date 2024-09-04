<script lang="ts">
	import IngredientCard from './IngredientCard.svelte';

	type Ingredient = {
		_id: string;
		name: string;
		color: string;
		volunteer?: string;
	};

	export let data;
	let ingredients: [Ingredient] = data.ingredients;
</script>

<svelte:head>
	<title>ingredients</title>
</svelte:head>

<div>
	<h1>required ingredients:</h1>
	{#each ingredients as { _id, name, volunteer, color }}
		<IngredientCard ingredientId={_id} {name} --bg-color={color} {volunteer}></IngredientCard>
	{/each}
</div>
