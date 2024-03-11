import React from 'react';
import "./ProductCard.scss";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";

const ProductCard = () => {
    const product = {
        category: "Dress",
        title: "Mesh Shirt",
        images: [

        ],
        comments: [],
        price: 150000,
        sale: 20,
        description: "",
        colors: ["#000", "#DB4444"],
        sizes: [],
        quantity: 10,
        tag: ""

    }
    return (
        <div className='product__item'>
            <div className="product__item--thumbs">
                <span className="product__item--thumbs-tag">
                    Sale
                </span>
                <div className="product__item--thumbs-actions">
                    <div className='product__item--thumbs-actions-wishlist'>
                        <span>
                            Add to wishlist
                        </span>
                        <IoIosHeartEmpty />
                    </div>
                </div>
                <div className="product__item--thumbs-img">
                    <img src="/product1.png" alt={product.title} />
                    <img src="/product2.png" alt={product.title} />
                </div>
                <div className='product__item--thumbs-buttons'>
                    <div>Xem trước</div>
                    <div>Tư vấn thêm</div>
                </div>
            </div>
            <div className="product__item--info">
                <div className='product__item--info-name'>{product.title}</div>
                <div className='product__item--info-colors'>
                    {
                        product.colors.map((color, index) => (
                            <span key={index} style={{ backgroundColor: `${color}` }}></span>
                        ))
                    }
                </div>
                <div className='product__item--info-price'>
                    <span> {product.price}₫</span>
                    <span> {product.price}₫</span>
                    <span>-{product.sale}%</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard