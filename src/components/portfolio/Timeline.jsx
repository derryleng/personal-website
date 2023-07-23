import timelineItems from "./DataTimeline";

function TimelineItem({
  dateStart,
  dateEnd,
  title,
  organisation,
  role,
  location,
  description,
  additionalList,
}) {
  return (
    <>
      <ol className="relative flex flex-col border-l md-flex-row border-stone-200">
        <li className="ml-4 mb-14">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white" />
          <div className="flex flex-row flex-wrap items-center justify-start gap-4 mb-1 text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white rounded-md shadow-2xl bg-stone-900">
              {dateStart} - {dateEnd}
            </span>
            <p className="text-xl font-semibold transition-colors duration-500 text-stone-900 dark:text-white">
              {title}
            </p>
            <div className="mt-1 text-sm font-normal leading-none text-stone-400 dark:white">
              {dateEnd - dateStart} years
            </div>
          </div>
          <div className="p-6 rounded-md md:shadow-2xl">
            <p className="text-lg font-semibold transition-colors duration-500 text-stone-900 dark:text-white">
              {organisation}
            </p>
            <p className="text-lg font-normal">{role}</p>
            <p className="mb-2 font-light text-md">{location}</p>
            <p className="text-base font-normal transition-colors duration-500 text-stone-700 dark:text-slate-300">
              {description}
            </p>
            {additionalList && additionalList.length > 0 && (
              <ul className="pl-6 mt-2 text-base font-normal list-disc text-stone-700 dark:text-slate-300">
                {additionalList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      </ol>
    </>
  );
}

export default function Timeline() {
  return (
    <div
      id="timeline"
      className="flex flex-col justify-center px-2 my-20 md:flex-row md:px-0"
    >
      <div className="w-full md:w-7/12">
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            dateStart={item.dateStart}
            dateEnd={item.dateEnd}
            title={item.title}
            organisation={item.organisation}
            role={item.role}
            location={item.location}
            description={item.description}
            additionalList={item.additionalList}
          />
        ))}
      </div>
    </div>
  );
}
