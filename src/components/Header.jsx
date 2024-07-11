import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Track current section
  const [currentSection, setCurrentSection] = useState("");

  const handleScroll = () => {
    const sections = menuData.map((item) => document.querySelector(item.path));
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const current = sections.find(
      (section) =>
        section &&
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
    );

    if (current) {
      setCurrentSection(current.id);
    } else {
      setCurrentSection("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (path) => {
    const targetSection = document.querySelector(path);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    setNavbarOpen(false); // Close the navbar on menu click
  };

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                to="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <div className="flex gap-2">
                  <img
                    src="https://github.com/Barokah-AI/BackEnd/assets/94734096/0bf32c79-e402-4565-9868-8a21c84d8b33"
                    alt="Image Description"
                    className="w-10 h-auto"
                  />
                  <div>
                    <h1 className="mt-1 text-2xl font-bold text-primary">
                      BarokahAI
                    </h1>
                  </div>
                </div>
                {/* <div className="flex gap-2">
                  <img
                    src="https://github.com/Barokah-AI/BackEnd/assets/94734096/0bf32c79-e402-4565-9868-8a21c84d8b33"
                    alt="Image Description"
                    className="w-10 h-auto hidden dark:block"
                  />
                  <div>
                    <h1 className="mt-1 text-2xl font-bold text-primary hidden w-full dark:block">
                      BarokahAI
                    </h1>
                  </div>
                </div>
                <img
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                /> */}
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        <a
                          onClick={() => handleMenuClick(menuItem.path)}
                          className={`cursor-pointer flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            currentSection === menuItem.path.substring(1)
                              ? "text-primary dark:text-blue-500"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          }`}
                        >
                          {menuItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;