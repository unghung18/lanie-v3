import React from 'react';
import { IoClose } from "react-icons/io5";
import './ModalWishlist.scss';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleWishlist } from '@/redux/slices/toggleWishlistSlice';
import { deleteWishlistItem } from '@/redux/slices/wishlistSlice';
import Link from 'next/link';

const ModalWishlist = ({ open }: {
    open: boolean;
}) => {

    const { wishlistItems } = useAppSelector(state => state.wishlist);
    const dispatch = useAppDispatch();

    return (
        <div className={`overlay ${open ? "active" : ""}`}>
            <div className='modal-wishlist'>
                <div className='modal-wishlist__heading'>
                    <div className='heading__title'>Yêu thích</div>
                    <div className='heading__close' onClick={() => dispatch(toggleWishlist(false))}>
                        <IoClose />
                    </div>
                </div>
                <div className='list-product'>
                    {wishlistItems.map((item: any) => (
                        <div className='product-item' key={item._id}>
                            <div className='product-item__info'>
                                <div className="product-item__info-image">
                                    <img src={item.images[0]} alt="product image" />
                                </div>
                                <div className='product-item__info-content'>
                                    <div className='name'>{item.title}</div>
                                    <div className='price'>
                                        <span>{item.price.toLocaleString()}đ</span>
                                        <span style={{ textDecoration: "line-through", color: "rgb(160 160 160)" }}>{item.price.toLocaleString()}đ</span>
                                    </div>
                                </div>
                            </div>
                            <div className='product-item__button' onClick={() => dispatch(deleteWishlistItem(item._id))}>Remove</div>
                        </div>
                    ))}
                </div>
                <div className='modal-wishlist__footer'>
                    <div className='button-main'>XEM TẤT CẢ</div>
                    <div><Link href="/product" onClick={() => dispatch(toggleWishlist(false))}>TIẾP TỤC MUA HÀNG</Link></div>
                </div>
            </div>
        </div>
    )
}

export default ModalWishlist