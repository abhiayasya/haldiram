import React from "react";
import Banner from "../components/Banner";
import LatestNewsSection from "../components/LatestNewsSection";
import BannerTeaser from "../components/BannerTeaser";
import BrandSlider from "../components/slider/BrandSlider";
import HeroSlider from "../components/slider/HeroSlider";
const HomePage = () => {
  return (
    <div>
      <HeroSlider/>
      <LatestNewsSection />
      <BannerTeaser />
      <section className="my-20">
        <BrandSlider />
      </section>
    </div>
  );
};

export default HomePage;
