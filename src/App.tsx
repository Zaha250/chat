import React, {useEffect, useState} from 'react';
import { io } from 'socket.io-client';
import './App.css';

const socket = io();

const App:React.FC = () => {
  const [id, setId] = useState<string | number>('');

  useEffect((): void => {
    socket.on("connect", () => {
      console.log(socket.connected); 
      setId(socket.id);
    });
  }, []);

  return(
    <h1>{id}</h1>
  )
}

export default App;