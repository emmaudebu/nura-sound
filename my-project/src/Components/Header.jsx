import React from "react";
import logo from "../assets/images/svg.png";

const Header = () => {
  return (
    <>
      <div className=" w-[100%] h-[100vh] bg-hero-bg text-white main-padding bg-contain md:bg-cover   bg-no-repeat ">
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
          <span className=" cursor-pointer">Cart(0)</span>
        </header>
      </div>
    </>
  );
};

export default Header;
