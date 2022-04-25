import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './component/Signup';
import Navbar from './component/Navbar';
import Signin from './component/Signin';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/signin'  element={<Signin/>}></Route>
        <Route path='/signup'  element={<Signup/>}></Route>
        <Route path='/dashboard'  element={<Dashboard/>}></Route>
      </Routes>
    </>

    
  );
}

export default App;
