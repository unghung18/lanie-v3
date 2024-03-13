import React from 'react';
import { FaStar } from 'react-icons/fa'

const RateReadOnly = ({ size }: {
    size: number;
}) => {
    const rating = 5;
    return (
        <div className='flex'>
            {[...Array(5)].map((star, i) => {
                const currentRating = i + 1;
                return (
                    <label key={i}>
                        <input type="radio" name='rating' value={currentRating} style={{ display: "none" }} />
                        <FaStar size={size} color={currentRating <= rating ? "#ffc107" : "#e4e5e9"} />
                    </label>
                )
            })}
        </div>
    )
}

export default RateReadOnly;