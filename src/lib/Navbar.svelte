<script>
  import ThemeSwitch from "./ThemeSwitch.svelte";

  // Add bottom border when scrolled

  let scrolled = false;

  window.addEventListener("scroll", () => {
    scrolled = window.scrollY > 10;
  });

  $: scrolledClasses = scrolled
    ? "border-b dark:border-slate-200/10 border-slate-900/10"
    : "";

  // Adjust anchor link y position

  function handleAnchorClick(event) {
    event.preventDefault();

    const hash = event.target.hash;
    const targetElement = document.querySelector(hash);

    if (targetElement) {
      const targetOffsetTop = targetElement.getBoundingClientRect().top;
      const scrollOffset = targetOffsetTop - 50;
      window.scrollBy({ top: scrollOffset, left: 0, behavior: "smooth" });
    }
  }

  // Navigation Menu

  // let isMobileNavOpen = false;

  // // Function to toggle the mobile navigation menu
  // function toggleMobileNav() {
  //   isMobileNavOpen = !isMobileNavOpen;
  // }

  // // Function to close the mobile navigation menu when a link is clicked
  // function closeMobileNav() {
  //   isMobileNavOpen = false;
  // }

  // // Define a breakpoint for mobile screens (e.g., 768 pixels)
  // const mobileBreakpoint = 768;

  // // Function to handle window resize and close mobile nav if screen size increases
  // function handleResize() {
  //   if (window.innerWidth > mobileBreakpoint) {
  //     isMobileNavOpen = false;
  //   }
  // }

  // // Add a listener for window resize
  // window.addEventListener("resize", handleResize);

  let openMenu = false;
</script>

<nav class="flex flex-wrap items-center justify-between sticky top-0 z-50 px-5 py-2 md:py-1 text-white font-semilight backdrop-filter backdrop-blur-md bg-opacity-10 dark:bg-opacity-30 {scrolledClasses}">
  <div class="flex items-center flex-shrink-0 mr-6">
    <button on:click={() => openMenu = !openMenu} class="flex items-center px-3 py-2 border border-white rounded hover:text-slate-300 hover:border-slate-300 md:hidden">
      <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="block mt-1 md:hidden">
    <ThemeSwitch />
  </div>
  <div class:block={openMenu} class="flex-grow hidden w-full md:flex md:items-center">
    <div class="md:flex-grow">
      <a href="#summary" on:click={handleAnchorClick} class="block mt-4 mr-4 md:inline-block md:mt-0 hover:text-slate-300 hover:border-slate-300 hover:underline">
        Summary
      </a>
      <a href="#portfolio" on:click={handleAnchorClick} class="block mt-4 mr-4 md:inline-block md:mt-0 hover:text-slate-300 hover:border-slate-300 hover:underline">
        Portfolio
      </a>
      <a href="#timeline" on:click={handleAnchorClick} class="block mt-4 mr-4 md:inline-block md:mt-0 hover:text-slate-300 hover:border-slate-300 hover:underline">
        Timeline
      </a>
      <a href="#contact" class="block mt-4 mr-4 md:inline-block md:mt-0 hover:text-slate-300 hover:border-slate-300 hover:underline">
        Contact
      </a>
    </div>
    <div class="hidden mt-1 md:block">
      <ThemeSwitch />
    </div>
  </div>
</nav>
