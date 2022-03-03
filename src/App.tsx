import React, {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import socket from './socket';
import './App.css';
import Auth from "./pages/Auth/Auth";
import Room from "./pages/Room/Room";
import Registration from "./pages/Registration/Registration";

const App:React.FC = () => {

  useEffect((): void => {
    socket.on("connect", () => {
        console.log(socket.id);
    });
  }, []);

  return(
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='/reg' element={<Registration />} />
      <Route path='/profile/:login' element={<Room />} />
    </Routes>
  )
}

export default App;