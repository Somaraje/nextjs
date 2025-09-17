"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/Reg_slide.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Reg_slide() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/images/slide1.jpg" alt="hello" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide1.jpg" alt="hello" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide1.jpg" alt="hello" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide1.jpg" alt="hello" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide1.jpg" alt="hello" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide1.jpg" alt="hello" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide1.jpg" alt="hello" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide1.jpg" alt="hello" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide1.jpg" alt="hello" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide1.jpg" alt="hello" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide1.jpg" alt="hello" /></SwiperSlide>
        <SwiperSlide><img src="/images/slide1.jpg" alt="hello" /></SwiperSlide>
      </Swiper>
    </>
  );
}
