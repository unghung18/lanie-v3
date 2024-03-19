import React from 'react';
import "./SkeletonProductCard.scss";

const SkeletonProductCard = () => {
    return (
        <div className="card">
            <div className="card__image"></div>
            <div className='card__footer'>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default SkeletonProductCard;