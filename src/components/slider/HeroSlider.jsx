"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "./heroSlider.css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import separatorIcon from "../../assets/icon/separator-icon.png";
import previousImage from "../../assets/icon/arrow_backward.png";
import forwordImage from "../../assets/icon/arrow_forward.png";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    title: "HALDIRAM : A LEGACY OF TASTE AND TRUST SINCE 1937",
    description:
      "For over 80 years, Haldiram has brought authentic Indian flavours to the world, blending tradition and quality in every bite.",
    image:
      "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_1_1_1_1.jpg", // Replace with actual image path
  },
  {
    title: "HALDIRAM : A LEGACY OF TASTE AND TRUST SINCE 1937",
    description:
      "For over 80 years, Haldiram has brought authentic Indian flavours to the world, blending tradition and quality in every bite.",
    image:
      "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_1_1_1_1.jpg", // Replace with actual image path
  },
  {
    title: "HALDIRAM : A LEGACY OF TASTE AND TRUST SINCE 1937",
    description:
      "For over 80 years, Haldiram has brought authentic Indian flavours to the world, blending tradition and quality in every bite.",
    image:
      "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_1_1_1_1.jpg", // Replace with actual image path
  },
  {
    title: "HALDIRAM : A LEGACY OF TASTE AND TRUST SINCE 1937",
    description:
      "For over 80 years, Haldiram has brought authentic Indian flavours to the world, blending tradition and quality in every bite.",
    image:
      "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_1_1_1_1.jpg", // Replace with actual image path
  },
  // Add more slides as needed
];

export default function HeroSlider({slides}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="hero-slider relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        // autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-screen grid grid-cols-2 place-items-center p-10 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="text-white max-w-96 justify-self-start flex flex-col justify-between h-[300px]">
                <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                <img src={separatorIcon} alt="" className="w-fit" />
                <p className="mb-4 w-fit">{slide.description}</p>
                <button className="bg-orange-500 px-4 py-2 rounded-full flex items-center w-fit">
                  Know More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="absolute right-10 top-1/2 z-10 -translate-y-1/2 justify-self-end">
        <div className="border border-red-500 text-white px-2 rounded mb-4">
          Lead stories
        </div>
        <div className="flex flex-col gap-4">
          <div className="self-end w-1 h-8 rounded-full bg-gray-200"></div>
          <div className="self-end w-1 h-8 rounded-full bg-gray-200"></div>
          <div className="self-end w-1 h-8 rounded-full bg-gray-200"></div>
          <div className="self-end w-1 h-8 rounded-full bg-gray-200"></div>
        </div>
      </div> */}
      {/* Custom Navigation Buttons */}
      <div className="absolute bottom-5 max-w-[400px] w-full left-10 flex flex-col space-x-4 z-10">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl">1 of 4</div>
          <div className=" flex gap-2 mb-2">
            <button
              ref={prevRef}
              className="w-8 h-8 border-2 border-white p-2 rounded-full"
            >
              {/* <FaArrowLeft className="text-black" /> */}
              <img src={previousImage} alt="previousImage" />
            </button>
            <button
              ref={nextRef}
              className="w-8 h-8 border-2 border-white p-2 rounded-full"
            >
              {/* <FaArrowRight className="text-black" /> */}
              <img src={forwordImage} alt="forwordImage" />
            </button>
          </div>
        </div>
        <div className="max-w-[400px] w-full bg-white h-1 self-end"></div>
      </div>
    </div>
  );
}
