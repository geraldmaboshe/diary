import React, { useState, useEffect } from 'react';
import './App.scss';
import { MONTH, WEEK } from './utils/Constants';
import Day from './components/Day';
import Calendar from './components/calendar/Calendar';
import { payload } from './payload';
import axios from 'axios';

function App() {
  const [activeMonth, setactiveMonth] = useState(0);
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .post('https://devapi.quinn.care/graph', payload)
      .then(response => {
        console.log(response.data);
        setitems(response.data);
        setloading(false);
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
              {/* <button>Today</button> */}
            </h1>
            <div className="row">
              {WEEK.map(week => (
                <Day day={week} />
              ))}
            </div>
          </nav>
          <div className="wrapper">
            <Calendar
              setActiveMonth={setactiveMonth}
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
}

export default App;
