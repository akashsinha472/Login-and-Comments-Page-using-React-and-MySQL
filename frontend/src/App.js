import logo from './logo.svg';
import './App.css';
import Login from './Login';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;