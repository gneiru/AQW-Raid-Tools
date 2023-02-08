<script>
	import { copy } from 'svelte-copy';

	let title = 'Raid Exp Calculator';
	let copyMessage = 'Copy';
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
		// { name: 'Kala', value: 2000 },
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
	}
	function popSelfInArray(u) {
		let index = ultraSum.indexOf(u);
		ultraSum.splice(index, 1);
		ultraSum = ultraSum;
		sum -= u.value;
		console.log(u.currentTarget);
	}
	$: copyValue = prefix + give + discordID + '> ' + sum;

	const doCopy = () => {
		copyMessage = 'Copied';
		setTimeout(() => {
			copyMessage = 'Copy';
		}, 2000);
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Easily calculate helpers' bounty with this tool. Input discord ID, Click copy button, paste in discord then hit enter." />
</svelte:head>
<div class="mockup-window border border-bg-base-300 min-w-fit">
	<div class="justify-center px-4 border-t border-bg-base-300">
		<div class="text-3xl my-4">{title}</div>
		<div class="w-full flex flex-row">
			<div class="w-1/2 flex flex-col">
				<div class="form-control">
					<span class="label-text py-2">Bot prefix</span>
					<input
						type="text"
						bind:value={prefix}
						placeholder="me!"
						class="input input-bordered "
						name="prefix"
					/>
				</div>
				<div class="form-control">
					<span class="label-text py-2">Discord ID</span>
					<input type="text" bind:value={discordID} class="input input-bordered" name="discordID" />
				</div>
			</div>
			<div class="w-1/2 flex flex-col p-4">
				<div class="max-h-32 overflow-auto">
					{#each ultraSum as u, i}
						<button on:click={() => popSelfInArray(u)} class="btn btn-sm rounded-full">
							{u.name}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-4 h-4 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/></svg
							>
						</button>
					{/each}
				</div>
			</div>
		</div>
		<div
			class="p-4 my-4 max-w-l border-2 rounded-lg border-bg-secondary inline-flex items-baseline text-ellipsis overflow-hidden"
		>
			<pre><code id="Copied?"> {copyValue}<button
						use:copy={copyValue}
						on:svelte-copy={doCopy}
						class="btn btn-ghost btn-active btn-xs float-left">{copyMessage}</button
					></code
				></pre>
		</div>
		<div class="grid grid-cols-4 gap-2 bg-#372948 rounded my-4">
			{#each ultras as ultra}
				<button
					on:click={() => push(ultra)}
					class={['Weeklies', 'Dailies', 'All Ultras', 'Trio'].includes(ultra.name)
						? 'btn btn-accent'
						: 'btn btn-secondary'}
				>
					{ultra.name}
				</button>
			{/each}
			<button
				on:click={() => {
					sum *= 0;
					ultraSum = [];
				}}
				class="btn btn-warning text-bg-primary-content"
			>
				Clear
			</button>
		</div>
	</div>
</div>
