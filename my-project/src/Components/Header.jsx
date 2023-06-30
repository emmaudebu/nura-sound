import React from "react";
import logo from "../assets/images/svg.png";
import menu from "../assets/images/icons/menu.svg";

const Header = () => {
  return (
    <>
      <div className="  w-[100vw] h-[50vh] md:w-[100%] md:h-[100vh] bg-hero-bg text-white bg-cover main-padding bg-contain md:bg-cover   bg-no-repeat ">
        <header className=" flex items-center justify-between py-5">
          <nav className=" flex items-center gap-5 ">
            <img src={logo} />
            <ul className=" hidden items-center gap-8 md:flex ">
              <li>Products</li>
              <li>Subscription</li>
              <li>Why Nura?</li>
              <li>Support</li>
            </ul>
          </nav>
          <div className=" flex items-center gap-4 text-white">
            <span className=" cursor-pointer">Cart(0)</span>
            <span className=" cursor-pointer block md:hidden ">
              <img src={menu} alt="" className="text-lg text-white" />
            </span>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
