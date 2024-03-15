import ImageGallery from '@/components/ImageGallery';
import React from 'react';
import '../../../../styles/product/productdetail.scss';

import { productData } from '../../../../../contants';
import ProductInfo from './_ProductInfo/ProductInfo';
import SliderSimilarProduct from '@/components/Slider/SliderSimilarProduct/SliderSimilarProduct';
import RateReadOnly from '@/components/RateReadOnly';

export default function Page({ params }: {
    params: {
        id: string
    }
}) {

    const product = productData.filter((item) => {
        if (item._id == params.id) {
            return item._id
        }
        return null;
    });

    return (
        <div className='product-detail'>
            <div className='breadcum'>
                <div className='breadcum__container container'>
                    <span>TRANG CHỦ</span>
                    <span>/</span>
                    <span>SẢN PHẨM</span>
                    <span>/</span>
                    <span>CHI TIẾT SẢN PHẨM</span>
                </div>
            </div>
            <div className="product-detail__container container">
                <ImageGallery imageUrls={product[0]?.images} />
                <ProductInfo product={product[0]} />
            </div>

            <div className='product-detail__review container'>
                <div className='product-detail__review-ratings'>
                    <h5 style={{ textTransform: "uppercase", fontWeight: "700", color: "#231f20", fontSize: "16px" }}>ĐÁNH GIÁ SẢN PHẨM</h5>
                    <div style={{ fontSize: "64px", fontWeight: "500", lineHeight: "80px" }}>4.0</div>
                    <RateReadOnly size={34} />
                    <div style={{ marginTop: "8px", fontSize: "14px", fontStyle: "italic", fontWeight: "400", color: "#4d4d4d" }}>123 đánh giá</div>
                </div>
                <div className='product-detail__review-comments'>
                    <div className='product-detail__review-comments--heading'>
                        <div>Tất cả bình luận (123)</div>
                        <div>Bình luận</div>
                    </div>

                    <div style={{ width: "100%", height: "1px", backgroundColor: "#D9D9D9", marginTop: "32px", marginBottom: "20px" }}></div>

                    <div className='product-detail__review-comments--list'>
                        <div style={{ padding: "18px 9px", borderBottom: "1px solid #d9d9d9" }}>
                            <RateReadOnly size={20} />
                            <div style={{ marginTop: "5px", fontSize: "14px", lineHeight: "24px", fontWeight: "700" }}>Le Hoa</div>
                            <div style={{ marginBottom: "20px", fontSize: "12px", color: "rgba(0,0,0,.4)", fontStyle: "italic", fontWeight: "600" }}>Trắng / XL</div>

                            <p style={{ fontSize: "14px" }}>Giao hàng nhanh.</p>
                            <div style={{ fontSize: "14px", opacity: "0.5", lineHeight: "18px", marginTop: "20px" }}>07.03.2024</div>
                        </div>
                        <div style={{ padding: "9px", borderBottom: "1px solid #d9d9d9" }}>
                            <RateReadOnly size={20} />
                            <div style={{ marginTop: "5px", fontSize: "14px", lineHeight: "24px", fontWeight: "700" }}>Nguyễn Trần Minh Thành</div>
                            <div style={{ marginBottom: "20px", fontSize: "12px", color: "rgba(0,0,0,.4)", fontStyle: "italic", fontWeight: "600" }}>Trắng / XL</div>

                            <p style={{ fontSize: "14px" }}>Sản phẩm tốt. Hàng đóng gói đẹp và lịch sự.</p>
                            <div style={{ fontSize: "14px", opacity: "0.5", lineHeight: "18px", marginTop: "20px" }}>07.03.2024</div>
                        </div>
                        <div style={{ padding: "9px", borderBottom: "1px solid #d9d9d9" }}>
                            <RateReadOnly size={20} />
                            <div style={{ marginTop: "5px", fontSize: "14px", lineHeight: "24px", fontWeight: "700" }}>Đỗ Trung Hiếu</div>
                            <div style={{ marginBottom: "20px", fontSize: "12px", color: "rgba(0,0,0,.4)", fontStyle: "italic", fontWeight: "600" }}>Trắng / XL</div>

                            <p style={{ fontSize: "14px" }}>Chất liệu thoáng khí, mặc thoải mái, nên mua nhé.</p>
                            <div style={{ fontSize: "14px", opacity: "0.5", lineHeight: "18px", marginTop: "20px" }}>07.03.2024</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='product-detail__similar container'>
                <SliderSimilarProduct />
            </div>
        </div>
    )
}