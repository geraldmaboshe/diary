import React from 'react';
import './rating.scss';
function StarRating({
  count = 5,
  inactiveColor = '#D3D3D3',
  size = 24,
  activeColor = '#add8e6',
  value = 2
}) {
  const stars = Array.from({ length: count }, () => '🟊');
  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span
            className={'star'}
            key={index}
            style={{ color: style, width: size, height: size, fontSize: size }}
          >
            {s}
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
