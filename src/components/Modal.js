import { useState } from 'react';
import './modal.scss';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Rating from './Rating';
import moment from 'moment';

const Modal = ({ handleClose, show, item, children }) => {
  const [readMore, setReadMore] = useState(false);
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="btn-wrapper">
          <button type="button" onClick={handleClose} className="close-btn">
            X
          </button>
        </div>

        <div className="container">
          <div>
            <FaArrowAltCircleLeft />
          </div>

          <div>2</div>

          <div className="active-tile">
            <div className="image-wrapper">
              <img
                src={item.images[0].imageurl}
                alt="tile"
                className="tile-image"
              />
            </div>
            <div className="content">
              <div className="legend-rating-wrapper">
                {item.typeofday.map(type => (
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
                    rating={item.rating}
                    spacing="3px"
                    dimension="15px"
                  />
                </div>
              </div>
              <div>
                <p className="dateTime">
                  {moment(item.calendardatetime).format('Do MMM YYYY')}
                </p>
                <p className="description">{item.text}</p>
              </div>
            </div>
          </div>

          <div>4</div>
          <div>
            <FaArrowAltCircleRight />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Modal;
