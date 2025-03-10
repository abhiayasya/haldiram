
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";
import numberImage from "../assets/images/numberImage.png";
import OpportunityImg from "../assets/images/Opportunity.png";
import beawareImg from "../assets/images/bewareImage.png";
import OpportunitySmallImg from "../assets/images/opertunitySmallImage.png";

// JSON Data
const careersData = {
  opportunities: {
    title: "Opportunities In Haldiram",
    description:
      "Explore roles across Haldiram seamlessly using the group mobility platform.",
    backgroundImage: OpportunityImg,
    icon: OpportunitySmallImg,
    link: "#",
  },
  jobs: [
    { title: "Senior Product Analyst", location: "Noida, India" },
    { title: "Marketing Manager", location: "Mumbai, India" },
    { title: "Software Engineer", location: "Bangalore, India" },
  ],
  stats: {
    label: "In Numbers",
    image: numberImage,
    count: "1,200,000",
    description: "Happy and growing employees at Haldiram",
  },
  beware: {
    title: "Beware of Job Scams",
    description:
      "We do not charge/accept any amount or security deposit from job seekers. Read disclaimer.",
    image: beawareImg,
    link: "#",
  },
};

const Careers = () => {
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold text-[#941c1f] mb-4">CAREERS</h2>
      
      {/* Responsive Wrapper */}
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        
        {/* Left Section */}
        <div className="w-full lg:max-w-[70%]">
          
          {/* Opportunities Card */}
          <div
            className="p-6 text-white rounded-[20px] bg-center pb-8 bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${careersData.opportunities.backgroundImage})` }}
          >
            <div>
              <p className="text-base mb-4 md:mb-8">For Employee</p>
              <h3 className="text-2xl md:text-[32px] leading-8 md:leading-10 font-semibold max-w-[280px] w-full">
                {careersData.opportunities.title}
              </h3>
              <img className="my-4 w-12 md:w-auto" src={careersData.opportunities.icon} alt="Opportunity Icon" />
              <p className="text-lg md:text-xl leading-7 md:leading-8 max-w-[357px] w-full font-light mb-6 md:mb-[42px]">
                {careersData.opportunities.description}
              </p>
            </div>
            <a href={careersData.opportunities.link} className="mt-4 text-lg flex items-center gap-2 text-white">
              Explore All <ArrowRight size={18} />
            </a>
          </div>

          {/* Jobs & Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            {/* Jobs Card */}
            <div className="bg-[#941c1f] text-white p-6 rounded-[20px] shadow-lg">
              <p className="text-sm">Careers</p>
              <h3 className="text-xl font-semibold mt-2">Featured Jobs</h3>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                className="mt-4"
              >
                {careersData.jobs.map((job, index) => (
                  <SwiperSlide key={index}>
                    <div className="text-white">
                      <p className="font-medium">{job.title}</p>
                      <p className="text-sm">{job.location}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <a href="#" className="mt-4 flex items-center gap-2 text-white">
                Explore All <ArrowRight size={18} />
              </a>
            </div>

            {/* Stats Card */}
            <div className="bg-[#FAF6F0] rounded-[20px] shadow-lg p-6 flex flex-col space-y-4 items-center justify-center">
              <p className="text-base text-black text-left w-full">{careersData.stats.label}</p>
              <img className="mb-4 w-20 md:w-auto" src={careersData.stats.image} alt="Stats Image" />
              <h3 className="text-4xl md:text-5xl leading-8 md:leading-10 font-normal text-[#941c1f]">
                {careersData.stats.count}
              </h3>
              <p className="text-lg md:text-xl leading-5 md:leading-6 font-light text-center">
                {careersData.stats.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Beware Card (Moves Below on Mobile) */}
        <div className="bg-white rounded-[20px] shadow-lg w-full lg:max-w-[35%]">
          <img
            src={careersData.beware.image}
            alt="Beware Image"
            className="w-full max-h-[300px] md:max-h-[402px] object-cover"
          />
          <div className="p-6">
            <p className="text-xl md:text-2xl leading-7 md:leading-8 pb-4 md:pb-6">Careers</p>
            <h3 className="text-lg font-normal pb-4 md:pb-6">{careersData.beware.title}</h3>
            <p className="text-lg md:text-xl leading-6 font-light">
              {careersData.beware.description}
            </p>
            <a href={careersData.beware.link} className="mt-4 flex items-center gap-2 text-[#b38e5d]">
              Explore All Jobs <ArrowRight size={18} />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Careers;
