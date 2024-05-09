"use client"

import React, { useState, useEffect } from 'react';
import "../../../styles/cart/cart.scss";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { BsTrash } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addItem, deleteItem, removeItem } from '@/redux/slices/cartSlice';
import { couponData } from '../../../../contants';
import { CouponProps } from '@/types/types';
import { useRouter } from 'next/navigation';

const Page = () => {

    const { totalAmount, cartItems } = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [discountCost, setDiscountCost] = useState<CouponProps | undefined>(undefined);
    const [shipCost, setShipCost] = useState<number>(20000);
    const [couponCode, setCouponCode] = useState<string>("");

    const handleChangeInputCoupon = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCouponCode(event.target.value);
    }

    const handleApplyInputCode = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.code == "Enter") {
            var validCoupon = false;
            for (const item of couponData) {
                if (item.code === couponCode) {
                    if (totalAmount >= item.minimum) {
                        setDiscountCost(item);
                        setCouponCode("");
                    }
                    else {
                        alert(`Đơn hàng phải tối thiểu ${item.minimum.toLocaleString()}đ`)
                    }
                    validCoupon = true;
                    break;
                }

            }

            if (!validCoupon) {
                setCouponCode("");
                alert("Mã giảm giá không đúng");
            }
        }
    }

    const handleApplyEntertCode = () => {
        var validCoupon = false;
        for (const item of couponData) {
            if (item.code === couponCode) {
                if (totalAmount >= item.minimum) {
                    setDiscountCost(item);
                    setCouponCode("");
                }
                else {
                    alert(`Đơn hàng phải tối thiểu ${item.minimum.toLocaleString()}đ`)
                }
                validCoupon = true;
                break;
            }
        }
        if (!validCoupon) {
            setCouponCode("");
            alert("Mã giảm giá không đúng");
        }
    }

    const handleApplyCode = (item: any) => {
        if (totalAmount >= item.minimum) {
            setDiscountCost(item)
        }
        else {
            alert(`Đơn hàng phải tối thiểu ${item.minimum.toLocaleString()}đ`)
        }
    }

    useEffect(() => {
        const per = (totalAmount / 300000) * 100;
        if (per >= 100) {
            setShipCost(0)
        }
        else {
            setShipCost(20000);
        }

        if (discountCost && totalAmount < discountCost.minimum) {
            setDiscountCost(undefined)
        }
    }, [totalAmount]);

    return (
        <div className='cart-page'>
            <div className='breadcum'>
                <div className='breadcum__container container'>
                    <span>TRANG CHỦ</span>
                    <span>/</span>
                    <span>GIỎ HÀNG</span>
                </div>
            </div>
            <div className='cart-page__content container'>
                <div className='table'>
                    <div className='time'>
                        <span>🔥</span>
                        <p>Your cart will expire in <span style={{ color: "rgb(219 68 68)", fontSize: "14px", lineHeight: "22px", fontWeight: "600", }}>0:00</span> minutes!.  Please checkout now before your items sell out!</p>
                    </div>
                    <div className='tow-bar'>
                        <div>Mua thêm <span style={{ fontWeight: "bold", margin: "0 3px" }}> {300000 - totalAmount <= 0 ? 0 : (300000 - totalAmount).toLocaleString()}₫</span> nữa để nhận <span style={{ fontWeight: "bold" }}>Miễn phí vận chuyển</span></div>
                        <div className='bar'>
                            <div className='line' style={{ width: `${(totalAmount / 300000) * 100 > 100 ? 100 : (totalAmount / 300000) * 100}%` }}></div>
                        </div>
                    </div>
                    <div className="table-main">
                        <div className='table-main__container'>
                            <div className='table-main__heading'>
                                <div style={{ display: "flex" }}>
                                    <div style={{ width: "47%", textAlign: "center" }}>Product</div>
                                    <div style={{ width: "9.333333%", textAlign: "center" }}>Price</div>
                                    <div style={{ width: "17.666667%", textAlign: "center" }}>Quantity</div>
                                    <div style={{ width: "17.666667%", textAlign: "center" }}>Total Price</div>
                                </div>
                            </div>
                            <div className='table-main__content'>
                                {
                                    cartItems.map((item) => (
                                        <div className='item' key={item._id}>
                                            <div className='item-product'>
                                                <div className='item-product__image'>
                                                    <img src={item.images[0]} alt={item.title} />
                                                </div>
                                                <div className='item-product__name'>
                                                    <div>{item.title}</div>
                                                    <div>{item.selectedSize} / {item.selectedColor}</div>
                                                </div>
                                            </div>
                                            <div className='item-price'>
                                                {item.price.toLocaleString()}₫
                                            </div>
                                            <div className='item-quantity'>
                                                <div>
                                                    <FaMinus onClick={() => dispatch(removeItem(item._id))} style={{ cursor: "pointer" }} />
                                                    <span>{item.selectedQuantity}</span>
                                                    <FaPlus onClick={() => dispatch(addItem(item))} style={{ cursor: "pointer" }} />
                                                </div>
                                            </div>
                                            <div className='item-totalprice'>
                                                {item.selectedTotalPrice.toLocaleString()}₫
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => dispatch(deleteItem(item._id))}>
                                                <BsTrash color='red' size={20} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='input-discount'>
                        <input type="text" placeholder='Nhập mã voucher của bạn !' name='couponcode' value={couponCode} onChange={handleChangeInputCoupon} onKeyDown={handleApplyInputCode} />
                        <div className='button-main' onClick={() => handleApplyEntertCode()}>NHẬP MÃ</div>
                    </div>
                    <div className='list-vouchers'>
                        {couponData.map((item) => (
                            <div className={`voucher-item ${discountCost?.code == item.code ? "active" : ""}`} key={item._id}>
                                <div className="voucher-item__header">
                                    <div className='discount'>
                                        <div>Giảm giá</div>
                                        <div style={{ fontWeight: "bold" }}>đến {item.discount}%</div>
                                    </div>
                                    <div className='description'>
                                        <div>Cho tất cả đơn hàng</div>
                                        <div>từ {Math.floor(item.minimum / 1000)}k</div>
                                    </div>
                                </div>
                                <div className="voucher-item__footer">
                                    <div className='code'>
                                        Mã: {item.code}
                                    </div>
                                    <div className={`apply-button ${discountCost?.code == item.code ? "active" : ""}`} onClick={() => handleApplyCode(item)}>
                                        {discountCost?.code == item.code ? "Applied" : "Apply Code"}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='checkout'>
                    <div className='heading'>
                        Đơn Hàng
                    </div>
                    <div className='subtotal'>
                        <div>Tạm tính</div>
                        <div>{totalAmount.toLocaleString()}₫</div>
                    </div>
                    <div className='discount' >
                        <div>Giảm giá</div>
                        <div>- {discountCost ? Math.floor(discountCost.discount * totalAmount / 100).toLocaleString() : 0}₫</div>
                    </div>
                    <div className='shipping' >
                        <div>Phí giao hàng</div>
                        <div>+ {shipCost.toLocaleString()}₫</div>
                    </div>
                    <div className='total' >
                        <div>Tổng cộng</div>
                        <div>{discountCost ? (totalAmount - Math.floor(discountCost.discount * totalAmount / 100) + shipCost).toLocaleString() : (totalAmount + shipCost).toLocaleString()}₫</div>
                    </div>
                    <div className='button-block' >
                        <div onClick={() => router.push('https://lanie.netlify.app/checkout')} className='button-main'>Tiến hành thanh toán</div>
                        <div>Tiếp tục mua hàng</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page