import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar'; 

function App() {
  return (
    <>
      <Navbar /> {/* Add Navbar here */}
      <Main /> {/* Keep Main as the main content */}
    </>
  );
}

export default App;
