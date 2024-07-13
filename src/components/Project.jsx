import { SwiperSlide, Swiper } from "swiper/react";
import project1 from "../assets/images/project1.svg";
import project2 from "../assets/images/project2.svg";
import project3 from "../assets/images/project3.svg";
import project4 from "../assets/images/project4.svg";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const PROJECTS = [
    {
      img: project1,
      name: "Modern UI/UX IA Page",
      github_link: "https://github.com/gajonedev/brainwave_react_copy",
      live_link: "https://brainwave-react-copy.vercel.app",
      languages: "ReactJS - TailwindCSS",
    },
    {
      img: project2,
      name: "Custom Nike Landing Page",
      github_link: "https://github.com/gajonedev/nike_page-tailwind_learning",
      live_link: "https://nike-page-tailwind-learning.vercel.app",
      languages: "ReactJS - TailwindCSS",
    },
    {
      img: project3,
      name: "Portfolio Design",
      github_link: "https://github.com/gajonedev/portfolio_copy",
      live_link: "https://portfolio-copy-first.vercel.app",
      languages: "HTML - CSS - JavaScript",
    },
    {
      img: project4,
      name: "My Portfolio",
      github_link: "https://github.com/gajonedev/my_portfolio",
      live_link: "https://gajonedev_porfolio.vercel.app",
      languages: "ReactJS - TailwindCSS",
    },
  ];

  return (
    <section id="projects" className="p-10">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-rose-600">Realisations</span>
        </h3>
        <p className="mt-4 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 px-auto items-center relative gap-10">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {PROJECTS.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="h-fit w-full p-4 bg-slate-300 rounded-xl">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="rounded-lg"
                  />
                  <h3 className="text-slate-700 text-xl mt-4">{project.name}</h3>
                  <div className="text-[15px] text-slate-500 mb-3">{project.languages}</div>
                  <div className="flex gap-3 items-center">
                    <a
                      href={project.github_link}
                      className="font-bold text-rose-600 bg-slate-800 px-2 py-1 inline-block rounded-md" target="_blank"
                    >
                      Github
                    </a>
                    <a
                      href={project.live_link}
                      className="font-bold text-rose-600" target="_blank"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} className="h-96" alt="project_person" />
        </div>
      </div>
    </section>
  );
};

export default Project;
