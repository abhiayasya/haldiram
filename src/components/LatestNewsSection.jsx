import React, { useState } from "react";

const LatestNewsSection = ({ data }) => {
  const [selectedNews, setSelectedNews] = useState(data[0]);

  return (
    <section className="p-4 md:p-6 mx-auto max-w-7xl">
      <h1 className="text-xl md:text-2xl font-[400] text-red-700 mb-6 md:mb-8 text-center md:text-left">
        LATEST ON HALDIRAM
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-lg h-full">
        {/* Featured News */}
        <div className="md:col-span-2 relative border border-gray-200 bg-white overflow-hidden flex flex-col md:flex-row h-full">
          <div className="w-full md:w-[40%]">
            <img
              src={selectedNews.image}
              alt="Featured News"
              className="w-full h-48 md:h-full "
            />
          </div>
          <div className="p-4 md:w-[60%] border-l border-gray-200 flex flex-col justify-between h-full">
            <div className="mt-2 md:mt-5">
              <h3 className="text-sm md:text-lg mb-3 md:mb-5 text-[#9c6f4d]">
                {selectedNews.pretitle}
              </h3>
              <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-5">
                {selectedNews.title}
              </h2>
              <p className="text-gray-500 text-xs md:text-sm mb-6 md:mb-10">
                {selectedNews.date}
              </p>
            </div>
            <div>
              <button className="mt-3 text-lg md:text-xl text-[#9c6f4d] flex items-center gap-3">
                <span>Read More</span>
                <span className="w-8 h-8 rounded-full bg-[#9c6f4d] text-white flex justify-center items-center">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar News List */}
        <div className="flex flex-col border-l border-gray-200 h-full flex-grow">
          {data.slice(1).map((news, index) => (
            <div
              key={index}
              className="flex items-center p-3 border-b border-gray-200 py-4 cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedNews(news)}
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-16 h-16 md:w-20 md:h-20 object-cover"
              />
              <div className="ml-3">
                <h4 className="text-xs md:text-sm font-semibold">{news.title}</h4>
                <p className="text-gray-500 text-xs pt-2 md:pt-4">{news.date}</p>
              </div>
            </div>
          ))}
          <div className="text-right py-4 md:py-6 bg-[#F7EBE1] mt-auto">
            <button className="text-lg md:text-xl text-[#9c6f4d] flex items-center gap-3 px-4 md:px-5">
              <span>View All</span>
              <span className="w-8 h-8 rounded-full bg-[#9c6f4d] text-white flex justify-center items-center">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
