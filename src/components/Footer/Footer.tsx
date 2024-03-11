import React from 'react';
import './Footer.scss';
import Link from 'next/link';
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer__container container'>
                <div className='footer__container--logo'>Lanie</div>
                <div className='footer__container--widgets'>
                    <div className='footer__container--widgets-item about'>
                        <div>Lanie Shop</div>
                        <div>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam frin-gilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.</div>
                    </div>
                    <div className='footer__container--widgets-item question'>
                        <div>Giải đáp</div>
                        <ul>
                            <li>
                                <Link href="#">Chính sách giao nhận - Vận chuyển</Link>
                            </li>
                            <li>
                                <Link href="#">Hướng dẫn thanh toán</Link>

                            </li>
                            <li>
                                <Link href="#">Tra cứu đơn hàng</Link>

                            </li>
                            <li>
                                <Link href="#">Hướng dẫn chọn Size</Link>

                            </li>
                            <li>
                                <Link href="#">Quy định đổi hàng</Link>

                            </li>
                            <li>
                                <Link href="#">Quy định bảo hành và sửa chữa</Link>

                            </li>
                            <li>
                                <Link href="#">Khách hàng thân thiết</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__container--widgets-item info'>
                        <div>Giới thiệu</div>
                        <ul>
                            <li>
                                <Link href="#">Giới thiệu</Link>
                            </li>
                            <li>
                                <Link href="#">Ngọc Anh Blog</Link>

                            </li>
                            <li>
                                <Link href="#">Tuyển dụng</Link>

                            </li>
                            <li>
                                <Link href="#">Showroom</Link>

                            </li>
                            <li>
                                <Link href="#">Liên hệ</Link>

                            </li>
                        </ul>
                    </div>
                    <div className='footer__container--widgets-item contact'>
                        <div>Liên hệ</div>
                        <div>
                            <div>
                                <span>Tên thương hiệu:</span>
                                <span>Lanie Clothing</span>
                            </div>
                            <div>
                                <span>Địa chỉ:</span>
                                <span>Thôn Đông Thành, Trường Yên, Hoa Lư, Ninh Bình</span>
                            </div>
                            <div>
                                <span>Hotline:</span>
                                <span>+84966976692</span>
                            </div>
                            <div>
                                <span>Email:</span>
                                <span>ngocanh1997vn@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer__container--socials'>
                    <Link href="#">
                        <FaTiktok className='footer__container--socials-icon' />
                    </Link>
                    <Link href="#">
                        <FaFacebookF className='footer__container--socials-icon' />
                    </Link>
                    <Link href="#">
                        <FaInstagram className='footer__container--socials-icon' />
                    </Link>
                </div>
                <div className='footer__container--copyright'>Cory right ©2023 All rights reserved</div>
            </div>
        </section>
    )
}

export default Footer