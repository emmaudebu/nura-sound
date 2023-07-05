import logo from "../assets/images/svg.png";
import menu from "../assets/images/icons/menu.svg";
import { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [Menu, setMenu] = useState(false);

  function ShowMenu(params) {
    setMenu(!Menu);
  }

  return (
    <>
      <div
        className=" w-[100%] h-[100%] md:w-[100%] md:h-[100%] bg-Herobg text-white bg-cover px-3  md:px-[64px]  md:bg-cover   bg-no-repeat overflow-x-hidden;
 "
      >
        <header className=" flex items-center justify-between py-[5px]">
          <nav className=" flex items-center gap-5 relative ">
            <img src={logo} />
            <ul
              className={`  items-center gap-8 md:flex   ${
                Menu
                  ? "block absolute top-10 z-10 md:hidden bg-[#310606bd] text-white w-64 p-5 text-lg rounded-md transition-all "
                  : "hidden"
              } `}
            >
              <li className={`${Menu ? "pb-3 cursor-pointer " : ""}`}>
                <a href="#Product">Products</a>
              </li>
              <li className={`${Menu ? "pb-3 cursor-pointer " : ""}`}>
                <a href="#Subscription">Subscription</a>
              </li>
              <li className={`${Menu ? "pb-3 cursor-pointer " : ""}`}>
                <a href="#CTA">Why Nura?</a>
              </li>
              <li className={`${Menu ? "pb-3 cursor-pointer " : ""}`}>
                <a href="#Support">Support</a>
              </li>
            </ul>
          </nav>
          <div className=" flex items-center gap-4 text-white">
            <span className=" cursor-pointer " title="Cart is Empty">
              Cart(0)
            </span>
            <span className=" cursor-pointer block md:hidden ">
              <img
                src={menu}
                alt=""
                className={`text-lg text-[#fff] ${Menu ? "rotate-45" : ""}`}
                onClick={ShowMenu}
              />
            </span>
          </div>
        </header>
        <div className=" text-center flex flex-col mt-[20%] md:mt-[35%] gap-4 items-center">
          <p className="  text-sm md:text-3xl text-[#fff]">
            OUR BIGGEST SALE NOW LIVE
          </p>
          <p className=" text-3xl text-[#fff]  md:text-8xl font-bold capitalize mb-5">
            black friday start now !
          </p>
          <Button
            text={"SHOP SALES NOW"}
            color={
              "bg-white rounded-full text-black w-[200px] p-[10px] mb-[50px] animate-bounce cursor-pointer "
            }
          />
        </div>
      </div>
    </>
  );
};

export default Header;
