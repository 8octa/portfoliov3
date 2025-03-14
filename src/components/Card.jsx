import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLinkedin } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { IoMailSharp } from "react-icons/io5";

const Card = ({ title, description, id, img }) => {
  return (
    <div className="max-w-sm w-full h-[10rem] rounded overflow-hidden shadow-lg bg-black border-1 border-zinc-400 p-5 m-5 relative">
      <div className="px-6 py-4 relative z-10">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-zinc-300 text-base">{description}</p>
        {id === 3 && (
          <div className="flex gap-5 mt-5 text-2xl">
            <FaHtml5 className="text-orange-500" />
            <FaCss3Alt className="text-blue-500" />
            <FaJs className="text-yellow-500" />
            <RiTailwindCssFill className="text-blue-400" />
            <FaReact className="text-blue-700" />
            <SiTypescript className="text-blue-900" />
            <SiNextdotjs />
          </div>
        )}
        {id === 6 && (
          <div className="flex flex-col gap-1">
            <a
              className="flex gap-1 items-center hover:text-blue-500 transition-all duration-200"
              href="mailto:tataruoctavian5@gmail.com"
            >
              <IoMailSharp />
              E-mail
            </a>
            <a
              className="flex gap-1 items-center hover:text-blue-500 transition-all duration-200"
              href="https://www.linkedin.com/in/tataru-octavian/"
              target="_blank"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        )}
      </div>
      {img && (
        <img
          className="absolute top-0 left-0 object-cover w-full h-full z-0"
          src={img}
          alt="Card Image"
        />
      )}
    </div>
  );
};

export default Card;
