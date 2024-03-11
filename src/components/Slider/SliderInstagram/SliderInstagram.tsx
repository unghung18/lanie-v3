"use client"

import React from 'react';
import './SliderInstagram.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";

const SliderInstagram = () => {
    return (
        <Swiper
            breakpoints={{
                1200: {
                    slidesPerView: 6,
                },
                993: {
                    slidesPerView: 5,
                },
                680: {
                    slidesPerView: 3,
                },
                0: {
                    slidesPerView: 2,
                },
            }}
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
        >

            <SwiperSlide className="instagram__galery__item" >
                <Link href="#">
                    <img src="/instagram/1.webp" alt="" />
                    <div className="instagram__galery__item--icon"><FaInstagram size={24} /></div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="instagram__galery__item" >
                <Link href="#">
                    <img src="/instagram/2.webp" alt="" />
                    <div className="instagram__galery__item--icon"><FaInstagram size={24} /></div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="instagram__galery__item" >
                <Link href="#">
                    <img src="/instagram/3.webp" alt="" />
                    <div className="instagram__galery__item--icon"><FaInstagram size={24} /></div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="instagram__galery__item" >

                <Link href="#">
                    <img src="/instagram/4.webp" alt="" />
                    <div className="instagram__galery__item--icon"><FaInstagram size={24} /></div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="instagram__galery__item" >
                <Link href="#">
                    <img src="/instagram/5.webp" alt="" />
                    <div className="instagram__galery__item--icon"><FaInstagram size={24} /></div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="instagram__galery__item" >
                <Link href="#">
                    <img src="/instagram/0.webp" alt="" />
                    <div className="instagram__galery__item--icon"><FaInstagram size={24} /></div>
                </Link>
            </SwiperSlide>
        </Swiper>
    )
}

export default SliderInstagram