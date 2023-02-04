"use client";
import { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <Image
            src={"/image/Carousel/baner1.png"}
            alt="aaa"
            width={2000}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/image/Carousel/baner2.jpg"}
            alt="aaa"
            width={2000}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/image/Carousel/baner3.jpg"}
            alt="aaa"
            width={2000}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/image/Carousel/baner4.jpg"}
            alt="aaa"
            width={2000}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/image/Carousel/baner5.jpg"}
            alt="aaa"
            width={2000}
            height={500}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
