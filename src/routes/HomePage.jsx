import TemplatePage from "./TemplatePage";
// import Contact from "../components/portfolio/Contact";
import { useEffect } from "react";
import Header from "../components/portfolio/Header";
import Portfolio from "../components/portfolio/Portfolio";
import Timeline from "../components/portfolio/Timeline";

export default function Root() {
  useEffect(() => {
    const handleAnchorClick = (event) => {
      event.preventDefault();

      const hash = event.target.hash;
      const targetElement = document.querySelector(hash);

      if (targetElement) {
        const targetOffsetTop = targetElement.getBoundingClientRect().top;
        const scrollOffset = targetOffsetTop - 50;
        window.scrollBy({ top: scrollOffset, left: 0, behavior: "smooth" });
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });

    return () => {
      // Clean up event listener on component unmount
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  const contents = (
    <>
      <Header />
      <Portfolio />
      <Timeline />
      {/* <Contact /> */}
    </>
  );

  return <TemplatePage contents={contents} />;
}
