import React, { Fragment } from 'react';
import Student from './Student';
import logo from './logo.svg';
import './App.css'

function App() { 
  return (
    <div className='App'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Fragment>
      <h1>Welcome to fullstack development - 1</h1>
      <p>React JS Programming Week09 Lab exercise</p>
      <Student></Student>
    </Fragment>
    </div>
  );
}

export default App;
