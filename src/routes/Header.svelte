<script>
	import DropdownTheme from '$lib/components/theme-select.svelte';
</script>

<header class="bg-base-300">
	<div class="corner" />

	<div class="navbar bg-base-300 rounded-box">
		<div class="flex-1 px-2 lg:flex-none">
			<a href="https://github.com/gneiru">
				<img src="https://avatars.githubusercontent.com/u/105811202" alt="gneiru" />
			</a>
			<div class="normal-case text-xl font-mono p-2"> Neiru </div>
		</div>
		<div class="flex justify-end flex-1 px-2">
			<div class="flex items-stretch">
				<a href="/about" class="btn btn-ghost rounded-btn">About</a>
				<div class="dropdown dropdown-end">
					<label for="" tabindex="-1" class="btn btn-ghost rounded-btn">AQW Tools</label>
					<ul
						tabindex="-1"
						class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
					>
						<li><a href="/aqw/raid/calc">Raid Exp Calculator</a></li>
						<li><a href="/aqw/raid/maps">Raid Maps</a></li>
					</ul>
				</div>

				<DropdownTheme />
			</div>
		</div>
	</div>
</header>

<style>
	img {
		width: 1.5em;
		height: 1.5em;
		object-fit: contain;
		float: right;
	}
	a {
		text-decoration: none;
	}
</style>
