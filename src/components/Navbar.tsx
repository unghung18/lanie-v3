"use client";

import React, { useEffect, useRef, useState } from 'react';
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
import { megaMenuNavLinks } from '../../contants';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {

    const [querySearch, setQuerySearch] = useState<string>("");
    const [isActiveLoginDropdown, setIsActiveLoginDropdown] = useState<boolean>(false);

    const { toggleCart } = useAppSelector((state) => state.toggleCart)
    const { totalQuantity } = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch();
    const pathname = usePathname();
    const headerRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();

    const handleChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuerySearch(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        router.push(`/search-result?query=${querySearch}`);
        setQuerySearch("");
    }

    useEffect(() => {
        let oldScrollY = 0;

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
                <form className='header__search' onSubmit={handleSubmit}>
                    <button className='header__search--icon'><CiSearch /></button>
                    <input type="text" placeholder='What are you looking for?' value={querySearch} onChange={handleChangeSearchInput} />
                </form>

                <div className='header__menu--toggle'>
                    <MdMenuOpen size={24} />
                </div>

                <Link href="/" className='header__logo logo'>
                    Lanie
                </Link>

                <ul className='header__menu'>

                    <li className={`header__menu--item ${pathname == "/" ? "active" : ""}`}>
                        <Link href="/">SHOP</Link>
                    </li>
                    <li className={`header__menu--item ${pathname == "/product" ? "active" : ""}`}>
                        <Link href="/product">SẢN PHẨM</Link>
                        <div className='mega-menu'>
                            <div className='mega-menu__container container'>
                                <div className='nav-link'>
                                    {megaMenuNavLinks.map((item, index) => (
                                        <div className='nav-link__item' key={index}>
                                            <h3>{item.category.toLocaleUpperCase()}</h3>
                                            <ul>
                                                {item.navList.map((item, index) => (
                                                    <li key={index}><Link href={item.path}>{item.title}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
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
                    <div className='header__actions-user' onClick={() => setIsActiveLoginDropdown(!isActiveLoginDropdown)}>
                        <AiOutlineUser size={24} />

                        <div className={`login-dropdown ${isActiveLoginDropdown ? "active" : ""}`}>
                            <Link href="/login" className='button-login button-main'>Login</Link>
                            <div className='text-sub'>
                                Don’t have an account?
                                <Link href="/register">Register</Link>
                            </div>

                            <div className='support'>Support</div>
                        </div>
                    </div>
                    <div className='header__actions-wishlist' onClick={() => dispatch(toggleWishlist(true))}>
                        <IoMdHeartEmpty size={24} />
                    </div>
                    <div className='header__actions-cart'>
                        <span>{totalQuantity}</span>
                        <BsHandbag className='icon' size={24} onClick={() => dispatch(toggle(true))} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar