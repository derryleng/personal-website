function TimelineItem({ dateStart, dateEnd, title, description }) {
    return (
        <div>
            <ol className="relative flex flex-col border-l md-flex-row border-stone-200">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white" />
                    <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
                        <span className="inline-block px-2 py-1 font-semibold text-white rounded-md bg-stone-900">
                            {dateStart} - {dateEnd}
                        </span>
                        <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                            {title}
                        </h3>
                        <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:white">
                            {dateEnd - dateStart} years
                        </div>
                    </p>
                    <p className="my-2 text-base font-normal text-stone-500 dark:text-white">
                        {description}
                    </p>
                </li>
            </ol>
        </div>
    )
}

export default TimelineItem;
