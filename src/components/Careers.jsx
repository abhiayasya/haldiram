
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";
import leftCardImage from '../assets/images/left-cards.png'
import rightCardImage from '../assets/images/right-cards.png'
const Careers = () => {
  const jobs = [
    { title: "Senior Product Analyst", location: "Noida, India" },
    { title: "Senior Product Analyst", location: "Noida, India" },
    { title: "Senior Product Analyst", location: "Noida, India" },
  ];

  return (
    <>
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold text-[#941c1f] mb-4">CAREERS</h2>
      <div className="flex justify-between gap-5">
        <div>
            <img className="rounded-[20px]" src={leftCardImage} alt="leftCardImage" />
        </div>
        <div>
            <img className="rounded-[20px]" src={rightCardImage} alt="rightCardImage" />
        </div>

        {/* <div className="max-w-[70%] w-full">
          <div className=" bg-white rounded-lg  shadow-lg">
          
            <div className=" bg-black/50 p-6 text-white rounded-2xl">
              <div>
                <p className="text-sm">For Employee</p>
                <h3 className="text-2xl font-semibold  max-w-[180px] w-full my-8">
                  Opportunities In Haldiram
                </h3>
                <p className="mt-2 text-sm max-w-[310px] w-full font-light mb-8">
                  Explore roles across Haldiram seamlessly using the group
                  mobility platform.
                </p>
              </div>
              <a href="#" className="mt-4 flex items-center gap-2 text-white">
                Explore All <ArrowRight size={18} />
              </a>
            </div>
          </div>

          

          
          <div className=" gap-6 grid grid-cols-2 mt-8">
            <div className="bg-[#941c1f] text-white p-6 rounded-lg shadow-lg">
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
                {jobs.map((job, index) => (
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

            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
              <p className="text-sm text-gray-500">In Numbers</p>
              <h3 className="text-3xl font-semibold text-[#941c1f] mt-2">
                1,200,000
              </h3>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Happy and growing employees at Haldiram
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-[30%] w-full">
          <img
            src="/your-image2.jpg"
            alt="Job Scams"
            className="w-full h-36 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-3">Careers</p>
          <h3 className="text-lg font-semibold mt-2">Beware of Job Scams</h3>
          <p className="text-sm text-gray-600 mt-2">
            We do not charge/accept any amount or security deposit from job
            seekers. Read disclaimer.
          </p>
          <a href="#" className="mt-4 flex items-center gap-2 text-[#b38e5d]">
            Explore All Jobs <ArrowRight size={18} />
          </a>
        </div>  */}

      </div>
      
    </section>
    </>
  );
};

export default Careers;

