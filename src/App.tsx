import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import socket from './socket';
import Auth from "./pages/Auth/Auth";
import Room from "./pages/Room/Room";
import Registration from "./pages/Registration/Registration";
import {getUserState} from "./store/user/selectors";
import './App.css';

const App:React.FC = () => {
    const user = useSelector(getUserState);

  useEffect((): void => {
    socket.on("connect", () => {
        console.log(socket.id);
    });
  }, []);

  return(
    <Routes>
        <Route path='/' element={<Room />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/reg' element={<Registration />} />
    </Routes>
  )
}

export default App;