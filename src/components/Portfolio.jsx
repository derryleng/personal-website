import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
    return (
        <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {portfolio.map(project => (
                    <PortfolioItem
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
