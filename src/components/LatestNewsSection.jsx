import React, { useState } from "react";
import productImg from "../assets/image.png";

const newsData = [
  {
    pretitle: "Press Release",
    title:
      "From Street Food to Snack Shelf: How Indian Street Snacks Became Pantry Staples",
    date: "November 22, 2024",
    image: productImg,
  },
  {
    pretitle: "Press Release",
    title:
      "Deck the Halls with Delight With The Ultimate Sweet Platter for the Holidays",
    date: "October 18, 2024",
    image: productImg,
  },
  {
    pretitle: "Press Release",
    title: "Lazy? Busy? Hungry? Haldiram's UK Has the Perfect Meal for You!",
    date: "October 15, 2024",
    image: productImg,
  },
  {
    pretitle: "Press Release",
    title: "Deck the Halls with Delight With The Ultimate Sweet Platter for the Holidays",
    date: "October 15, 2024",
    image: productImg,
  },
];

const LatestNewsSection = () => {
  const [selectedNews, setSelectedNews] = useState(newsData[0]);

  return (
    <section className="p-6 mx-auto">
      <h1 className="text-2xl font-[400] text-red-700 mb-8">LATEST ON HALDIRAM</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 border-1 border-gray-200 rounded-lg">
        {/* Featured News */}
        <div className="md:col-span-2 relative border-1 border-gray-200 bg-white border-r-none border-y-0 overflow-hidden lg:flex">
          <div className="productImg-section">
            <img src={selectedNews.image} alt="Featured News" className="w-full object-cover" />
          </div>
          <div className="p-4 lg:w-[60%] border-1 border-gray-200 border-y-0">
            <h3 className="text-lg mb-5 text-[#9c6f4d]">{selectedNews.pretitle}</h3>
            <h2 className="text-2xl font-semibold mb-5">{selectedNews.title}</h2>
            <p className="text-gray-500 text-sm mb-5">{selectedNews.date}</p>
            <button className="mt-3 text-xl text-[#9c6f4d] gap-5 flex items-center">
              <span>Read More</span>
              <span className="w-[30px] h-[30px] rounded-[50%] bg-[#9c6f4d] text-white flex justify-center"> →</span>
            </button>
          </div>
        </div>

        {/* Sidebar News List */}
        <div className="flex flex-col border-1 border-gray-200 border-l-0 h-full border-y-0">
          {newsData.slice(1).map((news, index) => (
            <div
              key={index}
              className="flex items-center p-3 border-b-1 border-gray-200 py-4 cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedNews(news)}
            >
              <img src={news.image} alt={news.title} className="w-16 h-16 object-cover rounded-lg" />
              <div className="ml-3">
                <h4 className="text-sm font-semibold">{news.title}</h4>
                <p className="text-gray-500 text-xs pt-4">{news.date}</p>
              </div>
            </div>
          ))}
          <div className="text-right py-6 bg-[#F7EBE1]">
            <button className="text-xl text-[#9c6f4d] gap-5 flex items-center px-5">
              <span>View All</span>
              <span className="w-[30px] h-[30px] rounded-[50%] bg-[#9c6f4d] text-white flex justify-center"> →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
