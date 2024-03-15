import React from 'react';
import './ModalCart.scss';
import { RecommendProductCart } from '../../../../contants';
import { SlHandbag } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { BsTrash } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggle } from '@/redux/slices/toggleCartSlice';
import { deleteItem } from '@/redux/slices/cartSlice';
import Link from 'next/link';
const ModalCart = ({ open }: {
    open: boolean;
}) => {

    const { cartItems, totalAmount, totalQuantity } = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch();

    return (
        <div className={`overlay ${open ? "active" : ""}`}>
            <div className='modal-cart'>
                <div className='modal-cart__left'>
                    <div className='cart__left-heading'>
                        Bạn có thể sẽ thích
                    </div>
                    <ul className='cart__left-list'>
                        {RecommendProductCart.map((item) => (
                            <li key={item._id}>
                                <div className='cart__left-list-item-product'>
                                    <div className='cart__left-list-item-product-image' style={{ width: "100px", height: "100px", borderRadius: "8px", overflow: "hidden" }}>
                                        <img src={item.images[0]} alt="product image" />
                                    </div>
                                    <div className='cart__left-list-item-product-info'>
                                        <div className='name'>
                                            {item.title}
                                        </div>
                                        <div className='price'>
                                            <span className='price-origin'>{item.price}₫</span>
                                            <span className='price-sale'>{item.price}₫</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart__left-list-item-button'>
                                    <SlHandbag />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='modal-cart__right'>
                    <div className='cart__right-heading'>
                        <div className='cart__right-heading--title'>Shopping Cart</div>
                        <div className='cart__right-heading--close' onClick={() => dispatch(toggle(false))}>
                            <IoClose />
                        </div>
                    </div>
                    <div className='cart__right-time'>
                        <span>🔥</span>
                        <p>Your cart will expire in <span style={{ color: "rgb(219 68 68)", fontSize: "14px", lineHeight: "22px", fontWeight: "600", }}>0:00</span> minutes!.  Please checkout now before your items sell out!</p>
                    </div>
                    <div className='cart__right-listproduct'>
                        {cartItems.map((item: any) => (
                            <div className='product-item' key={item._id}>
                                <div className="product-item__image">
                                    <img src={item.images[0]} alt="product image" />
                                </div>
                                <div className='product-item__info'>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span>Mesh Shirt</span>
                                        <span onClick={() => dispatch(deleteItem(item._id))}>
                                            <BsTrash color='red' style={{ cursor: "pointer" }} size={20} />
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "12px", gap: "12px" }}>
                                        <div style={{ color: "rgb(160 160 160)", textTransform: "capitalize", fontSize: "14px", fontWeight: "400" }}>{item.selectedSize} / {item.selectedColor} / SL: {item.selectedQuantity}</div>
                                        <div>{item.selectedTotalPrice.toLocaleString()}₫</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='cart__right-footer'>
                        <div className='heading'>
                            <span>Subtotal</span>
                            <span>{totalAmount.toLocaleString()}₫</span>
                        </div>
                        <div className='buttons'>
                            <div className='button-main'>GIỎ HÀNG</div>
                            <div className='button-main'>THANH TOÁN</div>
                        </div>
                        <div className='continue-shopping-btn'><Link href="/product" onClick={() => dispatch(toggle(false))}>TIẾP TỤC MUA HÀNG</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCart;