import React from "react";

function PortfolioItem({ title, link, imgUrl, description, stack}) {
    return (
        <div className="overflow-hidden border-2 rounded-md border-stone-500">
            <img
                src={imgUrl}
                alt=""
                className="object-cover w-full cursor-pointer h-36 md:h-48"
            />
            <div className="w-full p-4">
                <h3 className="mb-2 text-lg font-semibold md:text-xl md:mb-3"><a href={link}>{title}</a></h3>
                <p className="mb-2 text-sm md:text-md md:mb-3">{description}</p>
                <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 rounded-md border-stone-500">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem;
