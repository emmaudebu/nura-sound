import React from "react";
import headPhone from "../assets/images/headphone.png";
import tw5ty from "../assets/images/25.png";
import Button from "./Button";

const Features = () => {
  return (
    <div className=" main-padding  bg-[#171717] pt-[3rem] pb-[10rem] ">
      <div className="flex justify-between items-center py-10">
        <p className=" text-white text-lg  md:text-[3rem]">
          Featured discounts
        </p>
        <p className=" flex items-center text-sm text-green-600">
          View all discounts <i class="bx bx-right-arrow-alt "> </i>
        </p>
      </div>
      <section className=" flex flex-col md:flex-row items-center gap-5">
        <div className="featureBox ">
          <img src={headPhone} alt="" className=" " />
          <img
            src={tw5ty}
            alt=""
            className=" absolute top-0 left-0 mt-5 ml-5 animate-pulse"
          />
          <p className=" text-[2rem] font-bold py-4">Nuraphone</p>
          <p className="  mb-5">
            <span className=" text-gray-400 line-through">$399</span>{" "}
            <span className=" font-bold text-[1rem] ">$299.25</span>
          </p>
          <Button
            className=""
            text={"SHOW NOW"}
            color={
              "bg-[#3333f5] text-white w-[300rem] p-[0.47rem] text-xs rounded-full "
            }
          />
        </div>
        <div className="featureBox ">
          <img src={headPhone} alt="" className=" " />
          <img
            src={tw5ty}
            alt=""
            className=" absolute top-0 left-0 mt-5 ml-5 animate-pulse"
          />
          <p className=" text-[2rem] font-bold py-4">Nuraphone</p>
          <p className="  mb-5">
            <span className=" text-gray-400 line-through">$399</span>{" "}
            <span className=" font-bold text-[1rem] ">$299.25</span>
          </p>
          <Button
            className=""
            text={"SHOW NOW"}
            color={
              "bg-[#3333f5] text-white w-[300rem] p-[0.47rem] text-xs rounded-full "
            }
          />
        </div>
        <div className="featureBox ">
          <img src={headPhone} alt="" className=" " />
          <img
            src={tw5ty}
            alt=""
            className=" absolute top-0 left-0 mt-5 ml-5 animate-pulse"
          />
          <p className=" text-[2rem] font-bold py-4">Nuraphone</p>
          <p className="  mb-5">
            <span className=" text-gray-400 line-through">$399</span>{" "}
            <span className=" font-bold text-[1rem] ">$299.25</span>
          </p>
          <Button
            className=""
            text={"SHOW NOW"}
            color={
              "bg-[#3333f5] text-white w-[300rem] p-[0.47rem] text-xs rounded-full "
            }
          />
        </div>
        <div className="featureBox ">
          <img src={headPhone} alt="" className=" " />
          <img
            src={tw5ty}
            alt=""
            className=" absolute top-0 left-0 mt-5 ml-5 animate-pulse"
          />
          <p className=" text-[2rem] font-bold py-4">Nuraphone</p>
          <p className="  mb-5">
            <span className=" text-gray-400 line-through">$399</span>{" "}
            <span className=" font-bold text-[1rem] ">$299.25</span>
          </p>
          <Button
            className=""
            text={"SHOW NOW"}
            color={
              "bg-[#3333f5] text-white w-[300rem] p-[0.47rem] text-xs rounded-full "
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Features;
