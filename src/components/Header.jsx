import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuData from "../data/menuData";

const Header = () => {
  // Navbar toggle
  const [isNavbarOpen, setisNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setisNavbarOpen(!isNavbarOpen);
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

  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    if (path.startsWith("/")) {
      navigate(path); // Navigate to internal routes like /signin
    } else {
      const targetSection = document.querySelector(path);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setisNavbarOpen(false); // Close the navbar on menu click
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
                    src="/images/logo/logo.png"
                    alt="Image Description"
                    className="w-10 h-auto"
                  />
                  <div>
                    <h1 className="mt-1 text-2xl font-bold text-primary">
                      BarokahAI
                    </h1>
                  </div>
                </div>
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
                      isNavbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      isNavbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      isNavbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    isNavbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((item, index) => (
                      <li key={index} className="group relative">
                        <a
                          onClick={() => handleMenuClick(item.path)}
                          className={`cursor-pointer flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            currentSection === item.path.substring(1)
                              ? "text-primary dark:text-blue-500"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          }`}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                    <li className="group relative lg:hidden">
                      <Link
                        to="/signin"
                        className="flex py-2 text-base text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Sign In
                      </Link>
                    </li>
                    <li className="group relative lg:hidden">
                      <Link
                        to="/signup"
                        className="flex py-2 text-base text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hidden items-center justify-end pr-16 lg:flex lg:pr-0">
                <Link
                  to="/signin"
                  className="px-4 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover rounded-lg bg-primary px-4 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
