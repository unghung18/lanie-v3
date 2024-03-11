"use client";

import React from 'react';
import "./BannerTop.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const BannerTop = () => {
    return (
        <div className='bannerTop'>
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                className='mySwiper'
            >
                <SwiperSlide style={{ textAlign: "center" }}>
                    <div style={{ padding: "0 40px" }}>Get summer-ready: 10% off swim suits</div>
                </SwiperSlide>
                <SwiperSlide style={{ textAlign: "center" }}>
                    <div style={{ padding: "0 40px" }}>Free shipping on all orders over $50</div>
                </SwiperSlide>
                <SwiperSlide style={{ textAlign: "center" }}>
                    <div style={{ padding: "0 40px" }}>Get 10% off on selected items</div>
                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export default BannerTop