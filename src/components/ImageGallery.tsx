'use client'

import React, { useState } from 'react';
import '../styles/ImageGallery.scss';

const ImageGallery = ({ imageUrls }: {
    imageUrls: Array<string>
}) => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className='gallery flex max-md:flex-col-reverse'>
            <div className='gallery__thums flex flex-col justify-between md:mr-3 max-md:space-x-1 max-md:flex-row'>
                {imageUrls?.map((item, i) => (
                    <div key={i} className='gallery__thums--item relative rounded-lg md:w-[90px]'>
                        <img onClick={() => setSelectedImage(i)} src={item} alt="product-img" className={`${selectedImage === i && "active"}`} />
                    </div>
                ))}
            </div>
            <div className='gallery__image flex-1 max-md:mb-5'>
                <img src={imageUrls && imageUrls[selectedImage]} alt="product" className='w-[380px] max-md:w-full' />
            </div>
        </div>
    )
}

export default ImageGallery