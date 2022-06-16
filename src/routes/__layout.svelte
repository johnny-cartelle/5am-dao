<script>
	import './../styles/reset.scss';
	import './../styles/fonts.scss';
	import './../styles/globals.scss';

	import { addTouchHelper } from '$lib/util/helpers';
	import { onMount } from 'svelte';
	import smoothscroll from 'smoothscroll-polyfill';

	onMount(async () => {
		smoothscroll.polyfill();
		addTouchHelper();
	});
</script>

<main>
	<slot />
</main>
