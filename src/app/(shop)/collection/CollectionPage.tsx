"use client"

import ProductCard from '@/components/ProductCard';
import { ProductProps } from '@/types/types';
import React from 'react';
import '../../../styles/collection/CollectionPage.scss';

const CollectionPage = ({ collections }: {
    collections: any
}) => {
    return (
        <>
            <div className='breadcum'>
                <div className='breadcum__container container'>
                    <span>TRANG CHỦ</span>
                    <span>/</span>
                    <span>BỘ SƯU TẬP</span>
                </div>
            </div>
            <div className='collection-page'>
                <div className='collection__container container'>
                    {collections.map((item: any) => (
                        <li className="item" key={item._id}>
                            <div className='item-banner'>
                                <img src={item.banner_img} alt={item.title} />
                            </div>
                            <div className='item-content'>
                                <div className="left">
                                    <div className='list-product'>
                                        {item.products.map((item: ProductProps) => (
                                            <ProductCard product={item} key={item._id} />
                                        ))}
                                    </div>
                                    <h2 style={{ margin: "30px 0 20px" }}>{item.title}</h2>
                                    <p style={{ marginBottom: "40px", color: "#070707" }}>{item.description}</p>
                                </div>
                                <div className='list-image'>
                                    {item.images.map((item: string, index: number) => (
                                        <div className='list-image__item' key={index}>
                                            <img src={item} alt=" banner image" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CollectionPage;