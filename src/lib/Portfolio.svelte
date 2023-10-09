<script>
  import portfolioItems from "./PortfolioData";
</script>

<div id="portfolio" class="flex flex-row items-center justify-center py-5">
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {#each portfolioItems as project}
      <div class="my-4 rounded-md w-80 md:my-0 md:shadow-2xl">
        <img
          src={project.imgUrl}
          alt={project.title}
          class="object-cover w-full cursor-pointer h-36 md:h-48"
        />
        <div class="w-full p-4">
          <h3 class="mb-2 text-lg font-semibold md:text-xl md:mb-3">
            <a href={project.link}>{project.title}</a>
          </h3>
          <p class="mb-2 text-sm md:text-md md:mb-3">{project.description}</p>
          <p
            class="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm"
          >
            {#each project.stack as item}
              <span
                class="inline-block px-2 py-1 font-semibold border-2 rounded-md border-stone-500"
              >
                {item}
              </span>
            {/each}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
