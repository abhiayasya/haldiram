import React from "react";
import BannerImage from "../assets/images/bannerImage.jpg";

const Banner = () => {
  return (
    <div
      className="h-[100vh] w-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${BannerImage})` }}
    ></div>
  );
};

export default Banner;
