  
import React from "react";
import Banner from "../components/Banner";
import LatestNewsSection from "../components/LatestNewsSection";
import BannerTeaser from "../components/BannerTeaser";
import BrandSlider from "../components/slider/BrandSlider";
import HeroSlider from "../components/slider/HeroSlider";
import HomeRevenueCards from "../components/HomeRevenueCards";
import { bannerData, brandImages, latestNewsSection, revenueJson, slides } from "../constant/global.constant";
import SocialMediaCards from "../components/SocialMediaCards";

const HomePage = () => {
  return (
    <div>
      <HeroSlider slides={slides}/>
      <LatestNewsSection data={latestNewsSection}/>
      <section className="mb-5">
      <SocialMediaCards/>
      </section>
     
      <BannerTeaser data={bannerData} />
      <HomeRevenueCards data={revenueJson} />
      
      <section className="my-20">
        <BrandSlider data={brandImages}/>
      </section>
    </div>
  );
};

export default HomePage;
