import "../styles/ProductCard.scss";
import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { ProductProps } from '@/types/types';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addWishlistItem } from '@/redux/slices/wishlistSlice';
import { toggleWishlist } from '@/redux/slices/toggleWishlistSlice';
import { toggleQuickview } from '@/redux/slices/toggleQuickviewSlice';

const ProductCard = ({ product }: {
    product: ProductProps
}) => {

    const { wishlistItems } = useAppSelector(state => state.wishlist);
    const isWishlistItems = wishlistItems.includes(product);

    function handleAddToWishlist(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        dispatch(addWishlistItem(product));
        dispatch(toggleWishlist(true))
    }

    function handleQuickview(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        dispatch(toggleQuickview({
            toggle: true,
            product: product
        }))
    }

    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <div className='product__item' onClick={() => router.push(`/product/${product._id}`)}>
            <div className="product__item--thumbs">
                <span className="product__item--thumbs-tag">
                    Sale
                </span>
                <div className="product__item--thumbs-actions">
                    <div className={`product__item--thumbs-actions-wishlist ${isWishlistItems ? "active" : ""}`} onClick={handleAddToWishlist}>
                        <span>
                            Add to wishlist
                        </span>
                        <FaRegHeart className='icon' size={16} />
                    </div>
                </div>
                <div className="product__item--thumbs-img">
                    <img src="/product/product1.png" alt={product.title} />
                    <img src="/product/product2.png" alt={product.title} />
                </div>
                <div className='product__item--thumbs-buttons'>
                    <div onClick={handleQuickview}>Xem nhanh</div>
                    <div>Tư vấn thêm</div>
                </div>
            </div>
            <div className="product__item--info">
                <div className='product__item--info-name'>{product.title}</div>
                <div className='product__item--info-colors'>
                    {
                        product.colors.map((color, index) => (
                            <span key={index} style={{ backgroundColor: `${color.color}` }}></span>
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