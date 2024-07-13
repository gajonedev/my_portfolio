import hero from "../assets/images/hero.png";

const Hero = () => {
  const SOCIAL_MEDIA = [
    {
      logo: "logo-instagram",
      lien: "https://instagram.com/gajonedev",
    },
    {
      logo: "logo-facebook",
      lien: "https://facebook.com/gajonedev",
    },
    {
      logo: "logo-linkedin",
      lien: "https://linkedin.com/gajonedev",
    },
    {
      logo: "logo-twitter",
      lien: "https://x.com/gajonedev",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex pb-5 pt-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt="hero_image"
          className="md:w-11/12 h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 font-bold">
            <span className="text-rose-500 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My name is <span>Gajone</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-slate-500">
            Web Developer
          </h4>

          <a href="mailto:gajonedev@gmail.com">
            <button className="btn-primary mt-8 max-md:mx-auto">
              Contact Me
            </button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {SOCIAL_MEDIA?.map((media, index) => (
              <div
                key={index}
                className=" text-slate-500 hover:text-slate-900 cursor-pointer transition"
              >
                <a href={media.lien} target="_blank">
                  <ion-icon name={media.logo}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
