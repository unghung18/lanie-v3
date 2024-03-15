import React from 'react';
import { IoClose } from "react-icons/io5";
import './ModalWishlist.scss';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleWishlist } from '@/redux/slices/toggleWishlistSlice';

const ModalWishlist = ({ open }: {
    open: boolean;
}) => {

    const { wishlistItems } = useAppSelector(state => state.wishlist)
    const dispatch = useAppDispatch();
    return (
        <div className={`overlay ${open && "active"}`}>
            <div className='modal-wishlist'>
                <div className='heading'>
                    <div className='heading__title'>Yêu thích</div>
                    <div className='heading__close' onClick={() => dispatch(toggleWishlist())}>
                        <IoClose />
                    </div>
                </div>
                <div className='list-product'>
                    {wishlistItems.map((item: any) => (
                        <div className='product-item' key={item._id}>
                            <div className='product-item__info'>
                                <div className="product-item__info-image">
                                    <img src="/product/product1.png" alt="product image" />
                                </div>
                                <div className='product-item__info-content'>
                                    <div className='name'>mesh shirt</div>
                                    <div className='price'>
                                        <span>150,000đ</span>
                                        <span style={{ textDecoration: "line-through", color: "rgb(160 160 160)" }}>150,000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div className='product-item__button'>Remove</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ModalWishlist