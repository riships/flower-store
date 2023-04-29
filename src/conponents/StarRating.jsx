import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    return (
        <div className="star-rating">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={i} />
            ))}
            {hasHalfStar && <FaStar half key={fullStars} />}
            {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                <FaRegStar key={fullStars + (hasHalfStar ? 1 : 0) + i} />
            ))}
        </div>
    );
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default StarRating;
