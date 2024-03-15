"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { productData } from '../../../../contants';
import ProductCard from '@/components/ProductCard';

const SliderSimilarProduct = () => {
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
        >
            {
                productData.map((item) => (
                    <SwiperSlide key={item._id}>
                        <ProductCard product={item} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default SliderSimilarProduct