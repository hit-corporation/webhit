<script lang="ts">
  	import Header from '@/components/layouts/Header.svelte';
	import Footer from '@/components/layouts/Footer.svelte';
	import '@/app.css';
	let { children } = $props();
</script>

<Header />
{@render children?.()}
<Footer />