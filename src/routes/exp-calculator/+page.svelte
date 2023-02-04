<script>
    import { copy } from 'svelte-copy';

	let title = 'Raid Exp Calculator';
    let copyMessage = "Copy"
    let prefix = 'me!';
    let give = 'give-xp <@';
	let ultraSum = [];
    let discordID = '';
    let sum = 0;
	let ultras = [
		{ name: 'Dage', value: 6000 },
		{ name: 'Darkon', value: 8000 },
		{ name: 'Nulgath', value: 4000 },
		{ name: 'Drago', value: 2500 },
		{ name: 'Tyndarius', value: 2000 },
		{ name: 'Engineer', value: 2000 },
		{ name: 'Warden', value: 2000 },
		{ name: 'Ezrajal', value: 2000 },
		// {name: 'Kala', value: 2000},
		// {name: 'aas', value: 2000},
		{ name: 'VA Daily', value: 2500 },
		{ name: 'Nul Daily', value: 1 },
		{ name: 'Trio', value: 6000 },
		{ name: 'Dailies', value: 8000 },
		{ name: 'Weeklies', value: 26500 },
		{ name: 'All Ultras', value: 34500 }
	];
    
	function push(ultra) {
		sum += ultra.value;
        ultraSum.push(ultra);
        ultraSum = ultraSum;
        console.log(ultraSum);
	}
    function popSelfInArray(u) {
        let index = ultraSum.indexOf(u);
        ultraSum.splice(index, 1);
        ultraSum = ultraSum;
        sum -= u.value;
    }
    $: copyValue = prefix + give+ discordID + "> " +sum

    const doCopy = () => {
        copyMessage = 'Copied';
        setTimeout(() => {
          copyMessage = 'Copy';
        }, 4000);
      }

</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={title} />
</svelte:head>

<div class="text-column">
    <div class="grid flex-grow">
        <h1>{title}</h1>
        <div class="form-control w-full grid grid-cols-2">
            <label class="label" for="prefix">
                <span class="label-text">Bot prefix</span>
                <input type="text" bind:value={prefix} placeholder="me!" class="input input-bordered " name="prefix"/>
            </label>
            <label class="label" for="prefix">
                <span class="label-text">Discord ID</span>
                <input type="text" bind:value={discordID} class="input input-bordered " name="discordID"/>
            </label>

        </div>
        <div>
            
            <div class="mockup-code">
                <pre><code id="Copied?"> {copyValue}<button use:copy = {copyValue} on:svelte-copy = {doCopy} class="btn btn-ghost btn-active btn-xs float-right">{copyMessage}</button></code></pre>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-2 bg-#372948 rounded-lg">
            {#each ultras as ultra}
                <button on:click={() => push(ultra) } class={['Weeklies', 'Dailies','All Ultras', 'Trio'].includes(ultra.name) ? "btn btn-primary" : "btn" }>
                    {ultra.name}
                </button>
            {/each}
            <button on:click={() => {
                sum *= 0;
                ultraSum = [];
              }} class="btn btn-warning"> Clear </button>
        </div>
    </div>
    <div class="grid mt-4 border-t-2 border-accent">
        <div class="btn-group-horizontal max-h-sm max-w-xl mt-4 overflow-y-auto">
            {#each ultraSum as u}
                <button on:click={() => popSelfInArray(u) } class="badge badge-default gap-2">
                    {u.name}  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            {/each}
        </div>
    </div>
</div>


<style>
    
</style>
