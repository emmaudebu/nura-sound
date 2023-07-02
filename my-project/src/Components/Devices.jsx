import React from "react";
import cock from "../assets/images/cock.png";

const Devices = () => {
  return (
    <div className="main-padding h-[45rem]   bg-[#171717] relative pt-10">
      <img src={cock} alt="" className=" w-[30rem] m-auto" />
      <section className="w-[100%] h-[54rem] bg-[#00000041] absolute top-0 left-0">
        <div className="text-white">
          <h1 className=" text-[2.5rem] md:text-[5rem] w-[26rem] pt-5 leading-tight">
            Play from any device.
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Devices;
