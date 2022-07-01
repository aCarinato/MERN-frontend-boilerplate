import axios from 'axios';
import { useEffect, useState } from 'react';

function HomePage() {
  const [messageFromServer, setMessageFromServer] = useState('');

  const fetchMessage = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/products`);
    setMessageFromServer(res.data.message);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return <div>{messageFromServer}</div>;
}

export default HomePage;
