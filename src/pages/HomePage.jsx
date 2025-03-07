  
import React from "react";
import Banner from "../components/Banner";
import LatestNewsSection from "../components/LatestNewsSection";
import BannerTeaser from "../components/BannerTeaser";
import BrandSlider from "../components/slider/BrandSlider";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <LatestNewsSection />
      <BannerTeaser />
      <section className="my-20">
        <BrandSlider />
      </section>
    </div>
  );
};

export default HomePage;
