<script>
  import Footer from "./lib/Footer.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Portfolio from "./lib/Portfolio.svelte";
  import Summary from "./lib/Summary.svelte";
  import Timeline from "./lib/Timeline.svelte";
</script>

<main>
  <Navbar />
  <Summary />
  <Portfolio />
  <Timeline />
  <Footer />
</main>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
