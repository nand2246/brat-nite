<svelte:head>
	<title>brat nite</title>
	<meta name="description" content="brat nite info" />
</svelte:head>

<section>
	<h1>brat nite</h1>
	<table>
		<tr>
			<td>
				<h2>who?</h2>
			</td>
			<td>
				<h3>you!</h3>
			</td>
		</tr>
		<tr>
			<td>
				<h2>what?</h2>
			</td>
			<td>
				<h3>brat nite pre!</h3>
			</td>
		</tr>
		<tr>
			<td>
				<h2>when?</h2>
			</td>
			<td>
				<h3>september 7, 7pm</h3>
			</td>
		</tr>
		<tr>
			<td>
				<h2>where?</h2>
			</td>
			<td>
				<h3>my address will not be on the internet so just ask me lol</h3>
			</td>
		</tr>
		<tr>
			<td>
				<h2>why?</h2>
			</td>
			<td>
				<h3>because brat</h3>
			</td>
		</tr>
	</table>
	<p>p.s. please check the other tabs for details and to volunteer to help me :)</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		font-size: 50px;
	}
	h2 {
		font-size: 30px;
		font-weight: 800;
	}

	h3 {
		font-size: 20px;
		font-weight: 100;
	}

	table {
		table-layout: fixed;
		width: 100%;
	}
	td {
		padding: 5px;
	}
	tr td:nth-child(1) {
		text-align: end;
	}
	tr td:nth-child(2) {
		text-align: start;
	}
</style>
