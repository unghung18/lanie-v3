"use client"
import React from 'react'
import ModalCart from './Modals/ModalCart/ModalCart'
import { useAppSelector } from "@/redux/hooks";

const Modal = () => {
    const { toggleCart } = useAppSelector((state) => state.toggleCart)

    return (
        <>
            <ModalCart open={toggleCart} />
        </>
    )
}

export default Modal