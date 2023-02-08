<script>
	import { copy } from 'svelte-copy';
	import Copy from '$lib/images/copy.svelte';
	import Alert from 'svelte-atoms/Alert.svelte';

	let title = 'Raid Maps';
	let content = 'Easily copy maps when raiding ultras and daily quests with guild members'
	let copyValue = '';
	let daily = true;
	let nul = true;
	let weekly = false;
	let va = true;
	let roomNumber = 1001;
	let ClickedCopy = false;

	let maps = [
		{ daily: 'ultraezrajal', weekly: 'ultradage', nul: 'originul', va: 'shadowfall' },
		{ daily: 'ultrawarden', weekly: 'ultradarkon', nul: 'voidflibbi', va: 'voidflibbi' },
		{
			daily: 'ultraengineer',
			weekly: 'championdrakath',
			nul: 'voidnightbane',
			va: 'icestormarena'
		},
		{ daily: 'ultratyndarius', weekly: 'ultranulgath', nul: 'voidxyfrag', va: 'hydrachallenge' },
		{ daily: '', weekly: 'ultradrago', nul: '', va: '' }
	];

	$: room = roomNumber === null ? Math.floor(Math.random() * 100000) : roomNumber;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={content} />
</svelte:head>
<div>
	{#if ClickedCopy == true}
		<Alert
			status="positive"
			icon="check"
			closable
			on:close={() => {
				ClickedCopy = false;
			}}
		>
			Copied!
			<div slot="description">{copyValue}</div>
		</Alert>
	{/if}
	<div class="justify-center px-4 border-t border-base-300">
		<div class="text-3xl my-4">{title}</div>
		<div class="form-control">
			<span class="label-text py-2">Room Number</span>
			<input type="number" bind:value={roomNumber} class="input input-bordered max-w-sm" />
		</div>
		<div class="overflow-x-auto mt-4">
			<table class="table w-full table-fixed">
				<!-- head -->
				<thead>
					<tr>
						<th><input type="checkbox" bind:checked={daily} class="checkbox checkbox-primary mx-4" /> Daily</th>
						<th><input type="checkbox" bind:checked={weekly} class="checkbox checkbox-primary mx-4" />Weekly</th>
						<th><input type="checkbox" bind:checked={nul} class="checkbox checkbox-primary mx-4" />Nully</th>
						<th><input type="checkbox" bind:checked={va} class="checkbox checkbox-primary mx-4" />VoidAura</th>
					</tr>
				</thead>
				<tbody>
					{#each maps as map}
						<tr>
							{#if map.daily && daily}
								<td data-column-name="daily">
									<button
										class="btn btn-ghost btn-xs float-left"
										use:copy={`/join ${map.daily}-${room}`}
										on:svelte-copy={(event) => {
											ClickedCopy = true;
											copyValue = event.detail;
										}}
									>
										<Copy />
									</button>
									/join {map.daily}-{room}
								</td>
							{:else}
								<td />
							{/if}
							{#if map.weekly && weekly}
								<td data-column-name="weekly">
									<button
										class="btn btn-ghost btn-xs float-left"
										use:copy={`/join ${map.weekly}-${room}`}
										on:svelte-copy={(event) => {
											ClickedCopy = true;
											copyValue = event.detail;
										}}
									>
										<Copy />
									</button>
									/join {map.weekly}-{room}
								</td>
							{:else}
								<td />
							{/if}
							{#if map.nul && nul}
								<td data-column-name="nul">
									<button
										class="btn btn-ghost btn-xs float-left"
										use:copy={`/join ${map.nul}-${room}`}
										on:svelte-copy={(event) => {
											ClickedCopy = true;
											copyValue = event.detail;
										}}
									>
										<Copy />
									</button>
									/join {map.nul}-{room}
								</td>
							{:else}
								<td />
							{/if}
							{#if map.va && va}
								<td data-column-name="va">
									<button
										class="btn btn-ghost btn-xs float-left"
										use:copy={`/join ${map.va}-${room}`}
										on:svelte-copy={(event) => {
											ClickedCopy = true;
											copyValue = event.detail;
										}}
									>
										<Copy />
									</button>
									/join {map.va}-{room}
								</td>
							{:else}
								<td />
							{/if}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

<style>
	td {
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
	}
</style>
