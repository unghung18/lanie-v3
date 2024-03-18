"use client"

import { ProductProps } from '@/types/types';
import React, { useState, useEffect } from 'react';
import { IoIosHeartEmpty, IoMdCheckmark } from "react-icons/io";
import './ProductInfo.scss';
import RateReadOnly from '@/components/RateReadOnly';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggle } from '@/redux/slices/toggleCartSlice';
import { addItem } from '@/redux/slices/cartSlice';
import { addWishlistItem } from '@/redux/slices/wishlistSlice';
import { toggleQuickview } from '@/redux/slices/toggleQuickviewSlice';

const ProductInfo = ({ product }: {
    product: ProductProps;
}) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
    const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);

    const dispatch = useAppDispatch();

    const { wishlistItems } = useAppSelector(state => state.wishlist);

    function isExits() {
        for (const item of wishlistItems) {
            if (item._id === product._id) {
                return true;
            }
        }
        return false;
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }
    function handleAddCart() {
        dispatch(toggle(true));
        dispatch(toggleQuickview({
            toggle: false
        }));
        dispatch(addItem(
            {
                ...product,
                selectedColor: selectedColor && selectedColor,
                selectedSize: selectedSize && selectedSize,
                selectedQuantity: quantity
            }
        ))
    }

    return (
        <div className='product-info'>
            <div className='product-info__header'>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="product-info__header--category">
                        {product?.category}
                    </div>
                    <h1 className='product-info__header--name'>
                        {product?.title}
                    </h1>
                </div>
                <div className={`product-info__header-wishlist ${isExits() ? "active" : ""}`} onClick={() => dispatch(addWishlistItem(product))}>
                    <IoIosHeartEmpty size={20} />
                </div>
            </div>
            <div className='product-info__rating'>
                <RateReadOnly size={14} />
                <span>(123 bình luận )</span>
            </div>
            <div className='product-info__price'>
                <span>{product?.price.toLocaleString()}₫</span>
                <div style={{ width: "2px", height: "15px", backgroundColor: "#E9E9E9" }}></div>
                <span>{product?.price.toLocaleString()}₫</span>
                <span>{product?.sale}%</span>
            </div>

            <div className='product-info__color'>
                <div className="product-info__color-heading">
                    <span>Màu sắc:  </span>
                    <span><strong>{selectedColor && selectedColor} </strong></span>
                </div>
                <ul className='product-info__color-list'>
                    {
                        product?.colors.map((color, index) => (
                            <li key={index} style={{ backgroundColor: `${color.color}`, width: "40px", height: "40px", borderRadius: "50%" }} onClick={() => setSelectedColor(color.name)}>
                                {selectedColor && selectedColor == color.name && <IoMdCheckmark color='#fff' size={20} />}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='product-info__size'>
                <div className="product-info__size-heading">
                    {selectedSize == undefined && <div>Kích cỡ:</div>}
                    {selectedSize == "s" && <div>Kích cỡ:<strong> {selectedSize.toUpperCase()}</strong><span>(1m50 - 1m60 | 45kg - 50kg)</span></div>}
                    {selectedSize == "m" && <div>Kích cỡ:<strong> {selectedSize.toUpperCase()}</strong><span>(1m55 - 1m60 | 51kg - 55kg)</span></div>}
                    {selectedSize == "l" && <div>Kích cỡ:<strong> {selectedSize.toUpperCase()}</strong><span>(1m55 - 1m60 | 56kg - 60kg)</span></div>}
                    {selectedSize == "xl" && <div>Kích cỡ:<strong> {selectedSize.toUpperCase()}</strong><span>(1m60 - 1m65 | 61kg - 64kg)</span></div>}
                    {selectedSize == "2xl" && <div>Kích cỡ:<strong> {selectedSize.toUpperCase()}</strong><span>(1m60 - 1m65 | 65kg - 68kg)</span></div>}
                    {selectedSize == "3xl" && <div>Kích cỡ:<strong> {selectedSize.toUpperCase()}</strong><span>(1m60 - 1m65 | 69kg - 70kg)</span></div>}
                    <span style={{ textDecoration: "underline", cursor: "pointer", color: "#DB4444" }}>Sizes</span>
                </div>
                <ul className='product-info__size-list'>
                    {
                        product?.sizes.map((size, index) => (
                            <li key={index} onClick={() => setSelectedSize(size.name)} className={`${selectedSize && selectedSize == size.name && "active"}`}>
                                {size.name.toLocaleUpperCase()}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='product-info__quantity'>
                <div className="product-info__color-heading">
                    <span>Số lượng: </span>
                </div>
                <div className='product-info__quantity-button'>
                    <div >
                        <FaMinus onClick={() => handleDecrease()} style={{ cursor: "pointer" }} />
                        <span>{quantity}</span>
                        <FaPlus onClick={() => setQuantity(prev => prev + 1)} style={{ cursor: "pointer" }} />
                    </div>
                    {selectedColor ?
                        selectedSize ?
                            <div className='button' style={{ gap: "4px" }} onClick={() => handleAddCart()}><MdOutlineShoppingBag /><span>Thêm vào giỏ hàng</span></div>
                            :
                            <div className='button' style={{ gap: "4px", opacity: "0.7", pointerEvents: "none" }}><MdOutlineShoppingBag /><span>Chọn kích cỡ</span></div>
                        :
                        <div className='button' style={{ gap: "4px", opacity: "0.7", pointerEvents: "none" }}><MdOutlineShoppingBag /><span>Chọn màu sắc</span></div>
                    }
                </div>
            </div>

            <div style={{ width: "100%", height: "1px", backgroundColor: "#D9D9D9", marginTop: "35px" }}></div>

            <Link href="#" style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "10px" }}>
                <img src="/zalo.svg" alt="zalo image" style={{ width: "30px" }} />
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#2F5ACF" }}>Chat để được Lanie tư vấn ngay (8:30 - 22:00)</span>
            </Link>

            <div style={{ padding: "26px 20px", backgroundColor: "#D9D9D9", borderRadius: "6px", marginTop: "16px" }}>
                <h4 style={{ fontWeight: "600", lineHeight: "18px", letterSpacing: 0, marginBottom: "8px" }}>Mua ngay trong hôm nay</h4>
                <ul>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "5px", height: "5px", backgroundColor: "#000", borderRadius: "50%" }}></div>
                        <span style={{ color: "#2e2e2e", fontSize: "14px" }}>Miễn phí giao hàng toàn quốc cho đơn hàng trên 200,000đ.</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "5px", height: "5px", backgroundColor: "#000", borderRadius: "50%" }}></div>
                        <span style={{ color: "#2e2e2e", fontSize: "14px" }}>Hỗ trợ tư vấn từ 8:30 - 22:00 mỗi ngày</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "5px", height: "5px", backgroundColor: "#000", borderRadius: "50%" }}></div>
                        <span style={{ color: "#2e2e2e", fontSize: "14px" }}>Not impressed? Get a refund. You have 100 days to break our hearts.</span>
                    </li>
                </ul>
            </div>

            <div style={{ width: "100%", height: "1px", backgroundColor: "#D9D9D9", marginTop: "35px" }}></div>

            <div className='product-info__description'>
                <div className='product-info__description-heading'>
                    Thông tin sản phẩm
                </div>

                <ul>
                    <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span>-</span>
                        <span style={{ color: "#2e2e2e", fontSize: "14px", fontWeight: "500" }}>Chất liệu 100% Cotton mềm mại</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span>-</span>
                        <span style={{ color: "#2e2e2e", fontSize: "14px", fontWeight: "500" }}>Thoáng mát, thấm hút mồ hôi tốt</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span>-</span>
                        <span style={{ color: "#2e2e2e", fontSize: "14px", fontWeight: "500" }}>Vải có độ bền cao, không bị xù lông sau nhiều lần giặt</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span>-</span>
                        <span style={{ color: "#2e2e2e", fontSize: "14px", fontWeight: "500" }}>Phù hợp với: đi làm, đi chơi</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span>-</span>
                        <span style={{ color: "#2e2e2e", fontSize: "14px", fontWeight: "500" }}>Kiểu dáng: Regular loose dễ dàng phối đồ, tạo layer</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span>-</span>
                        <span style={{ color: "#2e2e2e", fontSize: "14px", fontWeight: "500" }}>Người mẫu: 181 cm - 81 kg, mặc áo size 2XL</span>
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span>-</span>
                        <span style={{ color: "#2e2e2e", fontSize: "14px", fontWeight: "500" }}>Tự hào sản xuất tại Việt Nam</span>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default ProductInfo;