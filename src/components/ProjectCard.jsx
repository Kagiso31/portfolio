import { github, link } from "../data/assets";

const ProjectCard = ({
  img,
  title,
  desc,
  techStack,
  previewLink,
  codeLink,
}) => {
  return (
    <div className="group grid rounded-lg shadow-sm bg-white | md:grid-cols-2 md:transition-all md:duration-300 md:hover:scale-105 md:hover:rounded-2xl md:hover:shadow-xl">
      {/* img */}
      <div>
        <img
          className=" w-full h-full rounded-s-lg | md:transition-all md:duration-300  md:h-[20.5rem] md:w-[56rem] md:group-hover:rounded-s-2xl | lg:object-cover lg:object-left-top"
          src={img}
          alt={title}
        />
      </div>

      {/* text */}
      <div className="flex flex-col items-center gap-5 p-5 | md:items-start md:justify-between">
        <h3 className="font-bold text-xl text-center | md:text-left">
          {title}
        </h3>

        <p className="text-center text-slate-500 | md:text-left">{desc}</p>

        {/* tech stack */}
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, index) => (
            <div
              key={index}
              title={tech.title}
              className="h-8 w-8 transition-all duration-300 hover:scale-110"
            >
              {tech.icon}
            </div>
          ))}
        </div>

        {/* view code | live preview */}
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <div className="h-6 w-6">{link}</div>
            <a
              href={previewLink}
              target="_blank"
              className="text-sm underline transition-colors duration-300 ease-in-out hover:text-accent | sm:text-md"
            >
              Live Preview
            </a>
          </div>
          <div className="flex items-center">
            <div className="h-6 w-6">{github}</div>
            <a
              href={codeLink}
              target="_blank"
              className="text-sm underline transition-colors duration-300 ease-in-out hover:text-accent | sm:text-md"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
