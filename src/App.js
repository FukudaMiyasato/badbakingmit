import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import FormContext from './Context';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Test from './components/Test';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <div className='container'>
      <FormContext.Provider value={{
          users:[{
            username:'Carlo', 
            email:'carlo@gmail.com',
            password:'1234567', 
            balance:10}
          ]}}>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          
          <Route exact path='/createaccount' element={<CreateAccount />} />
          <Route exact path='/deposit' element={<Deposit />} />
          <Route exact path='/withdraw' element={<Withdraw />} />
          <Route exact path='/alldata' element={<AllData />} />
        </Routes>
      </FormContext.Provider>
    </div>
  </BrowserRouter>
  );
}

export default App;
