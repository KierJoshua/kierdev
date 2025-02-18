import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLogoJavascript } from "react-icons/io5";
import skills from './SkillsData';

const SkillsCarousel = () => {


    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerPadding: "60px",
        className: "center",
        // centerMode: true,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      return (
<div className="slider-container w-[15%] sm:w-1/2 rounded-lg">
  <Slider {...settings}>
    {skills.map((skill, index) => (
      <div
        className="bg-[#173558] w-full border border-[#40A2D8] shadow-lg hover:shadow-[#40A2D8] transform hover:scale-105 transition-transform duration-300 py-4 px-4 rounded-lg"
        key={index}
      >
        <img src={skill.skill} alt="" className="w-full  mb-2" />
        <h1 className="text-center font-bold text-xs md:text-sm lg:text-md text-white">
          {skill.name}
        </h1>
      </div>
    ))}
  </Slider>
</div>
      );
}

export default SkillsCarousel