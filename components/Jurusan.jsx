"use client";
import { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function Jurusan() {
  return (
    <div className="container py-4 ">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          320: {
            width: 320,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={"/image/Cardhome/jurusan1.jpg"}
            className="rounded-xl"
            alt="aaa"
            width={2000}
            height={20}
          />
          <h1 class="absolute text-center text-3xl font-semibold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Teknik Komputer Jaringan
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/image/Cardhome/jurusan2.jpg"}
            className="rounded-xl"
            alt="aaa"
            width={2000}
            height={20}
          />
          <h1 class="absolute text-center text-3xl font-semibold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Multimedia
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/image/Cardhome/jurusan3.jpg"}
            className="rounded-xl"
            alt="aaa"
            width={3000}
            height={40}
          />
          <h1 class="absolute text-center text-3xl font-semibold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Perkantoran
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/image/Cardhome/jurusan2.jpg"}
            className="rounded-xl"
            alt="aaa"
            width={2000}
            height={20}
          />
          <h1 class="absolute text-center text-3xl font-semibold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Akuntansi
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/image/Cardhome/jurusan5.jpg"}
            className="rounded-xl"
            alt="aaa"
            width={2000}
            height={20}
          />
          <h1 class="absolute text-center text-3xl font-semibold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Jasaboga
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
