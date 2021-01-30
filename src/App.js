import { useState } from 'react';
import './App.scss';
import { DATE, MONTH, WEEK } from './components/utils/Constants';
import Day from './Day';
import Calendar from './components/calendar/Calendar';

function App() {
  const [activeMonth, setactiveMonth] = useState(0);

  let data = {
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
  };
  fetch('http://quinncareapi-dev.us-east-2.elasticbeanstalk.com/graph', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

  return (
    <>
      <nav className="nav">
        <h1 className="h1">
          {MONTH[activeMonth]}{' '}
          <span className="span">{DATE.getFullYear()}</span>
        </h1>
        <div className="row">
          {WEEK.map(week => (
            <Day day={week} />
          ))}
        </div>
      </nav>
      <div className="wrapper">
        <Calendar setActiveMonth={setactiveMonth} activeMonth={activeMonth} />
      </div>
    </>
  );
}

export default App;
