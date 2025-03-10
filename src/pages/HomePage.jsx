  
import React from "react";
import Banner from "../components/Banner";
import LatestNewsSection from "../components/LatestNewsSection";
import BannerTeaser from "../components/BannerTeaser";
import BrandSlider from "../components/slider/BrandSlider";
import Careers from '../components/Careers'
import Dropdown from "../components/Dropdown";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <LatestNewsSection />
      <BannerTeaser />
      <Careers/>
      <section className="my-20">
        <BrandSlider />
      </section>
      <Dropdown/>
    </div>
  );
};

export default HomePage;
