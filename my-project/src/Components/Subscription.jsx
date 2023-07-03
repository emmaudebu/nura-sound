import React from "react";
import Button from "./Button";

const Subscription = () => {
  return (
    <div
      id="Subscription"
      className=" bg-Blurs bg-cover md:bg-contain bg-center h-[20rem] md:h-[30rem]   flex flex-col items-center justify-center text-white text-center "
    >
      <p className=" text-4xl md:text-6xl pb-5 mt-10">A sound subscription</p>
      <p className=" text-lg md:text-[2rem] px-3 leading-10">
        Experience personalised sound across our devices on a
        <br className=" hidden md:block"></br> low monthly fee with NuraNow.
        Cancel anytime.
      </p>
      <Button
        text={"Discover Nura Now"}
        color={
          "bg-blue-500 rounded-full text-white uppercase w-[200px] p-[10px] mb-[50px] animate-pulse cursor-pointer mt-[20px] "
        }
      />
    </div>
  );
};

export default Subscription;
