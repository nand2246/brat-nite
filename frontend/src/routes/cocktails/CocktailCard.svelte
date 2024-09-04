<script lang="ts">
	export let title: string, ingredients: string[];

	let expanded = false;

	function handleExpand() {
		expanded = !expanded;
	}
</script>

<svelte:head>
	<title>cocktails</title>
</svelte:head>

<div class="card">
	<h1>{title}</h1>
	<button on:click={handleExpand}>details</button>

	{#if expanded}
		<div>
			<strong>ingredients:</strong>
			{#each ingredients as ingredient}
				<p>{ingredient}</p>
			{/each}
			<p></p>
		</div>
	{/if}
</div>

<style>
	:root {
		--text-color: blue;
	}
	.card {
		border: 2px solid black;
		background-color: var(--bg-color);
		margin-top: 10px;
		margin-bottom: 10px;
		text-align: center;
	}
	button {
		margin: 10px;
		background-color: var(--bg-color);
		border: 2px solid black;
		color: black;
	}
</style>
