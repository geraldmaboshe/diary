import React, { useState } from 'react';
import { DATE, MONTH } from '../utils/Constants';
import moment from 'moment';
import './calendar.scss';
import Modal from '../Modal';
import Rating from '../Rating';

const Date = ({ value, day, month, active, items }) => {
  const [show, setshow] = useState(false);

  const showModal = () => {
    setshow(true);
  };

  const hideModal = () => {
    setshow(false);
  };

  let dateStyle = false;
  if (value === DATE.getDate() && month > 0) {
    if (
      (value === 1 && month - 1 === DATE.getMonth()) ||
      (value !== 1 && month - 1 == DATE.getMonth())
    ) {
      dateStyle = true;
    }
  }
  console.log(month + '/' + value + '/2020');
  console.log(
    moment(items.responseobjects[0].posts[0].calendardatetime).format('l')
  );

  let actual = month + '/' + value + '/2020';
  return (
    <div
      className={`date ${!day ? 'sunday' : ''} ${active ? 'active-month' : ''}`}
    >
      <div className="date-box">
        <div>
          {items.responseobjects[0].posts.map(post =>
            moment(post.calendardatetime).format('l') == actual ? (
              <>
                <Rating
                  color="#add8e6"
                  rating={post.rating}
                  spacing="3px"
                  dimension="15px"
                />
                <div onClick={showModal}>
                  <img
                    src={post.images[0].imageurl}
                    alt="tile"
                    className="calendar-tile-image"
                  />
                  {post.typeofday.map(type => (
                    <span className="legend">
                      {type === 'protein treatment'
                        ? 'Pr'
                        : type === 'deep conditioning'
                        ? 'DC'
                        : type === 'hair color'
                        ? 'HC'
                        : type === 'hair cut'
                        ? 'Cu'
                        : type === 'clarifying'
                        ? 'Cu'
                        : ''}
                    </span>
                  ))}
                </div>
                <Modal show={show} handleClose={hideModal} item={post} />
              </>
            ) : null
          )}
        </div>
        <span className={`text ${dateStyle ? 'active' : ''}`}>{value}</span>
        {value === 1 ? (
          <div
            className={`month ${
              DATE.getMonth() === month - 1 ? 'month-active' : ''
            }`}
          >
            {MONTH[month - 1] == undefined ? '' : MONTH[month - 1].substr(0, 3)}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Date;
