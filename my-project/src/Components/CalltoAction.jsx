import React from "react";
import phone from "../assets/images/phone.png";
import Button from "./Button";

const CalltoAction = () => {
  return (
    <div className=" pt-[20px] md:pt-0 main-padding bg-gradient-to-r from-blue-700 to-[#3280f4] h-[100%] md:h-[51rem] item-center md:item-start flex flex-col md:flex-row text-white pb-10">
      <section>
        <img
          src={phone}
          alt=""
          className="   w-[80vw] h-[80vh] md:w-[40rem] md:h-[60rem]"
        />
      </section>
      <section className="w-[41rem]my-[50px] md:mt-[12rem] text-center md:text-left  ">
        <p className=" text-[2.5rem] md:text-[5rem] w-[26rem] pt-5 leading-tight">
          For your ears only.
        </p>
        <p className="  w-full md:w-[30rem] my-5  ">
          Normal hearing varies significantly from person to person, and these
          variations make a big difference to how you experience music.
        </p>
        <p className="w-full  md:w-[25rem] my-6">
          The first time you use Nura earbuds, hey measure your hearing to
          create your personalised hearing profile.
        </p>
        <Button
          text={"LEARN MORE"}
          color={"border border-white rounded-full px-5 py-2 cursor-pointer "}
        />
      </section>
    </div>
  );
};

export default CalltoAction;
