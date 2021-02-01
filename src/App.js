import { useState, useEffect } from 'react';
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
    async function fetchData() {
      const response = await fetch(
        'http://quinncareapi-dev.us-east-2.elasticbeanstalk.com/graph',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      );
      const data = await response.json();
      setitems(data);
      setloading(false);
    }
    fetchData();
  }, [items]);

  return <h1>Hello world</h1>;
}

export default App;
