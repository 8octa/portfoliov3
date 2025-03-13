import { IoMdArrowDropright } from "react-icons/io";

const Button = ({ text, className }) => {
  return (
    <button
      class={`align-middle select-none font-sans font-black text-center uppercase transition-all duration-300 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 px-10 bg-white text-black shadow-md shadow-gray-500 hover:shadow-md cursor-pointer hover:shadow-gray-300
      focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none || ${className}`}
    >
      <div className="flex gap-5 justify-center items-center">
        {text}
        <IoMdArrowDropright className="text-black inline-block" />
      </div>
    </button>
  );
};

export default Button;
