"use client"
import React, { useEffect, useRef } from 'react';
import "../styles/Navbar.scss";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import Link from 'next/link';
import { MdMenuOpen } from "react-icons/md";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggle } from '@/redux/slices/toggleCartSlice';
import { toggleWishlist } from '@/redux/slices/toggleWishlistSlice';

const Navbar = () => {
    const { toggleCart } = useAppSelector((state) => state.toggleCart)
    const dispatch = useAppDispatch();
    const headerRef = useRef<HTMLInputElement | null>(null);

    let oldScrollY = 0;
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY == 0) {
                headerRef.current?.classList.add('scrollTop');
                headerRef.current?.classList.remove('scrollDown');
                headerRef.current?.classList.remove('scrollUp');
            }
            else if (window.scrollY > oldScrollY && window.scrollY >= 200) {
                headerRef.current?.classList.add('scrollDown');
                headerRef.current?.classList.remove('scrollUp');
                headerRef.current?.classList.remove('scrollTop');
            } else {
                headerRef.current?.classList.add('scrollUp');
                headerRef.current?.classList.remove('scrollDown');
                headerRef.current?.classList.remove('scrollTop');
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
                        <Link href="/">SHOP</Link>
                    </li>
                    <li className="header__menu--item">
                        <Link href="/product">SẢN PHẨM</Link>
                        <div className='mega-menu'>
                            <div className='mega-menu__container container'>
                                <div className='nav-link'>
                                    <div className='nav-link__item'>
                                        <h3>THEO SẢN PHẨM</h3>
                                        <ul>
                                            <li><Link href="/">Tất cả</Link></li>
                                            <li><Link href="/">Sản phẩm mới</Link></li>
                                        </ul>
                                    </div>
                                    <div className='nav-link__item'>
                                        <h3>QUẦN NỮ</h3>
                                        <ul>
                                            <li><Link href="/">Quần Jeans</Link></li>
                                            <li><Link href="/">Quần dài</Link></li>
                                            <li><Link href="/">Quần short</Link></li>
                                            <li><Link href="/">Quần lửng</Link></li>
                                            <li><Link href="/">Quần lót</Link></li>
                                        </ul>
                                    </div>
                                    <div className='nav-link__item'>
                                        <h3>ÁO NỮ</h3>
                                        <ul>
                                            <li><Link href="/">Áo sơ mi</Link></li>
                                            <li><Link href="/">Áo dài</Link></li>
                                            <li><Link href="/">Áo len</Link></li>
                                            <li><Link href="/">Áo khoác</Link></li>
                                        </ul>
                                    </div>
                                    <div className='nav-link__item'>
                                        <h3>PHỤ KIỆN</h3>
                                        <ul>
                                            <li><Link href="/">Tất cả</Link></li>
                                            <li><Link href="/">Sản phẩm mới</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='banner-ads'>
                                    <div className='banner-ads__item'>
                                        <div className='banner-ads__item-content'>
                                            <div>Tiết kiệm đến 200k </div>
                                            <div>Đồ bơi cho mùa hè của bạn</div>
                                            <div>Chỉ từ <span style={{ color: "#DB4444" }}>60k</span></div>
                                        </div>
                                        <img src="/sub-menu/banner-1.webp" alt="banner ads image" />
                                    </div>
                                    <div className='banner-ads__item'>
                                        <div className='banner-ads__item-content'>
                                            <div>Tiết kiệm đến 400K 200K</div>
                                            <div>Giảm giá 20% cho phụ kiện</div>
                                            <div>Chỉ từ <span style={{ color: "#DB4444" }}>299k</span></div>
                                        </div>
                                        <img src="/sub-menu/banner-2.webp" alt="banner ads image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="header__menu--item logo"><Link href="/">Lanie</Link></li>
                    <li className="header__menu--item">
                        <Link href="/collection">BỘ SƯU TẬP</Link>
                    </li>
                    <li className="header__menu--item" style={{ position: "relative" }}>
                        <Link href="#">PAGES</Link>
                        <div className='sub-menu'>
                            <ul>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                                <li><Link href="/faq">FAQs</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className='header__actions'>
                    <div style={{ cursor: "pointer" }}>
                        <AiOutlineUser size={24} />
                    </div>
                    <div style={{ cursor: "pointer" }} onClick={() => dispatch(toggleWishlist(true))}>
                        <IoMdHeartEmpty size={24} />
                    </div>
                    <div style={{ cursor: "pointer" }}>
                        <BsHandbag size={24} onClick={() => dispatch(toggle(true))} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar