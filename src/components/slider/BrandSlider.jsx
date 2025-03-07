import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import "../index.css";
import "./brandSlider.css"
 
// Swiper Images
const images = [
  "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_1_1_1_1.jpg",
  "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_1_1_1_1.jpg",
  "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_1_1_1_1.jpg",
  "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_1_1_1_1.jpg",
  "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_1_1_1_1.jpg",
  "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_1_1_1_1.jpg",
  "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_1_1_1_1.jpg",
  "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_1_1_1_1.jpg",
];
 
const BrandSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide
 
  return (
    <div className="relative w-full h-screen text-white">
      {/* Main Image Swiper (Full Screen) */}
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        spaceBetween={10}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Image */}
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </SwiperSlide>
        ))}
      </Swiper>
 
      {/* Navigation & Thumbnails */}
      <div className="absolute bottom-10 left-0 w-full flex items-center justify-between px-10">
        {/* Previous Button */}
        <button className="custom-prev absolute left-5 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 border-2 border-white text-white rounded-full z-20">
          ❮
        </button>
 
        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3} // Default to 3 thumbnails
          breakpoints={{
            1024: { slidesPerView: 6 }, // Show 6 thumbnails on larger screens (>=1024px)
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper w-[90%] sm:w-2/3"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="cursor-pointer transition-opacity duration-300">
              <img
                src={img}
                alt={`Thumb ${index + 1}`}
                className={`w-full h-20 object-cover rounded-lg border-2 transition
                  ${activeIndex === index ? "border-white opacity-100" : "border-transparent opacity-40"}
                `}
              />
            </SwiperSlide>
          ))}
        </Swiper>
 
        {/* Next Button */}
        <button className="custom-next absolute right-5 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 border-2 border-white text-white rounded-full z-20">
          ❯
        </button>
      </div>
    </div>
  );
};
 
export default BrandSlider;
 
 