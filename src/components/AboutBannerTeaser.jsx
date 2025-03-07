import React from "react";
import footprint from "../assets/footprint.png";
import footpointer from "../assets/footpointer.png";

const AboutBannerTeaser = () => {
  return (
    <div>
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-end justify-center text-white"
        style={{ backgroundImage: `url(${footprint})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center gap-y-4 px-6 py-6 md:px-10 max-w-md md:max-w-4xl pb-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl text-center font-serif leading-tight tracking-wider">
            Reducing Our Footprint <br /> One Step at a Time
          </h1>

          <img src={footpointer} width={200} height={12} alt="Pointer" />

          <p className="mt-4 text-center text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
            Haldiram’s champions sustainability from sourcing to production,
            ensuring top quality while protecting the planet. With globally
            recognized certifications like HACCP, ISO 22000, BRC, and FSSC, our
            facilities uphold the highest safety and environmental standards. As
            a global leader in Indian snacks and sweets, we blend heritage with
            innovation, driving responsible manufacturing and sustainable
            growth.{" "}
          </p>

          <button className="mt-3 font-serif px-4 sm:px-6 py-2 flex justify-center items-center gap-3 w-auto sm:w-full text-white font-medium rounded-full transition-transform transform hover:scale-105">
            Read More
            <span className="bg-yellow-500 flex justify-center items-center rounded-full w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] px-2 py-1">
              →
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutBannerTeaser;
