import React from 'react';
import './App.css';
import {Navbar, Home, Aboutus, Sponsors} from './2ndex';
import './fonts.css'
const App = () => {
  return (
    <div className='whole'>
      <div className="background">
        <Navbar/>
        <Home/>
        
        </div>
        <Aboutus/>
        <Sponsors/>
        
      </div>

      
    
  )
}

export default App
