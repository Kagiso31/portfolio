import portrait from "../assets/portrait.jpg";
import { github, linkedin } from "../data/assets";

const Hero = () => {
  return (
    <section id="home" className="bg-primary">
      <div className="flex justify-center items-center | sm:h-[800px]">
        <div className="flex flex-col-reverse items-center gap-10 p-10 container mx-auto mt-[4.25rem] | sm:p-5 sm:mt-0 | md:flex-row md:gap-8 | lg:px-0 lg:max-w-4xl">
          {/* hero text */}
          <div className="flex flex-col gap-4 text-center | sm:flex-1 | md:text-left | lg:gap-8">
            <h1 className="font-bold text-4xl text-secondary | lg:text-5xl">
              <div className="font-medium text-2xl | lg:text-3xl">
                Kagiso Mokou,
              </div>
              Front-End Developer
            </h1>
            <p className="text-lg">
              Based in South Africa, I'm a front-end developer passionate about
              building web applications.
            </p>
            <div className="flex justify-center gap-1 | md:justify-start">
              <a href="https://www.github.com/Kagiso31" target="_blank">
                <div className="h-8 w-8 transition duration-300 ease-in-out hover:scale-125">
                  {github}
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/kagiso-mokou-50824a264"
                target="_blank"
              >
                <div className="h-8 w-8 transition duration-300 ease-in-out hover:scale-125">
                  {linkedin}
                </div>
              </a>
            </div>
          </div>
          {/* hero image */}
          <div
            style={{ backgroundImage: `url(${portrait})` }}
            className={`h-64 w-64 border-black border-4 rounded-full bg-no-repeat bg-cover bg-center | lg:h-80 lg:w-80`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
