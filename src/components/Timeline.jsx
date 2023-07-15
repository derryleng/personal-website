import timeline from "../data/timeline";
import SectionTitle from "./SectionTitle";
import TimelineItem from "./TimelineItem";

function Timeline() {
    return (
        <div className="flex flex-col justify-center px-2 my-20 md:flex-row md:px-0">
            <div className="w-full md:w-7/12">
            <SectionTitle>Timeline</SectionTitle>
                {timeline.map(item => (
                    <TimelineItem
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
    )
}

export default Timeline;
