import React, { useState, useEffect } from 'react';
import './App.scss';
import { MONTH, WEEK } from './utils/Constants';
import Day from './components/Day';
import Calendar from './components/calendar/Calendar';
import { payload } from './payload';

function App() {
  const [activeMonth, setactiveMonth] = useState(0);
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    // async function fetchData() {
    //   const response = await fetch(
    //     'http://quinncareapi-dev.us-east-2.elasticbeanstalk.com/graph',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(payload)
    //     }
    //   );
    //   const data = await response.json();
    //   setitems(data);
    //   setloading(false);
    // }
    // fetchData();
    fetch('http://quinncareapi-dev.us-east-2.elasticbeanstalk.com/graph', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(data => {
        setitems(data);
        setloading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <nav className="nav">
            <h1 className="h1">
              {MONTH[activeMonth]} <span className="span">{2020}</span>
              <button>Today</button>
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
