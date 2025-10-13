import React from 'react'
import house from './assets/images/house.png';
import './App.css'

function App() {
  return (
    <>
      <div className="background-circles">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>
      </div>
      <div className="title">
        <h1 id="your">Your</h1>
        <h1 id="journey">Journey</h1>
        <h1 id="begins">Begins</h1>
      </div>
      <div className="container">
        <div className="inside-container">
          <h3>Start now with new beginnings</h3>
          <button>start here</button>
        </div>
      <img src={house} alt="house" id="house" />
      </div>
      <p>Helping returning citizens access reentry resources in New York State.</p>
    </>
  )
}

export default App
