import logo from "../assets/images/svg.png";
import menu from "../assets/images/icons/menu.svg";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <div className=" Header  ">
        <header className=" flex items-center justify-between py-5">
          <nav className=" flex items-center gap-5 ">
            <img src={logo} />
            <ul className=" hidden items-center gap-8 md:flex  ">
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
        <div className=" text-center flex flex-col mt-[50%] md:mt-[35%] gap-4 items-center">
          <p className="  text-sm md:text-3xl">OUR BIGGEST SALE NOW LIVE</p>
          <p className=" text-xl   md:text-6xl font-bold">
            BLACK FRIDAY STARTS NOW !
          </p>
          <Button text={"SHOP SALES NOW"} />
        </div>
      </div>
    </>
  );
};

export default Header;
