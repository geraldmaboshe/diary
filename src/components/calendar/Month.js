import React, { useEffect, useRef } from 'react';
import { DATE, MONTH } from '../utils/Constants';

let obs;
const Month = props => {
  const monthRef = useRef();

  useEffect(() => {
    obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.8) {
            props.onVisible(props.mid);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1
      }
    );
    obs.observe(monthRef.current);
  });

  useEffect(() => {
    const monthRefValue = monthRef && monthRef.current;
    if (monthRefValue) {
      if (props.mid === DATE.getMonth()) {
        monthRefValue.scrollIntoView();
      }
    }
  }, []);
  return (
    <div className="months" id={MONTH[props.mid]} ref={monthRef}>
      {props.children}
    </div>
  );
};

export default Month;
