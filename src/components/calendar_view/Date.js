import React, { useState } from 'react';
import { DATE, MONTH } from '../../utils/Constants';
import moment from 'moment';
import './index.scss';
import Modal from '../extended_view/Modal';
import StarRating from '../core/Rating';

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
          {items.responseobjects[0].posts.map((post, index) =>
            moment(post.calendardatetime).format('l') == actual &&
            moment(post.calendardatetime).format('l') !==
              moment(
                items.responseobjects[0].posts[index + 1]?.calendardatetime
              ).format('l') ? (
              <StarRating value={post?.rating} size={15} />
            ) : null
          )}
          <div></div>
          <div className={`text ${dateStyle ? 'active' : ''}`}>
            {value}
            {value === 1 ? (
              <span
                className={`month ${
                  DATE.getMonth() === month - 1 ? 'month-active' : ''
                }`}
              >
                {MONTH[month - 1] === undefined
                  ? ''
                  : MONTH[month - 1].substr(0, 3)}
              </span>
            ) : null}
          </div>
        </div>
        {items.responseobjects[0].posts.map((post, index) =>
          moment(post.calendardatetime).format('l') == actual &&
          moment(post.calendardatetime).format('l') !==
            moment(
              items.responseobjects[0].posts[index + 1]?.calendardatetime
            ).format('l') ? (
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
                selectedIndex={index}
              />
            </>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Date;
