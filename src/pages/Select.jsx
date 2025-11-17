import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import navImg from '../assets/images/navigation.png';
import './Select.css'

function Select() {
  return (
    <>
        <Routes>
            <Route
                path="/"
                element = {
                    <>
                        <div className="selectpg">
                            <div className="select-container">
                                <div className="regcount-selector"> 
                                    <div className="selection"></div>
                                    <div className="base">
                                        <span id="region">Region</span>
                                        <span id="county">County</span>
                                    </div> 
                                </div>
                                <label>
                                    <input name="myInput" placeholder="Search your county" id="searchbox"/>
                                </label>
                                <div className="options">
                                    <div>Chautauqua County</div>
                                    <div>Chautauqua County</div>
                                    <div>Chautauqua County</div>
                                    <div>Chautauqua County</div>
                                </div>
                            </div>
                            <div className="main-container">
                                <img src={navImg} alt="icon" id="nav-icon" />
                                <h1>Which county will be welcoming you <span>home</span> ?</h1>
                                <div className="map"></div>
                            </div>
                        </div>
                    </>
                    
                }
            />
        </Routes>
        
    </>
  )
}

export default Select
