"use client";
import { getProductsByCategory } from "@/api/LanieApi";
import ProductCard from "@/components/ProductCard";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

async function getData() {
  const { data } = await getProductsByCategory("Áo");
  return data;
}

const SliderSimilarProduct = async () => {
  const data = await getData();
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
      {data.map((item: any) => (
        <SwiperSlide key={item._id}>
          <ProductCard product={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderSimilarProduct;
