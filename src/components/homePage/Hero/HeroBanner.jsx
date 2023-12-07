"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import VideoScreen from "../Video/VideoScreen";

const HeroBanner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" w-full h-[500px] relative">
            <Image
              src={"/image/banner1.jpg"}
              width={1000}
              height={1200}
              alt="hero"
              className=" w-full h-full object-cover"
            />
            <div className=" absolute top-0 left-0 flex items-center justify-center w-full h-full bg-[#4253B380]/50">
              <div className=" text-white text-center">
                <h2 className=" text-[35px] font-medium ">MMagrovet</h2>
                <p className=" text-[18px] font-medium my-3">
                  A Big Project of Bangladesh
                </p>
                <div className=" mt-8">
                  <Link
                    href={"/"}
                    className=" py-2 px-5 mt-5 rounded-md border-2 border-white"
                  >
                    Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-[500px] relative">
            {/* <VideoScreen/> */}

            <video
              width="100%"
              height="100%"
              className="bg-video"
              src="https://www.youtube.com/embed/umpV7KTgtik"
              type="video/mp4"
              preload="auto"
              autoPlay={true}
              loop="loop"
              muted={true}
              poster=""
            >
              <source src="https://www.youtube.com/embed/umpV7KTgtik" type="video/webm" />
              <source src="https://www.youtube.com/embed/umpV7KTgtik" type="video/mp4" />
            </video>

            {/* <iframe
              width="1680"
              height="901"
              src="https://www.youtube.com/embed/umpV7KTgtik"
              title="mmagrovet"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}

            {/* <Image
              src={"/image/banner1.jpg"}
              width={1000}
              height={1200}
              alt="hero"
              className=" w-full h-full"
            /> */}
            <div className=" absolute top-0 left-0 flex items-center justify-center w-full h-full bg-violet-600/50">
              <div className=" text-white text-center">
                <h2 className=" text-[35px] font-medium ">MMagrovet</h2>
                <p className=" text-[18px] font-medium my-3">
                 Animal health Care of Bangladesh
                </p>
                <div className=" mt-8">
                  <Link
                    href={"/"}
                    className=" py-2 px-5 mt-5 rounded-md border-2 border-white"
                  >
                    Fish Treatment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-[500px] relative">
            <Image
              src={"/image/banner2.jpg"}
              width={1000}
              height={1200}
              alt="hero"
              className=" w-full h-full object-cover"
            />
            <div className=" absolute top-0 left-0 flex items-center justify-center w-full h-full bg-[#2B43B180]/50">
              <div className=" text-white text-center">
                <h2 className=" text-[35px] font-medium ">MMagrovet</h2>
                <p className=" text-[18px] font-medium my-3">
                    Aqua medicine Product manufacture 
                </p>
                <div className=" mt-8">
                  <Link
                    href={"/"}
                    className=" py-2 px-5 mt-5 rounded-md border-2 border-white"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroBanner;
