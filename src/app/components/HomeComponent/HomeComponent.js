import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Hind } from "next/font/google";
import Header from "../Header/Header";
import Image from "next/image";


const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


const HomeComponent = () => {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Header/>
      <div
        id="home"
        style={{
          backgroundImage: "linear-gradient(to right,white 24%, #48AFDE 45%)",
          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container m-auto -mt-12">
          <div className="grid grid-cols-12 ">
            <div className="flex flex-col justify-center col-span-12 bg-white md:col-span-5 md:bg-transparent">
              <div className="container m-auto">
                <div className="py-20 pl-0 text-center lg:pl-24 sm:pl-10 md:py-0 md:text-start">
                  <p
                    className={`text-[#47AEDE]   text-3xl md:text-base lg:text-2xl ${hind.className}`}
                  >
                    Hi There!
                  </p>
                  <h1 class="text-[#223740] font-recoletaBlack inline text-7xl md:text-6xl lg:text-7xl xl:text-8xl mt-5 md:mt-3">
                    I'm Akshat
                  </h1>
                  <h2
                    class={`text-[#223740] py-2 font-bold uppercase text-md md:text-xs lg:text-xl ${hind.className}`}
                  >
                    Full Stack designer &amp; Developer
                  </h2>

                  <a
                    href="/#portfolio"
                    class={`inline-block bg-[#48AFDE] transition-all duration-300 ease-in-out rounded-lg  text-white hover:bg-[#223740] hover:shadow-lg transform hover:-translate-y-1 py-3 md:py-2 lg:py-3 px-5 lg:px-8 md:text-xs lg:text-base font-bold uppercase mt-8 md:mt-5 xl:mt-10 ${hind.className}`}
                  >
                    Projects
                  </a>
                  <a
                    href="akshat Resume.pdf"
                    download="Akshat Resume.pdf"
                    className={`ml-10 inline-block bg-[#223740] transition-all duration-300 ease-in-out rounded-lg  text-white hover:bg-[#48AFDE] hover:shadow-lg transform hover:-translate-y-1 py-3 md:py-2 lg:py-3 px-5 lg:px-8 md:text-xs lg:text-base font-bold uppercase mt-8 md:mt-5 xl:mt-10 ${hind.className}`}
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
            {/*implemeting the profile image*/}
            <div className="md:col-span-7 col-span-12 md:pt-[130px] pt-[100px] md:bg-transparent bg-[#d9eef7]">
              <div className="container m-auto"
               style={{width: '100%', height: '100%'}}
              >
                <Image
                  className=""
                  alt="Full-Stack Developer"
                  src="/akshatpic.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: '100%' }} 
                />
              </div>
            </div>
          </div>

          <div className="container absolute m-auto">
            <div className="px-3">
              <div
                className="relative max-w-sm bottom-[70px] md:max-w-xl lg:max-w-5xl xl:max-w-6xl lg:px-14 px-5 overflow-auto mx-auto bg-white rounded-2xl z-20 "
                style={{
                  boxShadow: "#48AFDE -10px 25px 50px 10px",
                }}
              >
                <div className="py-10 lg:py-10 md:py-6 cursor-all-scroll">
                  <Slider {...settings}>
                    <Image
                     height={8}
                     width={50}
                     src="/mongodb.png" alt="" className="h-12 cursor-pointer grayscale opacity-30 hover:grayscale-0 hover:opacity-100 " />
                    <Image
                     height={8}
                     width={50}
                     src="/expressjs.png" alt="" className="h-12 cursor-pointer grayscale opacity-30 hover:grayscale-0 hover:opacity-100 " />
                    <Image
                     height={8}
                     width={50}
                     src="/reactjs.png" alt="" className="h-12 cursor-pointer grayscale opacity-30 hover:grayscale-0 hover:opacity-100 " />
                    <Image
                     height={8}
                     width={50}
                     src="/nextjs.png" alt="" className="h-12 cursor-pointer grayscale opacity-30 hover:grayscale-0 hover:opacity-100 " />
                    <Image
                     height={8}
                     width={50}
                     src="/docker.png" alt="" className="h-12 cursor-pointer grayscale opacity-30 hover:grayscale-0 hover:opacity-100 " />
                    <Image
                     height={8}
                     width={50}
                     src="/expressjs.png" alt="" className="h-12 cursor-pointer grayscale opacity-30 hover:grayscale-0 hover:opacity-100 " />
                    <Image
                     height={8}
                     width={50}
                     src="/nodejs.png" alt="" className="h-12 cursor-pointer grayscale opacity-30 hover:grayscale-0 hover:opacity-100 " />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeComponent;
