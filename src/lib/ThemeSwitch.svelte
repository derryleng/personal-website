<script>
  import moon from "/moon-svgrepo-com.svg";
  import sun from "/sun-svgrepo-com.svg";

  let isDarkMode = localStorage.getItem("color-theme") === "dark";

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem("color-theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  }
</script>

<button
  class="w-6 h-6 transition-colors duration-1000 ease-in-out rounded-full bg-violet-400 dark:bg-yellow-400"
  on:click={toggleDarkMode}
>
  {#if isDarkMode}
    <img src={sun} alt="Switch to light mode" />
  {:else}
    <img src={moon} alt="Switch to dark mode" />
  {/if}
</button>
