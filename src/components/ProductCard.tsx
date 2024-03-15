import React from 'react';
import "../styles/ProductCard.scss";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiMessengerLine } from "react-icons/ri";
import { useRouter } from 'next/navigation';
import { ProductProps } from '@/types/types';

const ProductCard = ({ product }: {
    product: ProductProps
}) => {
    const router = useRouter()
    return (
        <div className='product__item' onClick={() => router.push(`/product/${product._id}`)}>
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
                    <img src="/product/product1.png" alt={product.title} />
                    <img src="/product/product2.png" alt={product.title} />
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