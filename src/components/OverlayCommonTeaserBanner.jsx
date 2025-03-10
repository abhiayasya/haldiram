import React from "react";

const OverlayCommonTeaserBanner = ({ data }) => {
  return (
    <div>
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-end justify-center text-white"
        style={{ backgroundImage: `url(${data.overlayBannerImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center gap-y-4 px-6 py-6 md:px-10 max-w-md md:max-w-4xl pb-6">
          <h1 className="text-lg sm:text-xl md:text-4xl text-center leading-tight tracking-wider">
            {data.title}
          </h1>

          {data.pointerImg && (
            <img src={data.pointerImg} width={200} height={12} alt="Pointer" />
          )}

          <p className="mt-4 text-center text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
            {data.description}
          </p>

          <button className="mt-3 font-serif px-4 sm:px-6 py-2 flex justify-center items-center gap-3 w-auto sm:w-full text-white font-medium rounded-full transition-transform transform hover:scale-105">
            {data.btntext}
            <span className="bg-yellow-500 flex justify-center items-center rounded-full w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] px-2 py-1">
              →
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default OverlayCommonTeaserBanner;
