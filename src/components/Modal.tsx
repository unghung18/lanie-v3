"use client"
import React from 'react'
import ModalCart from './Modals/ModalCart/ModalCart'
import { useAppSelector } from "@/redux/hooks";
import ModalWishlist from './Modals/ModalWishlist/ModalWishlist';
import ModalQuickView from './Modals/ModalQuickView/ModalQuickView';

const Modal = () => {
    const { toggleCart } = useAppSelector((state) => state.toggleCart)
    const { toggleWishlist } = useAppSelector((state) => state.toggleWishlist)
    const { toggleQuickview } = useAppSelector((state) => state.toggleQuickview)

    return (
        <>
            <ModalCart open={toggleCart} />
            <ModalWishlist open={toggleWishlist} />
            <ModalQuickView open={toggleQuickview} />
        </>
    )
}

export default Modal