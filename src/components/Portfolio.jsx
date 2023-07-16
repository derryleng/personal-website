import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
    return (
        <div className="flex flex-row items-center justify-center py-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {portfolio.map((project, index) => (
                    <PortfolioItem
                        key={index}
                        title={project.title}
                        link={project.link}
                        imgUrl={project.imgUrl}
                        description={project.description}
                        stack={project.stack}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;
