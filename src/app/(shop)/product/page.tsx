"use client"

import React, { useState } from 'react';
import '../../../styles/product/product.scss';
import { Slider } from 'antd';
import { FaChevronDown } from "react-icons/fa6";
import { productData } from '../../../../contants';
import ProductCard from '@/components/ProductCard';

const Page = () => {

    const product = productData;
    const [selectedLayout, setSelectedLayout] = useState(3);
    return (
        <div className='product'>
            <div className='breadcum'>
                <div className='breadcum__container container'>
                    <span>TRANG CHỦ</span>
                    <span>/</span>
                    <span>SẢN PHẨM</span>
                </div>
            </div>
            <img src="/banner-product.webp" alt="outfit of the day" />

            <div className='product__container container'>
                <div className='product-sidebar'>
                    <div className="filter-type">
                        <div className="filter-heading">Product Type</div>
                        <ul className='list-type'>
                            <li className='list-type__item'>
                                <span>T-Shirt</span>
                                <span>(12)</span>
                            </li>
                            <li className='list-type__item'>
                                <span>Dress</span>
                                <span>(3)</span></li>
                            <li className='list-type__item'>
                                <span>Top</span>
                                <span>(4)</span>
                            </li>
                            <li className='list-type__item'>
                                <span>Shirt</span>
                                <span>(8)</span>
                            </li>
                            <li className='list-type__item'>
                                <span>Underwear</span>
                                <span>(5)</span>
                            </li>
                            <li className='list-type__item'>
                                <span>Swimwear</span>
                                <span>(4)</span>
                            </li>
                            <li className='list-type__item'>
                                <span>Sets</span>
                                <span>(4)</span>
                            </li>
                            <li className='list-type__item'>
                                <span>Accessories</span>
                                <span>(6)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-size">
                        <div className="filter-heading">Size</div>
                        <ul className='list-size'>
                            <li className='list-size__item'>S</li>
                            <li className='list-size__item'>M</li>
                            <li className='list-size__item'>L</li>
                            <li className='list-size__item'>XL</li>
                            <li className='list-size__item'>2XL</li>
                            <li className='list-size__item'>3XL</li>
                        </ul>
                    </div>
                    <div className="filter-price">
                        <div className="filter-heading">Price</div>
                        <div>
                            <Slider range defaultValue={[0, 50]} />
                        </div>
                    </div>
                    <div className="filter-color">
                        <div className="filter-heading">Colors</div>
                        <ul className='list-color'>
                            <li className='list-color__item'>
                                <span style={{ backgroundColor: "rgb(244 197 191)" }}></span>
                                <span>Pink</span>
                            </li>
                            <li className='list-color__item'>
                                <span style={{ backgroundColor: "rgb(219 68 68)" }}></span>
                                <span>Red</span>
                            </li>
                            <li className='list-color__item'>
                                <span style={{ backgroundColor: "rgb(210 239 154)" }}></span>
                                <span>Green</span>
                            </li>
                            <li className='list-color__item'>
                                <span style={{ backgroundColor: "rgb(236 176 24)" }}></span>
                                <span>Yellow</span>
                            </li>
                            <li className='list-color__item'>
                                <span style={{ backgroundColor: "rgb(134 132 212)" }}></span>
                                <span>Purple</span>
                            </li>
                            <li className='list-color__item'>
                                <span style={{ backgroundColor: "rgb(31 31 31)" }}></span>
                                <span>Black</span>
                            </li>
                            <li className='list-color__item'>
                                <span style={{ backgroundColor: "rgb(246 239 221)" }}></span>
                                <span>White</span>
                            </li>
                        </ul>
                    </div>
                    {/*  <div className="filter-brand">
                        <div className="filter-heading">Brands</div>
                    </div> */}
                </div>
                <div className='product-list'>
                    <div className='product-list__heading'>
                        <div className='left' style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <div className='choose-layout' >
                                <div className={`choose-layout__three ${selectedLayout == 3 && "active"}`} onClick={() => setSelectedLayout(3)}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className={`choose-layout__four ${selectedLayout == 4 && "active"}`} onClick={() => setSelectedLayout(4)}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className='check-sale'>
                                <input type="checkbox" name="filtersale" id='filtersale' style={{ display: "none" }} />
                                <label htmlFor="filtersale">Show only products on sale</label>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='select-block'>
                                <select name="select-filter" id="select-filter" defaultValue="all">
                                    <option value="all">Tất cả</option>
                                    <option value="soldQuantityHighToLow">Bán chạy nhất</option>
                                    <option value="discountHighToLow">Sản phẩm mới nhất</option>
                                    <option value="priceHighToLow">Giá từ cao đến thấp</option>
                                    <option value="priceLowToHigh">Giá từ thấp đến cao</option>
                                </select>
                                <div className='select-arrow'>
                                    <FaChevronDown size={12} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='product-list__filters'>
                        <div className='total-product'>40 kết quả tìm kiếm</div>
                        <div>a</div>
                        <div>a</div>
                    </div>
                    <div className='product-list__main' style={{ gridTemplateColumns: `repeat(${selectedLayout}, 1fr)` }}>
                        {product.slice(0, 12).map((item) => (
                            <ProductCard product={item} key={item._id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page