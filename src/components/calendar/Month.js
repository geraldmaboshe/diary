import React from 'react';
import { MONTH } from '../utils/Constants';

function Month(props) {
  return (
    <div className="months" id month={MONTH[props.mid]}>
      {props.children}
    </div>
  );
}

export default Month;
