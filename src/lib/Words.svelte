<script lang='ts'>
	const words = ['lodu', 'nice'];
	const answer = ['L', 'O', 'D', 'U'];

	//	$: displayed_count.set(count);
</script>
<div class='board'>
	<div class='words'>
		{#each answer as w}
			<div class='words-viewport'>
					<input bind:value={w} />
			</div>
		{/each}
	</div>
	<div class='words'>
		{#each answer as w}
			<div class='words-viewport'>
				<input bind:value={w} />
			</div>
		{/each}
	</div>
</div>

<style>
	.board {
    width: 350px;
		height: 420px;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 5px;
    padding: 10px;
    box-sizing: border-box;
	}
  .words {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
  }

  .words-viewport {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;
    position: relative;
  }

  .words-viewport input {
    line-height: 4rem;
    color: var(--text-color);
    text-transform: uppercase;
		background-color: var(--color-absent);
    border-radius: 6px 6px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -moz-box-flex: 1;
    -ms-flex: 1 1 auto;
    font-weight: lighter;
    height: 5.25rem;
    margin-left: 4%;
    min-width: 2rem;
    max-width: 4rem;
    text-align: center;
    -o-text-overflow: clip;
    text-overflow: clip;
    border: 1px solid;
    border-color: #eaeaea;
  }
</style>
