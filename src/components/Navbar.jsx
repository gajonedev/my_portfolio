import { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  });

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/20 backdrop-blur-md" : "bg-transparent md:bg-white"
        }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl font-bold">
            Ga<span className="text-rose-500">Jo</span>Ne
          </h4>
        </div>
        <div
          className={`${sticky ? "md:bg-white/60 bg-white" : "bg-white"
            } hidden md:block px-7 py-2 font-medium bg-white rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-3 lg:px-6 hover:text-rose-500 transition">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => { !open ? setOpen(true) : setOpen(false) }}
          className={`z-[999] text-3xl md:hidden m-5 cursor-pointer hover:text-rose-500 ${open ? "text-slate-100" : ""} transition`}
        >
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </div>
        <div
          className={`md:hidden absolute  md:w-1/2 w-2/3 h-screen px-7 py-2 font-medium backdrop-blur-lg bg-slate-500/100 top-0 ${open ? "right-0" : "right-[-100%]"} duration-300 flex items-center justify-center`}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-[3rem] py-2 text-xl font-bold text-slate-200">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-rose-500 transition" onClick={() => setOpen(false)}>
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
