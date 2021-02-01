import { useState, useEffect } from 'react';
import './home.scss';
import { MONTH, WEEK } from '../utils/Constants';
import Day from './Day';
import Calendar from './calendar/Calendar';
import { payload } from '../payload';

function Home() {
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
  }, []);

  if (loading) return <p>Loading...</p>;
  else {
    return (
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
    );
  }
}

export default Home;
