import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderCard from "./SliderCard";
import { DataArray } from "@/app/data";

export default function MySlider() {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    centerMode: true,
    centerPadding: "400px",
    dots: true,
    autoplay: true,             // 👈 enable autoplay
    autoplaySpeed: 1000,        // 👈 slide every 3 seconds
    pauseOnHover: true,         // 👈 pause when hovering
    responsive: [
      {
        breakpoint: 1700,
        settings: { centerPadding: "400px" },
      },
      {
        breakpoint: 1550,
        settings: { centerPadding: "350px" },
      },
      {
        breakpoint: 1450,
        settings: { centerPadding: "300px" },
      },
      {
        breakpoint: 1400,
        settings: { centerPadding: "250px" },
      },
      {
        breakpoint: 1250,
        settings: { centerPadding: "200px" },
      },
      {
        breakpoint: 1150,
        settings: { centerPadding: "170px" },
      },
      {
        breakpoint: 1024,
        settings: { centerPadding: "230px" },
      },
      {
        breakpoint: 980,
        settings: { centerPadding: "200px" },
      },
      {
        breakpoint: 920,
        settings: { centerPadding: "170px" },
      },
      {
        breakpoint: 860,
        settings: { centerPadding: "130px" },
      },
      {
        breakpoint: 780,
        settings: { centerPadding: "100px" },
      },
      {
        breakpoint: 765,
        settings: { centerPadding: "170px" },
      },
      {
        breakpoint: 640,
        settings: {
          dots: false,
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {DataArray.map((item, index) => (
        <div key={index} className="my-slider">
          <SliderCard item={item} index={index} />
        </div>
      ))}
    </Slider>
  );
}
