import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [theme, setTheme] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 text-black transition-colors duration-500 bg-white font-semilight dark:text-stone-200 dark:bg-slate-800 backdrop-filter backdrop-blur-md bg-opacity-10 dark:bg-opacity-30">
      <div
        className={classNames(
          "flex flex-row px-5 py-1 md:py-2",
          isScrolled
            ? "border-b dark:border-slate-200/10 border-slate-900/10"
            : "",
        )}
      >
        <div className="flex items-center space-x-6">
          {isHomePage && (
            <>
              <a href="#summary" className="hover:underline underline-offset-2 decoration-1">Summary</a>
              <a href="#portfolio" className="hover:underline underline-offset-2 decoration-1">Portfolio</a>
              <a href="#timeline" className="hover:underline underline-offset-2 decoration-1">Timeline</a>
              <a href="#contact" className="hover:underline underline-offset-2 decoration-1">Contact</a>
            </>
          )}
        </div>
        <div className="flex items-center ml-auto">
          <button
            type="button"
            onClick={handleThemeSwitch}
            className="w-6 h-6 rounded-full bg-violet-900 dark:bg-yellow-400"
          >
            {theme === "dark" ? sun : moon}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
