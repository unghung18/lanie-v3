"use client"

import React, { useState } from 'react';
import "../styles/Tabs.scss";
import { Segmented } from 'antd';
import ProductCard from './ProductCard';
import { ProductProps } from '@/types/types';

const Tabs = ({ tabsData }: {
    tabsData: {
        ao: ProductProps[],
        dam: ProductProps[],
        quan: ProductProps[],
        chanvay: ProductProps[]
    }
}) => {
    const [products, setProducts] = useState<ProductProps[]>(tabsData.ao);

    return (
        <div className='tabs'>
            <div className='tabs__header'>
                <h2>What's New</h2>
                <Segmented<string>
                    options={["Áo", 'Đầm', 'Quần', "Chân váy"]}
                    size='large'
                    onChange={(value) => {
                        if (value === "Áo") {
                            setProducts(tabsData.ao)
                        }
                        if (value === "Đầm") {
                            setProducts(tabsData.dam)
                        }
                        if (value === "Quần") {
                            setProducts(tabsData.quan)
                        }
                        if (value === "Chân váy") {
                            setProducts(tabsData.chanvay)
                        }
                    }}
                />
            </div>
            <div className='list-product'>
                {products.map((item) => (
                    <ProductCard product={item} key={item._id} />
                ))}
            </div>
        </div>
    )
}

export default Tabs