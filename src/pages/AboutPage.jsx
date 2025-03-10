import React from 'react'
import LogoSlider from '../components/LogoSlider/'
import VisionSection from '../components/VisionSection'
import Country from '../components/Country'
import AboutBannerTeaser from '../components/AboutBannerTeaser'
import HomeRevenueCards from '../components/HomeRevenueCards'

const AboutPage = () => {
  return (
    <div>
        <LogoSlider/>
        <VisionSection/>
        <Country/>
        <AboutBannerTeaser/>
        <HomeRevenueCards/>
    </div>
  )
}

export default AboutPage
