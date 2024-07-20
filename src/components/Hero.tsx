"use client";
import React from 'react';
import {Swiper, SwiperSlide } from"swiper/react"; 
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules"
import Image from 'next/image';
import Img1 from"/public/slider-image-1.png";
import Img2 from"/public/slider-image-2.png";


const Hero = () => {
  return (
    <div className='mt-2'>
      <div className="main-container">
          <Swiper 
          modules={[Autoplay, Pagination]}
        autoplay={{delay: 5000}}
        speed={500}
        pagination={{clickable: true}}
        spaceBetween={10}
        slidesPerView={1}
        className='h-full w-full'
          >
            <SwiperSlide>
               
                <Image
                src={Img1}
                 alt=''
                className='h-full w-full object-cover'
                />
            </SwiperSlide>

            <SwiperSlide>
                <Image
                src={Img2}
                alt=''
                className='h-full w-full object-cover'
                />
            </SwiperSlide>
          </Swiper>
      </div>
    </div>
  )
}

export default Hero
