import React from 'react';
import './ModalQuickView.scss';
import { IoClose } from 'react-icons/io5';
import ProductInfo from '@/app/(shop)/product/[id]/_ProductInfo/ProductInfo';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleQuickview } from '@/redux/slices/toggleQuickViewSlice';

const ModalQuickView = ({ open }: {
    open: boolean
}) => {

    const { product } = useAppSelector(state => state.toggleQuickview);
    const dispatch = useAppDispatch();

    return (
        <div className={`overlay ${open ? "active" : ""}`}>
            <div className='modal-quickview'>
                <div className='modal-quickview__container'>
                    <div className='list-image'>
                        {product?.images.map((item, index) => (
                            <div key={index} className='list-image__item'>
                                <img src={item} alt="product image" />
                            </div>
                        ))}
                    </div>
                    <div className='info'>
                        <div className='heading'>
                            <div className='heading-title'>
                                Xem Nhanh
                            </div>
                            <div className='heading-close' onClick={() => dispatch(toggleQuickview({
                                toggle: false
                            }))}>
                                <IoClose />
                            </div>
                        </div>
                        <div className='info-main'>
                            <ProductInfo product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalQuickView