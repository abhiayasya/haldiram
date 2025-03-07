import React from "react";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";

const VisionSection = () => {
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
        <div className="flex-1 bg-white p-4 rounded-2xl shadow-md border border-gray-200 flex flex-col">
          <span className="text-lg font-normal mb-3">Our Vision</span>
          <div className="flex items-start gap-1">
            <img src={vision} width={124} height={124} alt="Vision" />
            <p className="text-xl text-black font-normal">
              To share the rich and flavorful tapestry of Indian cuisine with
              the world, in its purest and most delicious form.
            </p>
          </div>
        </div>

        <div className="flex-1 bg-white p-4 rounded-2xl shadow-md border border-gray-200 flex flex-col">
          <span className="text-lg font-normal mb-3">Our Mission</span>
          <div className="flex items-start gap-1">
            <img src={mission} width={124} height={124} alt="Mission" />
            <p className="text-xl text-black font-normal">
              To be the most preferred destination for authentic Indian cuisine,
              leveraging our heritage and a passionate global network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
