<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
</script>

<header>
	<div>
		<nav>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">home</a>
				</li>
				<li aria-current={$page.url.pathname === '/cocktails' ? 'page' : undefined}>
					<a href="/cocktails">cocktails</a>
				</li>
				<li aria-current={$page.url.pathname === '/ingredients' ? 'page' : undefined}>
					<a href="/ingredients">ingredients</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	header > div {
		flex-basis: 100%;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	nav ul {
		border-bottom: 2px black solid;
		border-right: 2px black solid;
		border-left: 2px black solid;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid white;
	}

	li[aria-current='page'] a {
		color: white;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: white;
	}
</style>
