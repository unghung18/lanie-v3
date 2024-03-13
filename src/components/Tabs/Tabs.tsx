"use client"

import React from 'react';
import "./Tabs.scss";
import { Segmented } from 'antd';
import ProductCard from '../ProductCard/ProductCard';
import { productData } from '../../../contants';

const Tabs = () => {
    return (
        <div className='tabs'>
            <div className='tabs__header'>
                <h2>What's New</h2>
                <Segmented<string>
                    options={["Áo", 'Đầm', 'Quần', "Chân váy"]}
                    size='large'
                    onChange={(value) => {
                        console.log(value);
                    }}
                />
            </div>
            <div className='list-product'>
                {productData.slice(0, 12).map((item) => (
                    <ProductCard product={item} key={item._id} />
                ))}
            </div>
        </div>
    )
}

export default Tabs