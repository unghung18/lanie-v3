"use client"
import React from 'react';
import "./SliderMain.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const SliderMain = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="button-pagination ' + className + '"></span>';
        },
    };

    return (
        <div className='slider-main'>
            <Swiper
                grabCursor={true}
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                className='mySwiper'
            >
                <SwiperSlide>
                    <div className='slide__item'>
                        <div className='slide__item--image'/*  style={{ backgroundImage: `url("/bg5-2.png")` }} */>
                            <img src="/bg5-2.png" alt="slide image" />
                        </div>
                        <div className="slide__item--content container">
                            <div style={{ width: "50%" }}>
                                <div className='slide__item--content-main'>Sale! Up To 50% Off!</div>
                                <div className='slide__item--content-sub'> Elevate Your <br /> Wardrobe Today</div>
                                <div className='slide__item--content-button button'>
                                    Shop now
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide__item'>
                        <div className='slide__item--image'>
                            <img src="/bg5-1.png" alt="slide image" />
                        </div>
                        <div className="slide__item--content container">
                            <div style={{ width: "50%" }}>
                                <div className='slide__item--content-main'>Sale! Up To 50% Off!</div>
                                <div className='slide__item--content-sub'> Elevate Your <br /> Wardrobe Today</div>
                                <div className='slide__item--content-button button'>
                                    Shop now
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderMain