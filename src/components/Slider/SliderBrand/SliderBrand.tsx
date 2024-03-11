"use client"

import React from 'react';
import './SliderBrand.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const SliderBrand = () => {
    return (
        <Swiper
            breakpoints={{
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 16
                },
                993: {
                    slidesPerView: 5,
                    spaceBetween: 16
                },
                680: {
                    slidesPerView: 3,
                    spaceBetween: 16
                },
                0: {
                    slidesPerView: 2,
                    spaceBetween: 16
                },
            }}
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
        >

            <SwiperSlide className='brand__item'>
                <img src="/brand/1.webp" alt="brand" />
            </SwiperSlide>
            <SwiperSlide className='brand__item' >
                <img src="/brand/2.webp" alt="brand" />
            </SwiperSlide>
            <SwiperSlide className='brand__item'>
                <img src="/brand/3.webp" alt="brand" />
            </SwiperSlide>
            <SwiperSlide className='brand__item'>
                <img src="/brand/4.webp" alt="brand" />
            </SwiperSlide>
            <SwiperSlide className='brand__item'>
                <img src="/brand/5.webp" alt="brand" />
            </SwiperSlide>
            <SwiperSlide className='brand__item'>
                <img src="/brand/6.webp" alt="brand" />
            </SwiperSlide>
        </Swiper>
    )
}

export default SliderBrand