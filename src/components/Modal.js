import React, { useState } from 'react';
import './modal.scss';
import { GoArrowSmallRight, GoArrowSmallLeft } from 'react-icons/go';
import Rating from './Rating';
import moment from 'moment';

const Modal = ({ handleClose, show, item, items, selectedIndex }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [active, setActive] = useState(item);
  const [newIndex, setNewIndex] = useState(selectedIndex);
  const nextTile = () => {
    if (items.responseobjects[0].posts[newIndex - 2] != undefined) {
      setActive(items.responseobjects[0].posts[newIndex - 1]);
      setNewIndex(newIndex - 1);
    }
    return;
  };
  const prevTile = () => {
    if (items.responseobjects[0].posts[newIndex + 2] != undefined) {
      setActive(items.responseobjects[0].posts[newIndex + 1]);
      setNewIndex(newIndex + 1);
    }
    return;
  };
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="btn-wrapper">
          <button type="button" onClick={handleClose} className="close-btn">
            X
          </button>
        </div>
        <div className="container">
          <div className="prev-arrow">
            <button className="arrow-btn" onClick={prevTile}>
              <GoArrowSmallLeft size={30} color="red" color="#ffffff" />
            </button>
          </div>
          <div className="prev-tile">
            {items.responseobjects[0].posts[newIndex + 1]?.images[0]
              .imageurl ? (
              <img
                src={
                  items.responseobjects[0].posts[newIndex + 1]?.images[0]
                    .imageurl
                }
                alt="previous tile"
                className="prev-tile-image"
              />
            ) : (
              <p>You have no previous posts</p>
            )}
            <div classname="prev-content">
              <div className="legend-rating-wrapper">
                {items.responseobjects[0].posts[newIndex + 1]?.typeofday.map(
                  type => (
                    <span className="prev-tile-legend">
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
                  )
                )}
                <div>
                  <Rating
                    color="#add8e6"
                    rating={active.rating}
                    spacing="2px"
                    dimension="13px"
                  />
                </div>
              </div>
              <div>
                <p className="prev-dateTime">
                  {moment(
                    items.responseobjects[0].posts[newIndex + 1]
                      ?.calendardatetime
                  ).format('Do MMM YYYY')}
                </p>
                <p className="prev-description">
                  {items.responseobjects[0].posts[newIndex + 1]?.text}
                </p>
              </div>
            </div>
          </div>

          <div className="active-tile">
            <img
              src={active.images[0].imageurl}
              alt="tile"
              className="active-tile-image"
            />
            <div className="content">
              <div className="legend-rating-wrapper">
                {active.typeofday.map(type => (
                  <span className="tile-legend">
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
                <div>
                  <Rating
                    color="#add8e6"
                    rating={active.rating}
                    spacing="3px"
                    dimension="15px"
                  />
                </div>
              </div>
              <div>
                <p className="dateTime">
                  {moment(active.calendardatetime).format('Do MMM YYYY')}
                </p>
                <p className="description">{active.text}</p>
              </div>
            </div>
          </div>
          <div className="next-tile">
            {items.responseobjects[0].posts[newIndex - 1]?.images[0]
              .imageurl ? (
              <img
                src={
                  items.responseobjects[0].posts[newIndex - 1]?.images[0]
                    .imageurl
                }
                className="next-tile-image"
                alt="next tile"
              />
            ) : (
              <p>You have no next posts</p>
            )}
          </div>
          <div className="next-arrow">
            <button className="arrow-btn" onClick={nextTile}>
              <GoArrowSmallRight size={30} color="#ffffff" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Modal;
