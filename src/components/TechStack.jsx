import { techStack } from "../data";

const TechStack = () => {
  return (
    <section id="techstack" className="py-20 bg-white | md:py-28 ">
      <div className="flex flex-col gap-20 container mx-auto | lg:max-w-4xl">
        <h2 className="font-bold text-3xl text-center">Tech Stack</h2>
        <div>
          <ul className="grid grid-cols-2 gap-y-8 | sm:grid-cols-4">
            {techStack.map((i) => (
              <li
                key={i.title}
                className="transition-all ease duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <div className="h-20 w-20 | sm:h-24 sm:w-24">{i.icon}</div>
                  <div className="font-medium text-lg">{i.title}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
