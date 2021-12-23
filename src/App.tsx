import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import './App.css';

const socket = io();

const App:React.FC = () => {

  useEffect((): void => {
    socket.on("connect", () => {
      console.log(socket.connected); 
    });
  }, []);

  return(
    <h1>1</h1>
  )
}

export default App;