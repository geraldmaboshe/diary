import React, { useState } from 'react';
import './modal.scss';
import { GoArrowSmallRight, GoArrowSmallLeft } from 'react-icons/go';
import moment from 'moment';
import StarRating from '../core/Rating';

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
          <div className="arrow-container">
            <button className="arrow-btn" onClick={prevTile}>
              <GoArrowSmallLeft size={30} color="red" color="#ffffff" />
            </button>
          </div>
          <div className="side-tile">
            <div className="overlay">
              {items.responseobjects[0].posts[newIndex + 1] ? (
                <>
                  <img
                    src={
                      items.responseobjects[0].posts[newIndex + 1]?.images[0]
                        .imageurl
                    }
                    alt="previous tile"
                    className="side-tile-image"
                  />
                  <div className="side-content">
                    <div className="legend-rating-wrapper">
                      {items.responseobjects[0].posts[
                        newIndex + 1
                      ]?.typeofday.map(type => (
                        <span className={type}>
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
                        <StarRating
                          value={
                            items.responseobjects[0].posts[newIndex + 1]?.rating
                          }
                          size={17}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="side-dateTime">
                        {moment(
                          items.responseobjects[0].posts[newIndex + 1]
                            ?.calendardatetime
                        ).format('Do MMM YYYY')}
                      </p>
                      <p className="side-description">
                        {`${items.responseobjects[0].posts[
                          newIndex + 1
                        ]?.text?.slice(0, 101)}...`}
                        <span className="more">(more)</span>
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <p>You have no previous posts</p>
              )}
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
                  <span className={type}>
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
                  </span>
                ))}
                <div>
                  <StarRating
                    value={items.responseobjects[0].posts[newIndex + 1]?.rating}
                    size={20}
                  />
                </div>
              </div>
              <div>
                <p className="dateTime">
                  {moment(active.calendardatetime).format('Do MMM YYYY')}
                </p>
                <p className="description">
                  {`${active.text.slice(0, 101)}...`}
                  <span className="more">(more)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="side-tile">
            <div className="overlay">
              {items.responseobjects[0].posts[newIndex - 1] ? (
                <>
                  <img
                    src={
                      items.responseobjects[0].posts[newIndex - 1]?.images[0]
                        .imageurl
                    }
                    className="side-tile-image"
                    alt="next tile"
                  />
                  <div className="side-content">
                    <div className="legend-rating-wrapper">
                      {items.responseobjects[0].posts[
                        newIndex - 1
                      ]?.typeofday.map(type => (
                        <span className={type}>
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
                        <StarRating
                          value={
                            items.responseobjects[0].posts[newIndex - 1]?.rating
                          }
                          size={17}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="side-dateTime">
                        {moment(
                          items.responseobjects[0].posts[newIndex - 1]
                            ?.calendardatetime
                        ).format('Do MMM YYYY')}
                      </p>
                      <p className="side-description">
                        {`${items.responseobjects[0].posts[
                          newIndex - 1
                        ]?.text?.slice(0, 101)}...`}
                        <span className="more">(more)</span>
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <p>You have no next posts</p>
              )}
            </div>
          </div>
          <div className="arrow-container">
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
