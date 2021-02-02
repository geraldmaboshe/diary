import React, { useState } from 'react';
import { DATE, MONTH } from '../../utils/Constants';
import moment from 'moment';
import './calendar.scss';
import Modal from '../Modal';
import StarRating from '../StarRating';

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
      (value !== 1 && month - 1 === DATE.getMonth())
    ) {
      dateStyle = true;
    }
  }

  let actual = `${month}/${value}/2020`;
  return (
    <div
      className={`date ${!day ? 'sunday' : ''} ${active ? 'active-month' : ''}`}
    >
      <div className="date-box">
        <div className="box-header">
          {items.responseobjects[0].posts.map(post =>
            moment(post.calendardatetime).format('l') == actual ? (
              <StarRating value={post.rating} size={20} />
            ) : null
          )}
          <div></div>
          <div className={`text ${dateStyle ? 'active' : ''}`}>{value}</div>
          {value === 1 ? (
            <div
              className={`month ${
                DATE.getMonth() === month - 1 ? 'month-active' : ''
              }`}
            >
              {MONTH[month - 1] === undefined
                ? ''
                : MONTH[month - 1].substr(0, 3)}
            </div>
          ) : null}
        </div>
        {items.responseobjects[0].posts.map((post, selectedIndex) =>
          moment(post.calendardatetime).format('l') == actual ? (
            <>
              <div className="box-header"></div>
              <div onClick={showModal}>
                <img
                  src={post.images[0].imageurl}
                  alt="tile"
                  className="calendar-tile-image"
                />
                <div className="legend">
                  {post.typeofday.map(type => (
                    <div className={type}>
                      {type === 'protein treatment'
                        ? 'Pr'
                        : type === 'deep conditioning'
                        ? 'DC'
                        : type === 'hair color'
                        ? 'HC'
                        : type === 'hair cut'
                        ? 'Cu'
                        : type === 'clarifying'
                        ? 'C'
                        : null}
                    </div>
                  ))}
                </div>
              </div>
              <Modal
                show={show}
                handleClose={hideModal}
                item={post}
                items={items}
                selectedIndex={selectedIndex}
              />
            </>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Date;
