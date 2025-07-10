"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleQuickview } from "@/redux/slices/toggleQuickviewSlice";
import { toggleWishlist } from "@/redux/slices/toggleWishlistSlice";
import { addWishlistItem } from "@/redux/slices/wishlistSlice";
import { ProductProps } from "@/types/types";
import { formatCurrency } from "@/utils/FormatCurrency";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import "../styles/ProductCard.scss";

const ProductCard = ({ product }: { product: ProductProps }) => {
  const { wishlistItems } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  const router = useRouter();

  function isExits() {
    for (const item of wishlistItems) {
      if (item._id === product._id) {
        return true;
      }
    }
    return false;
  }

  function handleAddToWishlist(event: React.MouseEvent<HTMLElement>) {
    event.stopPropagation();
    dispatch(addWishlistItem(product));
    dispatch(toggleWishlist(true));
  }

  function handleQuickview(event: React.MouseEvent<HTMLElement>) {
    event.stopPropagation();
    dispatch(
      toggleQuickview({
        toggle: true,
        product: product,
      })
    );
  }
  function handleAdvise(event: React.MouseEvent<HTMLElement>) {
    event.stopPropagation();
  }

  return (
    <div
      className="product__item"
      onClick={(e) => {
        e.stopPropagation();
        router.push(`/product/${product._id}`);
      }}
    >
      <div className="product__item--thumbs">
        {product.sale != 0 ? (
          <span
            className="product__item--thumbs-tag"
            style={{ backgroundColor: "#DB4444", color: "#FFF" }}
          >
            Sale
          </span>
        ) : (
          <span
            className="product__item--thumbs-tag"
            style={{ backgroundColor: "#D2EF9A", color: "#000" }}
          >
            New
          </span>
        )}
        <div className="product__item--thumbs-actions">
          <div
            className={`product__item--thumbs-actions-wishlist ${
              isExits() ? "active" : ""
            }`}
            onClick={handleAddToWishlist}
          >
            <span>Add to wishlist</span>
            <FaRegHeart className="icon" size={16} />
          </div>
        </div>
        <div className="product__item--thumbs-img">
          <img src={product.images[0]} alt={product.title} />
          <img src={product.images[1]} alt={product.title} />
        </div>
        <div className="product__item--thumbs-buttons">
          <div onClick={handleQuickview}>Xem nhanh</div>
          <Link
            href="https://www.facebook.com/hung.ung.9638"
            target="_blank"
            onClick={handleAdvise}
          >
            Tư vấn thêm
          </Link>
        </div>
      </div>
      <div className="product__item--info">
        <div className="product__item--info-name">{product.title}</div>
        <div className="product__item--info-colors">
          {product.colors.map((color, index) => (
            <span
              key={index}
              style={{ backgroundColor: `${color.color}` }}
            ></span>
          ))}
        </div>
        <div className="product__item--info-price">
          <span> {formatCurrency(product.price)}</span>
          {product.sale != 0 && (
            <>
              <span> {formatCurrency(product.price)}</span>
              <span>{-product.sale}%</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
