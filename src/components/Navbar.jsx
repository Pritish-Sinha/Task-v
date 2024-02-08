import { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1200px] max-w-[500px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={logo} className="h-[78px] w-[90px]" />

        <div className="hidden md:flex items-center ">
          <ul className="flex gap-6">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">Support</li>
          <li className="p-4 hover:bg-gray-100">Contact</li>
          <div className="flex flex-col my-4 gap-4">
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;