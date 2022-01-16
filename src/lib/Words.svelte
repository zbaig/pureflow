<script lang='ts'>
	const answer = 'LODU';
	let row1 = [{val:'', status:'absent', disabled:false}, {val:'', status:'absent', disabled:false}, {val:'', status:'absent', disabled:false}, {val:'', status:'absent', disabled:false}]
	let row2 = [{val:'', status:'absent', disabled:false}, {val:'', status:'absent', disabled:false}, {val:'', status:'absent', disabled:false}, {val:'', status:'absent', disabled:false}]
	let error = ''
	//	$: displayed_count.set(count);
	const handleClick = () => {
		error = ''
		if(row1[0].val !== '') {
			row1 = row1.map((elem, idx) => {
				if(elem.val.toLowerCase() === answer.charAt(idx).toLowerCase()) {
					elem.status = 'correct'
				} else if(answer.toLowerCase().split('').indexOf(elem.val.toLowerCase()) > -1) {
					elem.status = 'present'
				}
				elem.disabled = true
				return elem
			})
		} else if(row2[0].val !== '') {
			row2 = row2.map((elem, idx) => {
				if(elem.val === answer.charAt(idx).toLowerCase()) {
					elem.status = 'correct'
				} else if(answer.toLowerCase().split('').indexOf(elem.val) > -1) {
					elem.status = 'present'
				}
				elem.disabled = true
				return elem
			})
		} else {
			error = 'Enter All Letters'
		}
		console.log('row1::', row1)
	};
	const init = (val, elId, prevElId) => {
		val != '' && (document.getElementById(elId).focus())
		val == '' && (document.getElementById(prevElId).focus())
	}
</script>
<div class='board'>
		<div class='words'>
			{#each row1 as w, idx}
				<div class='words-viewport words-viewport-{w.status}'>
					<input id={`row1${idx}`} bind:value={w.val} maxlength='1' disabled={w.disabled} on:input={init(w.val, `row1${idx<3?idx+1:3}`, `row1${idx>0?idx-1:0}`)} />
				</div>
			{/each}
		</div>
	<div class='words'>
		{#each row2 as w, idx}
			<div class='words-viewport'>
				<input id={`row2${idx}`} bind:value={w.val} disabled={w.disabled} on:input={init(w.val, `row2${idx<3?idx+1:3}`, `row2${idx>0?idx-1:0}`)}/>
			</div>
		{/each}
	</div>
	<button on:click={handleClick}>Enter</button>
	<h1>{error}</h1>
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

    .board button {
        background-color: transparent;
        border: 3px solid #000000;
        box-sizing: border-box;
        color: #00132C;
        font-family: "Avenir Next LT W01 Bold",sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        padding: 16px 23px;
        position: relative;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        appearance: auto;
        text-rendering: auto;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0;
        text-shadow: none;
        align-items: flex-start;
        margin: 5rem 0;
        border-image: initial;
    }

    .board button:before {
        background-color: #D5EDF6;
        content: "";
        height: calc(100% + 3px);
        position: absolute;
        right: -7px;
        top: -9px;
        transition: background-color 300ms ease-in;
        width: 100%;
        z-index: -1;
    }
		.board button:hover:before {
				background-color: #1FCCEB;
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

		.words-viewport-present input, .words-viewport-present input:disabled {
        background-color: var(--color-present)!important;
        opacity: 1;
		}
    .words-viewport-correct input, .words-viewport-correct input:disabled {
        background-color: var(--color-correct)!important;
        opacity: 1;
    }
    .words-viewport-absent input, .words-viewport-absent input:disabled {
        background-color: var(--color-absent)!important;
        opacity: 1;
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
