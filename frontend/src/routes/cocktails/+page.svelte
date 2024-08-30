<script lang="ts">
	import CocktailCard from './CocktailCard.svelte';

	type Cocktail = {
		title: string;
		color: string;
		ingredients: string[];
	};

	export let data;

	let cocktails: Cocktail[] = data.cocktails;
</script>

<svelte:head></svelte:head>

<section>
	<h1>cocktails</h1>
	{#each cocktails as { title, color, ingredients }}
		<CocktailCard {title} --bg-color={color} {ingredients} />
	{/each}
</section>
