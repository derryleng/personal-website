import { useEffect } from "react";
import myFace from "/assets/me_2021_365_365.jpg";

export default function Header() {
  useEffect(() => {
    const handleAnchorClick = (event) => {
      event.preventDefault();

      const hash = event.target.hash;
      const targetElement = document.querySelector(hash);

      if (targetElement) {
        const targetOffsetTop = targetElement.getBoundingClientRect().top;
        const scrollOffset = targetOffsetTop - 50;
        window.scrollBy({ top: scrollOffset, left: 0, behavior: 'smooth' });
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      // Clean up event listener on component unmount
      anchorLinks.forEach((link) => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <header id="summary" className="flex flex-col items-center justify-center px-2 py-10 text-center md:px-0">
      <img
        className="w-20 h-20 rounded-full md:w-40 md:h-40 ring-2 ring-slate-200 border-stone-500 border-3"
        src={myFace}
        alt="Derry"
      />
      <h1 className="mb-2 text-4xl font-bold md:text-7xl md:mb-4">
        Derry Leng
      </h1>
      <p className="mb-3 font-lg text-md md:text-xl">
        Data Analyst and Web Developer
      </p>
      <p className="max-w-xl text-sm text-justify">
        I am a data analyst with experience applying R, Python, SQL on
        data-driven projects within consulting firms, as well as a web developer
        with experience building web applications using technologies such as R
        Shiny, Django, Node.js and React, working solo and in small agile teams.
        I am fascinated by learning new things in the world of Finance and Tech.
      </p>
    </header>
  );
}
