const Navbar = ({ open }) => {
  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
    },
    {
      label: "About",
      link: "#about",
    },
  ];

  return (
    <nav
      className={`flex flex-col justify-center items-center p-10
      text-2xl font-black absolute top-15 right-5 border border-slate-500
      bg-zinc-100 text-black transition-all duration-300 select-none
      ${open ? "translate-x-0 opacity-90" : "translate-x-full opacity-0"}`}
    >
      {navItems.map(({ label, link }) => (
        <div key={label} className="flex flex-col justify-center items-center">
          <a
            href={link}
            className="p-5 hover:underline transition-all duration-300"
          >
            {label}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
