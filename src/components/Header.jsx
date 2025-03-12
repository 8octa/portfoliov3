import Button from "./Button";
import { MdBusinessCenter, MdDensitySmall } from "react-icons/md";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-from-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center">
        <div>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <MdBusinessCenter className="text-4xl" />
          </a>
        </div>
        <div>
          <MdDensitySmall className="text-4xl" />
        </div>
        <div>
          <Button text="Contact Me!" />
        </div>
      </div>
    </header>
  );
};

export default Header;
