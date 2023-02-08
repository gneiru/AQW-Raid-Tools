<script>
	let title = "AQW"
</script>
<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Tools made for AQW and AQW Discord Related." />
</svelte:head>
<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-sm">
			<p class="py-6">
				AdventureQuest Worlds is a browser-based massively multiplayer online role-playing game
				released by Artix Entertainment in 2008
			</p>
			<button class="btn btn-primary" on:click={() => window.location = '/aqw/raid/maps'}>Raid Maps</button>
			<button class="btn btn-secondary" on:click={() => window.location = '/aqw/raid/calc'}>Raid Exp Calculator</button>
		</div>
        
	</div>
</div>
