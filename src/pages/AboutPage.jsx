import React from "react";
import LogoSlider from "../components/LogoSlider/";
import VisionSection from "../components/VisionSection";
import Country from "../components/Country";
import AboutBannerTeaser from "../components/AboutBannerTeaser";
import HomeRevenueCards from "../components/HomeRevenueCards";
import HeroSlider from "../components/slider/HeroSlider";
import { LOGO_SLIDER_JSON, slides } from "../constant/global.constant";
import country from '../assets/country.png'

const AboutPage = () => {
  return (
    <div>
      <HeroSlider slides={slides} />
      <VisionSection data={LOGO_SLIDER_JSON} />
      <Country data={country} />
      <AboutBannerTeaser />
      <LogoSlider />
    </div>
  );
};

export default AboutPage;
