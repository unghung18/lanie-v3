"use client"
import React, { useEffect, useRef } from 'react';
import "./Navbar.scss";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import Link from 'next/link';
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
    const headerRef = useRef<HTMLInputElement | null>(null);

    let oldScrollY = 0;
    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > oldScrollY && window.scrollY >= 200) {
                headerRef.current?.classList.add('scrollDown');
                headerRef.current?.classList.remove('scrollUp');
            } else {
                headerRef.current?.classList.add('scrollUp');
                headerRef.current?.classList.remove('scrollDown');
            }
            oldScrollY = window.scrollY;
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className='header' ref={headerRef}>
            <div className='header__container container'>
                <div className='header__search'>
                    <CiSearch className='header__search--icon' />
                    <input type="text" placeholder='What are you looking for?' />
                </div>

                <div className='header__menu--toggle'>
                    <MdMenuOpen size={24} />
                </div>
                <Link href="/" className='header__logo logo'>
                    Lanie
                </Link>

                <ul className='header__menu'>

                    <li className="header__menu--item">
                        <Link href="#">SHOP</Link>
                    </li>
                    <li className="header__menu--item">
                        <Link href="#">SẢN PHẨM</Link>
                    </li>
                    <li className="header__menu--item logo">Lanie</li>
                    <li className="header__menu--item">
                        <Link href="#">BỘ SƯU TẬP</Link>
                    </li>
                    <li className="header__menu--item">
                        <Link href="#">PAGES</Link>
                    </li>
                </ul>
                <div className='header__actions'>
                    <div>
                        <AiOutlineUser size={24} />
                    </div>
                    <div>
                        <IoMdHeartEmpty size={24} />
                    </div>
                    <div>
                        <BsHandbag size={24} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar