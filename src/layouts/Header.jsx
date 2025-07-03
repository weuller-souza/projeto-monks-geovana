import { useRef, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const Header = () => {
  const navRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  function onToggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="bg-[#2571B7] flex justify-between items-center w-full text-lg py-3 container-paddingx gap-[7%]">
      <div
        ref={navRef}
        className={`w-full flex flex-col md:flex-row bg-[#2571B7] justify-between items-center z-10 duration-500 md:static absolute rounded-b-4xl md:min-h-fit min-h-[25vh] left-0 ${
          menuOpen ? "top-0" : "top-[-100%]"
        }`}
      >
        <button
          onClick={onToggleMenu}
          className="text-4xl text-white cursor-pointer flex flex-row w-full items-center pt-6 md:pt-12 mx-auto md:hidden"
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
        <img
          className="w-32 cursor-pointer md:flex hidden"
          src="./image-logo.svg"
          alt="logo"
        />
        <ul className="flex md:flex-row flex-col md:items-center justify-between w-full md:w-auto gap-5 md:gap-[77px] text-white text-sm lg:text-[16px] py-5">
          <a className="cursor-pointer hover:text-gray-300">Lorem Ipsum</a>
          <a className="cursor-pointer hover:text-gray-300">Lorem Ipsum</a>
          <a className="cursor-pointer hover:text-gray-300">Lorem Ipsum</a>
        </ul>
      </div>
      <button
        onClick={onToggleMenu}
        className="text-3xl text-white cursor-pointer md:hidden"
      >
        {menuOpen ? <MdClose /> : <MdMenu />}
      </button>
      <a className="text-white text-sm lg:text-[16px] flex-nowrap text-center w-[10em] p-2 bg-[#002050]">
        Lorem Ipsum
      </a>
    </nav>
  );
};

export default Header;
