<script lang="ts">
	import axios from 'axios';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';

	export let ingredientId: string, name: string, volunteer: string | undefined;

	let expanded: boolean = false,
		volunteerInput: string = '';

	async function assignVolunteer() {
		await axios.post(`${PUBLIC_BACKEND_URL}/ingredients/assignVolunteer`, {
			ingredientId,
			volunteer: volunteerInput
		});
		volunteer = volunteerInput;
		expanded = false;
	}

	async function unassignVolunteer() {
		await axios.post(`${PUBLIC_BACKEND_URL}/ingredients/unassignVolunteer`, {
			ingredientId
		});
		volunteer = undefined;
		expanded = false;
	}

	function switchExpanded() {
		expanded = !expanded;
	}
</script>

<svelte:head>
	<title>cocktails</title>
</svelte:head>

<div class="card">
	<h1>{name}</h1>
	{#if volunteer}
		<h3>claimed!</h3>
		<table>
			<tr>
				<td> who's bringing {name}?</td>
				<td><strong>{volunteer}</strong></td>
			</tr>
			<tr>
				<td>changed your mind?</td>
				<td
					><button on:click={() => (expanded = true)}>
						i am not going to bring {name} anymore</button
					></td
				>
			</tr>
		</table>
	{/if}

	{#if volunteer && expanded}
		<p>are you sure you are {volunteer}?</p>
		<button on:click={unassignVolunteer}
			>yes, i am {volunteer} and i will no longer be bringing {name}</button
		>
	{/if}

	{#if !volunteer && !expanded}
		<button on:click={switchExpanded}>i want to bring {name}</button>
	{/if}

	{#if !volunteer && expanded}
		<form on:submit={assignVolunteer}>
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

	table {
		table-layout: fixed;

		width: 100%;
	}
	tr td:nth-child(1) {
		text-align: end;
	}
	tr td:nth-child(2) {
		text-align: start;
	}
	td button {
		margin: 0;
	}
	td {
		padding: 10px;
	}
</style>
