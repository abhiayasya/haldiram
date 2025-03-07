import React from "react";
import Banner from "../components/Banner";
import LatestNewsSection from "../components/LatestNewsSection";
import BannerTeaser from "../components/BannerTeaser";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <LatestNewsSection/>
      <BannerTeaser/>
    </div>
  );
};

export default HomePage;
