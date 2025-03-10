import React from "react";
import LogoSlider from "../components/LogoSlider/";
import Country from "../components/Country";
import AboutBannerTeaser from "../components/AboutBannerTeaser";
import HomeRevenueCards from "../components/HomeRevenueCards";
import HeroSlider from "../components/slider/HeroSlider";
import { LOGO_SLIDER_JSON, slides, VISION_PAGE_HEADINGS } from "../constant/global.constant";
import country from '../assets/country.png'
import VisionMissionCard from "../components/VisionMissionCard";

const AboutPage = () => {
  return (
    <div>
      <HeroSlider slides={slides} />
      <VisionMissionCard data={LOGO_SLIDER_JSON} heading={VISION_PAGE_HEADINGS}/>
      <Country data={country} />
      <AboutBannerTeaser />
      <LogoSlider />
    </div>
  );
};

export default AboutPage;
