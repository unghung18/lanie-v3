"use client"
import React from 'react'
import ModalCart from './Modals/ModalCart/ModalCart'
import { useAppSelector } from "@/redux/hooks";
import ModalWishlist from './Modals/ModalWishlist/ModalWishlist';

const Modal = () => {
    const { toggleCart } = useAppSelector((state) => state.toggleCart)
    const { toggleWishlist } = useAppSelector((state) => state.toggleWishlist)

    return (
        <>
            <ModalCart open={toggleCart} />
            <ModalWishlist open={toggleWishlist} />
        </>
    )
}

export default Modal