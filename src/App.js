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
    // let body = JSON.stringify(payload);
    axios
      .post('http://quinncareapi-dev.us-east-2.elasticbeanstalk.com/graph', {
        // method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        //body: JSON.stringify(payload)
        requestobjects: [
          {
            posts: {
              operationtype: 'read',
              id: {
                return: true
              },
              userid: {
                searchvalues: ['41329663-5834-11eb-8e6e-3ca82abc3dd4'],
                return: true
              },
              iscalendarentry: {
                searchvalues: ['true'],
                return: true
              },
              images: {
                return: true
              },
              rating: {
                return: true
              },
              text: {
                return: true
              },
              privacy: {
                searchvalues: [18],
                return: true
              },
              typeofday: {
                return: true
              },

              // Don't change anything above ^^
              //editable variables start below //

              calendardatetime: {
                // Date Time of a particular post
                return: true, // please note: there can be multiple posts on a single day
                sort: 'descending' // you can sort fetched dates by ascending/descending.
              },
              maxitemcount: '20', //you can ask between 1 to 50 posts (max) at a time.
              continuationtoken: null //replace with the continuation token from response to get the next set
            }
          }
        ]
      })
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
