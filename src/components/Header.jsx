import Button from "./Button";
import Navbar from "./Navbar";
import { MdBusinessCenter, MdDensitySmall, MdClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-black border-b border-zinc-900">
      <div className="w-full mx-auto px-5 flex justify-between items-center ">
        <div>
          <a href="#hero">
            <MdBusinessCenter className="text-3xl text-zinc-100 hover:text-zinc-400 transition-all duration-400 active:scale-60" />
          </a>
        </div>
        <div>
          {!open ? (
            <MdDensitySmall
              className="text-zinc-100 hover:text-zinc-400 transition-all duration-400 text-3xl cursor-pointer active:scale-60 relative"
              onClick={handleOpen}
            />
          ) : (
            <MdClose
              className="text-zinc-100 hover:text-zinc-400 transition-all duration-400 text-4xl cursor-pointer active:scale-60 relative"
              onClick={handleOpen}
            />
          )}

          <Navbar open={open} />
        </div>
      </div>
    </header>
  );
};

export default Header;
