import portfolioItems from "./DataPortfolio";

function PortfolioItem({ title, link, imgUrl, description, stack }) {
  return (
    <div className="my-4 rounded-md w-80 md:my-0 md:shadow-2xl">
      <img
        src={imgUrl}
        alt=""
        className="object-cover w-full cursor-pointer h-36 md:h-48"
      />
      <div className="w-full p-4">
        <h3 className="mb-2 text-lg font-semibold md:text-xl md:mb-3">
          <a href={link}>{title}</a>
        </h3>
        <p className="mb-2 text-sm md:text-md md:mb-3">{description}</p>
        <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 rounded-md border-stone-500"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div id="portfolio" className="flex flex-row items-center justify-center py-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((project, index) => (
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
  );
}
