import React from 'react';
import StarRatings from 'react-star-ratings';

function Rating({ color, dimension, spacing, rating }) {
  return (
    <StarRatings
      rating={rating}
      starDimension={dimension}
      starSpacing={spacing}
      starRatedColor={color}
    />
  );
}

export default Rating;
