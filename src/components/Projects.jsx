import { projects } from "../data/index";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-2 bg-slate-200 | sm:px-4 | md:py-28"
    >
      <div className="flex flex-col gap-20 container mx-auto | lg:max-w-4xl">
        <h2 className="font-bold text-3xl text-center">Projects</h2>

        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
