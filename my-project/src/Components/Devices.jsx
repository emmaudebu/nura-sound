import React from "react";
import cock from "../assets/images/cock.png";

const Devices = () => {
  return (
    <div
      id="Support"
      className="px-3  md:px-[64px] h-[80%]   bg-[#171717] relative pt-5 md:pt-10 overflow-x-hidden flex"
    >
      <img src={cock} alt="" className=" w-[30rem] m-auto" />
      <section className="w-[100%] h-[100%] bg-[#00000041] absolute top-0 left-0  ">
        <div className="text-white ml-0 md:ml-[36rem] text-center pr-0 md:pr-50  md:text-left">
          <div className=" float-none   md:float-right mt-[8rem] md:mt-[10rem] md:mr-[5rem] mr-0 px-0 md:px-[40px] ">
            <h1 className="  text-[2rem] md:text-[4rem] w-full md:w-[30rem] md:pt-4 leading-tight ">
              Play from<br className=" hidden md:block"></br> any device.
            </h1>
            <section className="flex flex-col items-center text-xl ">
              <p className="  md:w-[25rem] my-[1rem]  px-10 md:px-0">
                Your hearing profile is{" "}
                <span className=" text-green-600">stored on the earbuds</span>,
                and is applied to whatever you listen to,{" "}
                <span className=" text-green-600">on any device.</span>
              </p>
              <p className=" md:w-[25rem] w-[100%] px-10 md:px-0">
                Use the Nura app to create a hearing profile, configure touch
                buttons, adjust immersion mode and more.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Devices;
