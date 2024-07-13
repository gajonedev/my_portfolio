import hireMe from "../assets/images/hireMe.png";

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-rose-600">Me</span>
        </h3>
        <p className="mt-4 text-lg">You have any work ? Let's discuss!</p>
      </div>
      <div className="bg-slate-300 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-12 flex gap-6 lg:flex-row flex-col-reverse items-center text-slate-800">
        <div>
          <h2 className="text-2xl font-semibold">
            Let's discuss about your project
          </h2>
          <p className="max-w-lg text-md text-slate-600 mt-4 text-slate-70 leading-6 lg:text-left text-justify">
            A work ? contract ? Contact me now and I will analyze your needs,
            make a development plan, make a model, transform your needs into a
            modern site, adapted to any type of machine, indexed by search
            engines, all this taking into account your visual requirements.
          </p>
          <a href="mailto:gajonedev@gmail.com">
            <button className="btn-primary mt-5">Say Hello</button>
          </a>
        </div>
        <img
          src={hireMe}
          alt="hello"
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
