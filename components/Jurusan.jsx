"use client";
import { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import Link from "next/link";

export default function App() {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper container"
      >
        <SwiperSlide>
          <img src="/image/Cardhome/jurusan1.jpg" className="w-full" />
          <Link href={"/"}>Teknik Komputer Jaringan</Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
