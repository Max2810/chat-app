import React from 'react';
import './App.css';
import Contact from'./components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact Name= 'Caroline Garza' avatar= "https://randomuser.me/api/portraits/women/33.jpg" online/>
      <Contact Name= 'Dale Sullivan' avatar= "https://randomuser.me/api/portraits/men/97.jpg" online/>
      <Contact Name= 'Norma Watts' avatar= "https://randomuser.me/api/portraits/women/22.jpg" offline/>
    </div>
  );
}

export default App;
