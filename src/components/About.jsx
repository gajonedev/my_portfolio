import aboutImg from "../assets/images/about.png";

const About = () => {
  return (
    <section id="about" className="py-5 md:py-2">
      <div className="text-center pt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-rose-500">Me</span>
        </h3>
        <p className="my-3 text-lg text-slate-500">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="my-3 pl-6">
              <p className="text-justify leading-7 mx-auto text-slate-500 indent-8">
                I am Néhémie Gandonou, modern web developer. A competent freelancer, I am able to transform your ideas, your models or your businesses into a modern, reliable, fast and referenced website, by combining my mastery and the efficiency of modern development technologies adapted to your needs. Let’s discuss your needs <a>now</a>!
              </p>
              <br />
              <a href="#skills">
                <button className="btn-primary">My Skills</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt="illustration"
                className="w-full object-cover bg-rose-500 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
