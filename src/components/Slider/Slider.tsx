import { useState } from "react"
import { ClassNames } from "@emotion/react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Slider() {
  const slides = [
    {
      url:("https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_DBS_HeroBanner_APR2023_2000x.gif?v=1681398888") ,
    },
    {
      _url: "https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_JoJo_HeroBanner_APR2023_2000x.jpg?v=1680621495",
      get url() {
        return this._url;
      },
      set url(value) {
        this._url = value;
      },
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atusuko_Toonami_HeroBanner_MAR2023_2000x.gif?v=1680277935",
    },

    {
      url: "https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atusko_SamuraiChamploo_HeroBanner_MAR2023_2000x.gif?v=1680017274",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atusko_FLCL_HeroBanner_MAR2023_2000x.jpg?v=1679584537",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log("prev clicked");
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log("next clicked");
  };

  return (
    <div className="max-w-[1400px] h-[650px] w-full m-auto py-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
    
  );
}

export default Slider;