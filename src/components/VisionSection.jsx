import React from "react";

const VisionSection = ({data}) => {
  return (
    <div className="w-full p-7 bg-[#FAF5EF]">
      <div className=" mb-8">
        <h3 className="text-3xl text-[#B50020] uppercase font-semibold mb-4">
          Our Vision and Mission
        </h3>
        <p className="text-lg text-black font-normal">
          For over eight decades, Haldiram’s has been synonymous with authentic
          Indian flavours.
        </p>
        <p className="text-lg text-black font-normal">
          Today, Haldiram’s is a beloved brand in India and a renowned
          ambassador of Indian cuisine worldwide.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {data.map((logoslider, index) => (
          <div
            className="flex-1 bg-white p-4 rounded-2xl shadow-md border border-gray-200 flex flex-col"
            key={index}
          >
            <span className="text-lg font-serif mb-3 tracking-wider">
              {logoslider.tagline}
            </span>
            <div className="flex flex-col md:flex-row  items-center md:items-start gap-4 md:gap-1">
              <img src={logoslider.img} width={124} height={124} alt="Vision" />
              <p className="text-lg md:text-xl text-black font-normal text-center md:text-left">
                {logoslider.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionSection;
