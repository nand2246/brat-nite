<script lang="ts">
	import axios from 'axios';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';

	let expanded: boolean = false,
		volunteerInput: string = '';

	export let ingredientId: string, name: string, volunteer: string | undefined;

	export async function assignVolunteer() {
		await axios.post(`${PUBLIC_BACKEND_URL}/ingredients/assignVolunteer`, {
			ingredientId,
			volunteer: volunteerInput
		});
	}

	function switchExpanded() {
		expanded = !expanded;
	}

	async function handleSubmit() {
		assignVolunteer();
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
		<h3>claimed!</h3>
		<h2>who's bringing {name}?</h2>
		<h4>{volunteer}</h4>
	{/if}
	{#if !volunteer && !expanded}
		<button on:click={switchExpanded}>i want to bring {name}</button>
	{/if}
	{#if expanded}
		<form method="POST" on:submit={handleSubmit}>
			<label for="volunteer">what is your name?</label>
			<input bind:value={volunteerInput} type="text" name="volunteer" />
			<button>i will bring {name}!</button>
		</form>
		<button on:click={switchExpanded}>cancel</button>
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
	input {
		background-color: var(--bg-color);
		border: 2px solid black;
	}
	input:focus {
		outline: none;
	}
</style>
