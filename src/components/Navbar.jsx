import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((isOpen) => !isOpen);

  const hamburgerMenuLine = `h-1 w-8 rounded-full bg-slate-900 transition ease transform duration-300`;
  return (
    <header className="fixed z-10 w-full p-5 bg-neutral shadow-md">
      <div className="flex justify-between items-center container mx-auto">
        <h2 className="font-bold text-xl">Kagiso.dev</h2>

        <nav className="font-medium text-md hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            <li>
              <a
                href="#home"
                className="font-medium transition-colors duration-300 ease-in-out hover:text-accent"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#techstack"
                className="font-medium transition-colors duration-300 ease-in-out hover:text-accent"
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="font-medium transition-colors duration-300 ease-in-out hover:text-accent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-medium transition-colors duration-300 ease-in-out hover:text-accent"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* hamburger & mobile menu */}
        <div className="md:hidden">
          <button
            className="flex flex-col gap-1 relative p-2 z-10"
            onClick={toggleMenu}
          >
            <div
              className={`${hamburgerMenuLine} ${
                isOpen && "rotate-45 translate-y-2"
              }`}
            ></div>
            <div
              className={`${hamburgerMenuLine} ${isOpen && "opacity-0"}`}
            ></div>
            <div
              className={`${hamburgerMenuLine} ${
                isOpen && "-rotate-45 -translate-y-2"
              }`}
            ></div>
          </button>
          <div
            className={`flex justify-center items-center h-screen w-full fixed top-0 ${
              isOpen ? "left-0" : "-left-full"
            } bg-primary transition-all ease duration-300`}
          >
            <nav>
              <ul
                role="list"
                className="flex flex-col items-center justify-center gap-10 font-medium text-xl"
              >
                <li>
                  <a
                    onClick={toggleMenu}
                    href="#home"
                    className="font-medium transition-colors duration-300 ease-in-out hover:text-accent"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={toggleMenu}
                    href="#techstack"
                    className="font-medium transition-colors duration-300 ease-in-out hover:text-accent"
                  >
                    Tech Stack
                  </a>
                </li>
                <li>
                  <a
                    onClick={toggleMenu}
                    href="#projects"
                    className="font-medium transition-colors duration-300 ease-in-out hover:text-accent"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
