import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Button from './buttonComponents/Button';
import Video from './videosComponents/Video';
import Navbar from './PageComponents/Navbar';
import Sidebar from './PageComponents/Sidebar';
import Herosection from './PageComponents/Herosection';

function App() {
  return (
    <div className="App">
      <div className="top">
        <Navbar/>
      </div>
      <div className="side">
        <Sidebar/>
      </div>
      <div className="hero">
        <Herosection/>
      </div>
    </div>
    
  )
}

export default App
