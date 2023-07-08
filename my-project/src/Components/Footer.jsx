import React from "react";
import logo from "../assets/images/svg.png";

export const Footer = () => {
  return (
    <div div className=" bg-black px-3  md:px-[20px]">
      <div className="  bg-black text-white pt-[5.6rem]  hidden flex-wrap  md:flex :flex-row gap-5 md:gap-[6rem] pb-10">
        <div className=" w-[21rem] pr-[2.5rem]">
          <img src={logo} alt="" className="pb-5" />
          <p>
            Nura designs headphones tuned to you. Bringing you closer to music
            with personalised sound.
          </p>
        </div>

        <ul>
          <h3 className=" text-gray-400 text-base uppercase text-[0.8rem]">
            Shop
          </h3>
          <li>NuraTrue Pro</li>
          <li>Audio Transmitter</li>
          <li>NuraTrue</li>
          <li>NuraBuds</li>
          <li>Nuraphone</li>
          <li>NuraLoop</li>
          <li>Accessories</li>
          <li>Subscription</li>
        </ul>
        <ul className="w-[9rem]">
          <h3 className=" text-gray-400 text-base uppercase text-[0.8rem]">
            Info
          </h3>
          <li>Why Nura?</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Warranty</li>
          <li>Patents</li>
        </ul>
        <ul className="w-[9rem]">
          <h3 className=" text-gray-400 text-base uppercase text-[0.8rem] ">
            SUPPORT
          </h3>
          <li>Help Centre</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <h3 className=" text-gray-400 text-base uppercase text-[0.8rem]">
            SOCIALS
          </h3>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>YouTube</li>
          <li>Tidal</li>
          <li>Twitter</li>
          <li>Discord</li>
        </ul>
      </div>
      <div className=" flex justify-between flex-col md:flex-row items-center text-[#737373] py-10 text-[0.8rem]">
        <p>Copyright © 2022 Nura Operations Pty Ltd. All rights reserved.</p>
        <ul className=" flex gap-2">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Legal</li>
        </ul>
      </div>
    </div>
  );
};
