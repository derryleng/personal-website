import timeline from "../data/timeline";
import SectionTitle from "./SectionTitle";
import TimelineItem from "./TimelineItem";

function Timeline() {
    return (
        <div className="flex flex-col justify-center my-20 md:flex-row">
            <div className="w-full md:w-7/12">
            <SectionTitle>Timeline</SectionTitle>
                {timeline.map(item => (
                    <TimelineItem
                        dateStart={item.dateStart}
                        dateEnd={item.dateEnd}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;
