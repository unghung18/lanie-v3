"use client"

import { useRef, useState } from "react";
import "../styles/Tabs.scss";
import ProductCard from './ProductCard';
import { ProductProps } from '@/types/types';
import SegmentedControl from './SegmentedControl/SegmentedControl';

const Tabs = ({ tabsData }: {
    tabsData: {
        [key: string]: any;
    }
}) => {
    const [products, setProducts] = useState<ProductProps[]>(tabsData.ao);

    return (
        <div className='tabs'>
            <div className='tabs__header'>
                <h2>What's New</h2>
                <SegmentedControl
                    name="group-2"
                    callback={(val: any) => setProducts(tabsData[val])}
                    controlRef={useRef()}
                    defaultIndex={0}
                    segments={[
                        {
                            label: "Áo",
                            value: "ao",
                            ref: useRef()
                        },
                        {
                            label: "Quần",
                            value: "quan",
                            ref: useRef()
                        },
                        {
                            label: "Chân váy",
                            value: "chanvay",
                            ref: useRef()
                        }
                        ,
                        {
                            label: "Đầm",
                            value: "dam",
                            ref: useRef()
                        }
                    ]}
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