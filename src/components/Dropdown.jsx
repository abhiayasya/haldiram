
import React from 'react';
import arrowIcon from "../assets/icon/arrowIcon.png";
import backgroundImg from '../assets/icon/dropdownBackround.png';
import nuttyImage from "../assets/icon/dropdownImageNutty.png";
import nutsImage from "../assets/icon/dropdownImageNut.png";
import chipsImage from "../assets/icon/dropdownImageChips.png";
import mexilaImage from "../assets/icon/dropdownImageMexila.png";
import pangaImage from "../assets/icon/dropdownImagePanga.png";

const items = [
  {
    id: 1,
    title: "Nutty Factory",
    image: nuttyImage,
    bgColor: "#F5A623"
  },
  {
    id: 2,
    title: "Nut Roast",
    image: nutsImage,
    bgColor: "#B388FF"
  },
  {
    id: 3,
    title: "Chips",
    image: chipsImage,
    bgColor: "#4A90E2"
  },
  {
    id: 4,
    title: "Mexilla",
    image: mexilaImage,
    bgColor: "#E67E22"
  },
  {
    id: 5,
    title: "Panga",
    image: pangaImage,
    bgColor: "#8E44AD"
  }
];

const Dropdown = () => {
  return (
    <div className="bg-white border-t pb-6">
      <div className="py-6 px-10 flex justify-between gap-5 items-baseline">
        <div>
          <h3 className="text-[#1E1E1E] uppercase text-2xl font-normal mb-4">
            <span className="text-[#B50020]">Brands</span> Built ON TRUST
          </h3>
          <p className="text-black font-medium text-base max-w-[600px] w-full">
            Explore the diverse range of Haldiram’s sub-brands, each crafted
            to bring you authentic tastes from every corner of India.
          </p>
        </div>
        <a href="#" className="flex items-center gap-3 max-w-[144px] w-full text-[18px] cursor-pointer leading-6">
          Explore All
          <span><img src={arrowIcon} alt="arrowIcon" /></span>
        </a>
      </div>

      <div
        className="h-[260px] mx-auto max-w-[1260px] w-full bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="flex justify-between items-center gap-6 p-8 ">
          {items.map((item) => (
            <div key={item.id} className="" style={{backgroundImg}}>
              <img src={item.image} alt={item.title} className="max-w-[200px] w-full " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
