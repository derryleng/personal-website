<script>
  import timelineItems from "./TimelineData";
</script>

<div
  id="timeline"
  class="flex flex-col justify-center px-2 my-20 md:flex-row md:px-0"
>
  <div class="w-full md:w-7/12">
    {#each timelineItems as event}
      <ol class="relative flex flex-col border-l md-flex-row border-stone-200">
        <li
          class="ml-4 transition-colors duration-1000 mb-14 text-stone-900 dark:text-white"
        >
          <div
            class="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white"
          />
          <div
            class="flex flex-row flex-wrap items-center justify-start gap-4 mb-1 text-xs md:text-sm"
          >
            <span
              class="inline-block px-2 py-1 font-semibold text-white rounded-md shadow-2xl bg-stone-900"
            >
              {event.dateStart} - {event.dateEnd}
            </span>
            <p class="text-xl font-semibold">
              {event.title}
            </p>
            <div
              class="mt-1 text-sm font-normal leading-none text-stone-400 dark:white"
            >
              {Number(event.dateEnd) - Number(event.dateStart)} years
            </div>
          </div>
          <div class="p-6 rounded-md md:shadow-2xl">
            <p class="text-lg font-semibold">
              {event.organisation}
            </p>
            <p class="text-lg font-normal">{event.role}</p>
            <p class="mb-2 font-light text-md">{event.location}</p>
            <p
              class="text-base font-normal transition-colors duration-1000 text-stone-700 dark:text-slate-300"
            >
              {event.description}
            </p>
            <ul
              class="pl-6 mt-2 text-base font-normal list-disc transition-colors duration-1000 text-stone-700 dark:text-slate-300"
            >
              {#each event.additionalList as thing}
                <li>{thing}</li>
              {/each}
            </ul>
          </div>
        </li>
      </ol>
    {/each}
  </div>
</div>
