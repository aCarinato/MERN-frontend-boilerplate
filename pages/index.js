import axios from 'axios';
import { useEffect, useState } from 'react';

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [messageFromServer, setMessageFromServer] = useState('');

  const fetchMessage = async () => {
    let message;
    try {
      setIsLoading(true);
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/products`);

      message = res.data.message;
      setMessageFromServer(message);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // const fetchEvents = async () => {
  //   const res = await axios.get(`${process.env.NEXT_PUBLIC_API_GIROQ}/events/`);
  //   //Extract the Array contained in the 'events' field.
  //   const events = res.data;
  //   console.log(events);
  //   //Event data is globally accessible. But 'renderEvent' is just to render out the MAP with the markers
  //   // setEventData(events);
  // };

  useEffect(() => {
    fetchMessage();
    // fetchEvents();
  }, []);

  return <div>{isLoading ? <div>Loading</div> : messageFromServer}</div>;
}

export default HomePage;
