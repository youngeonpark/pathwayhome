import React from 'react'
import house from '../assets/images/house.png';
import { Routes, Route, Link } from 'react-router-dom'
import About from './About.jsx'
import Select from './Select.jsx'
import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="homepg">              
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

                    <Link to="/select">
                      <button id="start-btn">start here</button>
                    </Link>
                  </div>
                  <img src={house} alt="house" id="house" />
                </div>
                <p>Helping returning citizens access reentry resources in New York State.</p>
              </div>
            </>
          }
        />
        <Route path="/select" element={<Select />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  )
}

export default App
