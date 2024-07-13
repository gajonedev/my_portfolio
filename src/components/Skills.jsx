const Skills = () => {
  const SKILLS = [
    {
      logo: "bx bxl-react",
      color: "#50bbd7",
      name: "ReactJS",
    },
    {
      logo: "bx bxl-tailwind-css",
      color: "#15B8C5",
      name: "TailWindCSS",
    },
    {
      logo: "bx bxl-typescript",
      color: "#377CC8",
      name: "TypeScript",
    },
    {
      logo: "bx bxl-javascript",
      color: "#F7E025",
      name: "JavaScript",
    },
    {
      logo: "bx bxl-html5",
      color: "#E5532D",
      name: "HTML5",
    },
    {
      logo: "bx bxl-css3",
      color: "#2D53E5",
      name: "CSS3",
    },
    {
      logo: "bx bxl-git",
      name: "Git",
    },
    {
      logo: "bx bxl-github",
      name: "Github",
    },
  ];

  return (
    <section id="skills" className="my-[5rem] py-10 bg-slate-300 relative">
      <div className="mt-8 text-slate-800 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-rose-600">Skills</span>
        </h3>
        <p className="text-slate-600 text-lg mt-6">My knowledge</p>
        <div className="flex items-center justify-center mt-6 p-8 gap-10 flex-wrap group">
          {SKILLS?.map((skill, index) => (
            <div
              key={index}
              className={`py-6 w-[8.3rem] bg-slate-100 text-slate-700 rounded-md flex flex-col items-center justify-between`}
              title={skill.name}
            >
              <i className={`${skill.logo} text-[3rem] `}></i>
              <div className="text-sm mt-2 font-light text-slate-500">
                {`(${skill.name})`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
