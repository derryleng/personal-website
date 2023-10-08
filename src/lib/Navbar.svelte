<script>
  import ThemeSwitch from "./ThemeSwitch.svelte";

  let scrolled = false;

  window.addEventListener("scroll", () => {
    scrolled = window.scrollY > 10;
  });

  $: scrolledClasses = scrolled
    ? "border-b dark:border-slate-200/10 border-slate-900/10"
    : "";

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
</script>

<nav
  class="sticky top-0 z-50 font-semilight backdrop-filter backdrop-blur-md bg-opacity-10 dark:bg-opacity-30"
>
  <div class="flex flex-row px-5 py-1 md:py-2 {scrolledClasses}">
    <div class="flex items-center space-x-6">
      <a
        href="#summary"
        class="hover:underline underline-offset-2 decoration-1"
        on:click={handleAnchorClick}
      >
        Summary
      </a>
      <a
        href="#portfolio"
        class="hover:underline underline-offset-2 decoration-1"
        on:click={handleAnchorClick}
      >
        Portfolio
      </a>
      <a
        href="#timeline"
        class="hover:underline underline-offset-2 decoration-1"
        on:click={handleAnchorClick}
      >
        Timeline
      </a>
      <a
        href="#contact"
        class="hover:underline underline-offset-2 decoration-1"
        on:click={handleAnchorClick}
      >
        Contact
      </a>
    </div>
    <div class="flex items-center ml-auto">
      <ThemeSwitch />
    </div>
  </div>
</nav>
