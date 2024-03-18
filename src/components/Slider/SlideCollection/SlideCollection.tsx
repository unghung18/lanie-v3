"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "./SlideCollection.scss";
import { collectionData } from '../../../../contants';
import Link from 'next/link';

const SlideCollection = () => {

    return (
        <Swiper
            navigation={true}
            breakpoints={{
                1200: {
                    spaceBetween: 30,
                    slidesPerView: 4,
                },
                760: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                },
                0: {
                    spaceBetween: 30,
                    slidesPerView: 2,
                },
            }}
            modules={[Navigation]}
            loop={true}
            className='slide-collections'
        >
            {
                collectionData.map((item) => (
                    <SwiperSlide key={item._id}>
                        <div className="slide-collections__item">
                            <div className="slide-collections__item--img">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <Link href={item.navLink} className="slide-collections__item--name">
                                {item.name}
                            </Link>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default SlideCollection