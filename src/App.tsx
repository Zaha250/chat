import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";
import socket from './socket';
import './App.css';
import Connect from "./pages/Connect/Connect";
import Room from "./pages/Room/Room";

const App:React.FC = () => {
    const [user, setUser] = useState<string>('');

  useEffect((): void => {
    socket.on("connect", () => {
    });
  }, []);

  return(
    <Routes>
      <Route path='/' element={<Connect setUser={setUser} />} />
      <Route path='/room/:id' element={<Room user={user} />} />
    </Routes>
  )
}

export default App;