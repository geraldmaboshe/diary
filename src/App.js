import React, { useState, useEffect } from 'react';
import './App.scss';
import { MONTH, WEEK } from './utils/Constants';
import Day from './components/calendar_view/Day';
import Calendar from './components/calendar_view/Calendar';
import { payload } from './utils/Payload';
import axios from 'axios';

const App = () => {
  const [activeMonth, setActiveMonth] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post('https://devapi.quinn.care/graph', payload)
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <nav className="nav">
            <h1 className="h1">
              {MONTH[activeMonth]} <span className="span">{2020}</span>
            </h1>
            <div className="row">
              {WEEK.map(week => (
                <Day day={week} />
              ))}
            </div>
          </nav>
          <div className="wrapper">
            <Calendar
              setActiveMonth={setActiveMonth}
              activeMonth={activeMonth}
              items={items}
            />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default App;
