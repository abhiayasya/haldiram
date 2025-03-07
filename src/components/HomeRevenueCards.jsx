import React from "react";
import revenueCard1 from "../assets/revenue1.png";
import revenueCard2 from "../assets/revenue2.png";

export const REVENUE_JSON = [
  {
    supTag: "$01",
    tagline: "BILLION",
    title: "ANNUAL REVENUE",
    description:
      "The company boasts an annual revenue exceeding $1 billion, reflecting its significant market presence and consumer trust.",
  },
  {
    supTag: "80+",
    tagline: "COUNTRIES",
    title: "GLOBAL REACH",
    description:
      "The brand's products are available in over 80 countries, showcasing its extensive international presence.",
  },
  {
    supTag: "410",
    tagline: "DISTINCT ITEMS",
    title: "PRODUCT RANGE",
    description:
      "Offering more than 410 distinct items, Haldiram's caters to a wide array of consumer tastes and preferences.",
  },
  {
    supTag: "3 LAC",
    tagline: "",
    title: "RETAIL NETWORK",
    description:
      "With a distribution network encompassing over 3 lakh retail outlets across 12 states in India, Haldiram's ensures widespread product availability.",
  },
];
const HomeRevenueCards = () => {
  return (
    <div className="revenue-container p-7 flex flex-col md:flex-row gap-3 items-start bg-[#FAF5EF]">
      <div className="card-img md:w-[20%]">
        <img src={revenueCard1} width={324} height={324} alt="" />
        <img src={revenueCard2} width={324} height={324} alt="" />
      </div>

      <div className="revenue-section md:w-[80%] p-5 grid gap-4 grid-cols-1 md:grid-cols-2 gap-y-12 items-center ">
        {REVENUE_JSON.map((revenue, index) => (
          <div className="revenue-card p-2 flex flex-col gap-y-2" key={index}>
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
