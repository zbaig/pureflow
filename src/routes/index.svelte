<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Words from '$lib/Words.svelte';
</script>

<svelte:head>
	<title>PureFlow</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="welcome.png" type="image/png" />
				<img src="welcome.png" alt="Welcome" />
			</picture>
		</div>
	</h1>
	<Words />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
