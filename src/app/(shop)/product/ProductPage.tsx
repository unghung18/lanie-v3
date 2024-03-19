"use client"

import React, { useState, useEffect } from 'react';
import '../../../styles/product/product.scss';
import { Slider } from 'antd';
import { FaChevronDown } from "react-icons/fa6";
import { categoryProductPage, colorData, productData } from '../../../../contants';
import ProductCard from '@/components/ProductCard';
import { useRouter, useSearchParams } from 'next/navigation';
import { IoClose } from "react-icons/io5";
import { ProductProps } from '@/types/types';
import { getProducts } from '@/api/LanieApi';
import SkeletonProductCard from '@/components/SkeletonProductCard/SkeletonProductCard';

const ProductPage = () => {

    const [selectedLayout, setSelectedLayout] = useState(3);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<ProductProps[]>([]);

    const router = useRouter();
    const SearchParams = useSearchParams();

    const category = SearchParams.get("category");
    const size = SearchParams.get("size");
    const color = SearchParams.get("color");
    const sale = SearchParams.get("sale");
    const search = SearchParams.get("search");

    let queryParams: any;

    const handleCategory = (cate: string) => {
        if (typeof window !== "undefined") {
            queryParams = new URLSearchParams(window.location.search);
        }

        if (queryParams.has("category")) {
            if (queryParams.get("category") == cate) {
                queryParams.delete("category");
            }
            else {
                queryParams.set("category", cate);
            }
        } else {
            queryParams.append("category", cate);
        }

        const path = window.location.pathname + "?" + queryParams.toString();
        router.push(path, { scroll: false });
    }

    const handleSize = (sz: string) => {
        if (typeof window !== "undefined") {
            queryParams = new URLSearchParams(window.location.search);
        }

        if (queryParams.has("size")) {
            if (queryParams.get("size") == sz) {
                queryParams.delete("size");
            }
            else {
                queryParams.set("size", sz);
            }
        } else {
            queryParams.append("size", sz);
        }

        const path = window.location.pathname + "?" + queryParams.toString();
        router.push(path, { scroll: false });
    }

    const handleColor = (cl: string) => {
        if (typeof window !== "undefined") {
            queryParams = new URLSearchParams(window.location.search);
        }

        if (queryParams.has("color")) {
            if (queryParams.get("color") == cl) {
                queryParams.delete("color");
            }
            else {
                queryParams.set("color", cl);
            }
        } else {
            queryParams.append("color", cl);
        }

        const path = window.location.pathname + "?" + queryParams.toString();
        router.push(path, { scroll: false });
    }

    const handleCheckSale = () => {

        if (typeof window !== "undefined") {
            queryParams = new URLSearchParams(window.location.search);
        }

        if (queryParams.has("sale")) {
            queryParams.delete("sale");
        } else {
            queryParams.append("sale", "true");
        }

        const path = window.location.pathname + "?" + queryParams.toString();
        router.push(path, { scroll: false });
    }

    const getAllProducts = async () => {
        setLoading(true);
        try {
            if (typeof window !== "undefined") {
                queryParams = new URLSearchParams(window.location.search);
            }

            const res = await getProducts(queryParams.toString())
            console.log(res.data);
            if (res.error) {
                alert(res.error.message)
            }

            else {
                setProducts(res.data)
            }

            setLoading(false);
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [category, sale, color, size, search]);

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
                            {categoryProductPage.map((item) => (
                                <li className={`list-type__item ${category == item.name.toLocaleLowerCase() ? "active" : ""}`} key={item._id} onClick={() => handleCategory(item.name.toLocaleLowerCase())}>
                                    <span>{item.name}</span>
                                    <span>({item.quantity})</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="filter-size">
                        <div className="filter-heading">Size</div>
                        <ul className='list-size'>
                            <li className={`list-size__item ${size == "s" ? "active" : ""}`} onClick={() => handleSize('s')}>S</li>
                            <li className={`list-size__item ${size == "m" ? "active" : ""}`} onClick={() => handleSize('m')}>M</li>
                            <li className={`list-size__item ${size == "l" ? "active" : ""}`} onClick={() => handleSize('l')}>L</li>
                            <li className={`list-size__item ${size == "xl" ? "active" : ""}`} onClick={() => handleSize('xl')}>XL</li>
                            <li className={`list-size__item ${size == "2xl" ? "active" : ""}`} onClick={() => handleSize('2xl')}>2XL</li>
                            <li className={`list-size__item ${size == "3xl" ? "active" : ""}`} onClick={() => handleSize('3xl')}>3XL</li>
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
                            {colorData.map((item: any) => (
                                <li className={`list-color__item ${color == item._id ? "active" : ""}`} key={item._id} onClick={() => handleColor(item._id.toLocaleLowerCase())}>
                                    <span style={{ backgroundColor: `${item.color}` }}></span>
                                    <span>{item.name}</span>
                                </li>
                            ))}
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
                                <input type="checkbox" name="filtersale" id='filtersale' style={{ display: "none" }} checked={sale ? true : false} onChange={handleCheckSale} />
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
                        <div className='total-product'>40 <span style={{ color: "rgb(105 108 112)" }}>kết quả tìm kiếm</span></div>
                        <div className='line'></div>
                        <div className='list__filters'>
                            {category &&
                                <div className='item' onClick={() => handleCategory(category)}>
                                    <IoClose size={18} />
                                    <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                </div>}
                            {size &&
                                <div className='item' onClick={() => handleSize(size)}>
                                    <IoClose size={18} />
                                    <span>{size.toLocaleUpperCase()}</span>
                                </div>}
                            {color &&
                                <div className='item' onClick={() => handleColor(color)}>
                                    <IoClose size={18} />
                                    <span>{color}</span>
                                </div>}
                        </div>
                        {
                            category || color || size ?
                                <div className='clear-button' onClick={() => router.push("/product", { scroll: false })}>
                                    <IoClose size={18} />
                                    <span>Reset</span>
                                </div>
                                :
                                <div></div>
                        }
                    </div>
                    <div className='product-list__main' style={{ gridTemplateColumns: `repeat(${selectedLayout}, 1fr)` }}>
                        {
                            loading ?
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                                    <SkeletonProductCard key={index} />
                                ))
                                :
                                products.length > 0 ? products.slice(0, 12).map((item) => (
                                    <ProductCard product={item} key={item._id} />
                                ))
                                    :
                                    <div> Không tìm thấy sản phẩm nào</div>
                        }

                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductPage