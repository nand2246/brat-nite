<script lang="ts">
	import axios from 'axios';

	let expanded: boolean = false,
		volunteerInput: string = '';

	export let ingredientId: string, name: string, volunteer: string | undefined;

	function handleVolunteer() {
		expanded = true;
	}
	async function handleSubmit() {
		await axios.post('http://localhost:3000/ingredients/assignVolunteer', {
			ingredientId,
			volunteer: volunteerInput
		});
		volunteer = volunteerInput;
		expanded = false;
	}
</script>

<svelte:head>
	<title>cocktails</title>
</svelte:head>

<div class="card">
	<h1>{name}</h1>
	{#if volunteer}
		<h2>{volunteer}</h2>
	{/if}
	<h3>{ingredientId}</h3>
	{#if !volunteer}
		<button on:click={handleVolunteer}>i want to bring this</button>
	{/if}
	{#if expanded}
		<label for="volunteer">what is your name?</label>
		<input bind:value={volunteerInput} type="text" name="volunteer" />
		<button on:click={handleSubmit}>submit</button>
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
	}
</style>
