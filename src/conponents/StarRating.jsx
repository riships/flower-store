import React from 'react';
// import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';

const StarRating = ({ star }) => {
    console.log(star);
    const ratingStars = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {star > index + 1 ? (
                    <FaStar />
                ) : star > number ? (
                    <BsStarHalf />

                ) : (
                    <AiOutlineStar />
                )}
            </span>
        )
    });

    return (
        <div className="star-rating">
            {ratingStars}
        </div>
    );
};

export default StarRating;
