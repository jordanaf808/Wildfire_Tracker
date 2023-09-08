// useState for adding events as pieces of state. useEffect to call request
import { useState, useEffect } from 'react';
import Map from './components/Map';
import Loader from './components/Loader';
import Header from './components/Header';

// default value will be an empty array. set loading value to false by default, state will be called 'Loading'.
function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Make call in useEffect with an async fetch. first thing set loading to true.
  // parse the response and destructure the events array out of data
  // setLoading to false now that we've received our promises
  // call fetchEvents()
  // pass an empty 'dependency array' as the second argument to our useEffect

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        'https://eonet.gsfc.nasa.gov/api/v2.1/categories/8?status=open&days=90'
      );
      const data = await res.json();
      console.log('data', data);
      const { events } = data;
      events ? setEventData(events) : setLoading(true);
      setLoading(false);
      console.log("setEventData: ", events);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
