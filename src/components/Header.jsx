import Navbar from "./Navbar";
import { MdBusinessCenter, MdDensitySmall, MdClose } from "react-icons/md";
import { useState } from "react";
import { motion } from "motion/react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <header className="sticky top-0 w-full h-15 lg:h-20 flex items-center z-40 bg-black border-b border-zinc-900 animate-fade-down animate-once animate-duration-[1111ms] animate-delay-[1111ms]">
      <div className="w-full mx-auto px-5 flex justify-between items-center ">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, transition: { duration: 5 }, scale: 1 }}
        >
          <a onClick={() => setOpen(false)} href="#hero">
            <MdBusinessCenter className="text-3xl text-zinc-100 hover:text-zinc-400 transition-all duration-400 active:scale-60" />
          </a>
        </motion.div>
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

          <Navbar open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
