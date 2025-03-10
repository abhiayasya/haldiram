import React from "react";
import revenueCard1 from "../assets/revenue1.png";
import revenueCard2 from "../assets/revenue2.png";


const HomeRevenueCards = ({data}) => {
  return (
    <div className="revenue-container p-7 flex flex-col md:flex-row items-center md:items-start bg-[#FAF5EF]">
      <div className="card-img md:w-[22%]">
        <img src={revenueCard1} width={324} height={324} alt="" />
        <img src={revenueCard2} width={324} height={324} alt="" />
      </div>

      <div className="revenue-section md:w-[78%] mx-2 p-5 grid grid-cols-1 md:grid-cols-2 gap-y-6 items-center ">
        {data.map((revenue, index) => (
          <div
            className="revenue-card pb-4 md:pb-10 md:nth-[1]:border-b md:nth-[2]:border-b border-gray-400 flex flex-col gap-y-2"
            key={index}
          >
            <div className="mb-2 space-y-2">
              <h3 className="font-light text-2xl uppercase tracking-wider">
                <span className="text-5xl font-normal">{revenue.supTag}</span>
                {revenue.tagline}
              </h3>
              <span className="text-2xl font-normal tracking-widest">
                {revenue.title}
              </span>
            </div>
            <p className="text-gray-700 font-normal text-md">
              {revenue.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeRevenueCards;
