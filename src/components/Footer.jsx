const Footer = () => {
  return (
    <footer className="py-10 px-5 bg-slate-900">
      <div className="flex justify-between items-center text-white container mx-auto">
        <h2 className="font-bold text-xl">Kagiso.dev</h2>

        <nav className="font-medium text-md hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#techstack">Tech Stack</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
