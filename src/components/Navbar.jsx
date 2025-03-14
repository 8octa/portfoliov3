import { navItems } from "../index";

const Navbar = ({ open, setOpen }) => {
  return (
    <nav
      className={`flex flex-col justify-center items-center p-10
      text-2xl font-black absolute top-15 right-5 border border-slate-500
      bg-zinc-100 text-black transition-all duration-300 select-none z-50 
      ${open ? "translate-x-0 opacity-90" : "translate-x-full opacity-0"}`}
    >
      {navItems.map(({ label, link }) => (
        <div key={label} className="flex flex-col justify-center items-center">
          <a
            className="p-5 hover:underline transition-all duration-300"
            onClick={() => {
              window.scrollTo(0, 0);
              setOpen(!open);
            }}
          >
            Home
          </a>
          <a
            href={link}
            className="p-5 hover:underline transition-all duration-300"
            onClick={() => setOpen(!open)}
          >
            {label}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
