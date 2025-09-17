"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// ...rest of your Swiper component


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function sli() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        style={{ margin:"43px"}}
      >
        <SwiperSlide
          style={{
            width: "487px",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <img
            src="/images/slide1.jpg"
            alt="hello"
            style={{ borderRadius: "70px" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "487px",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <img
            src="/images/slide2.jpg"
            alt="hello"
            style={{ borderRadius: "70px" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "487px",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <img
            src="/images/slide3.jpg"
            alt="hello"
            style={{ borderRadius: "70px" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "487px",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <img
            src="/images/slide1.jpg"
            alt="hello"
            style={{ borderRadius: "70px" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "487px",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <img
            src="/images/slide2.jpg"
            alt="hello"
            style={{ borderRadius: "70px" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "487px",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <img
            src="/images/slide3.jpg"
            alt="hello"
            style={{ borderRadius: "70px" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "487px",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <img
            src="/images/slide1.jpg"
            alt="hello"
            style={{ borderRadius: "70px" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "487px",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <img
            src="/images/slide2.jpg"
            alt="hello"
            style={{ borderRadius: "70px" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "487px",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <img
            src="/images/slide3.jpg"
            alt="hello"
            style={{ borderRadius: "70px" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
