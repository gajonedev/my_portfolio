import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const CONTACT_INFO = [
    {
      logo: "mail",
      link: "mailto:gajonedev@gmail.com",
      text: "gajonedev@gmail.com",
    },
    { logo: "logo-whatsapp", link: "tel:+22946897322", text: "+22946897322" },
    {
      logo: "location",
      link: "#",
      text: "Porto-Novo, Benin",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("my_portfolio", "portfolio_contact", form.current, {
        publicKey: "S04eYlEH8Onin6I8V",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert(
            "Your message has been successfully received. Please check your email box."
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("An error occurred, please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
        window.location.reload();
      });
  };

  return (
    <section id="contact" className="py-10 px-3">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-rose-500">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-slate-400 p-6 rounded-lg mx-auto">
          <form
            ref={form}
            className="flex flex-col items flex-1 gap-5"
            onSubmit={sendEmail}
          >
            <input
              className="input hover:bg-slate-300 transition border-[3px] border-transparent focus:border-rose-600"
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
            />
            <input
              className="input hover:bg-slate-300 transition border-[3px] border-transparent focus:border-rose-600"
              type="email"
              placeholder="Your Email Adress"
              name="user_email"
              required
            />
            <textarea
              className="textarea hover:bg-slate-300 transition border-[3px] border-transparent focus:border-rose-600 resize-none"
              placeholder="Your message"
              rows={10}
              name="message"
              required
            ></textarea>
            <button type="submit" className="btn-primary w-fit">
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {CONTACT_INFO.map((contact, index) => (
              <a
                href={contact.link}
                target="_blank"
                className="flex gap-4 w-fit items-center group"
                key={index}
              >
                <div className="min-w-[3.5rem] text-2xl min-h-[3.5rem] flex items-center justify-center text-slate-100 bg-transparent border-[3px] border-slate-100 rounded-full group-hover:text-rose-600 group-hover:border-rose-600 transition">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-lg group-hover:text-rose-600 text-slate-100 transition">
                  {contact.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
