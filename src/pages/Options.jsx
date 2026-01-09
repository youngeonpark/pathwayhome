import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import searchImg from '../assets/images/zoom-in.png';
import suitcaseImg from '../assets/images/options-img/suitcase.png';
import houseImg from '../assets/images/options-img/house.png';
import carImg from '../assets/images/options-img/car.png';
import notebookImg from '../assets/images/options-img/notebook.png';
import heartrateImg from '../assets/images/options-img/heart-rate.png';
import thoughtbubbleImg from '../assets/images/options-img/thought-bubble.png';
import shieldImg from '../assets/images/options-img/shield.png';

import './Option.css'

function Options() {
  return (
    <>
        <div className="optionpg">
            <div className="searchbar">
                <img src={searchImg} alt="icon" id="search-icon" />
                <label>
                    <input type="text" placeholder="availability in your county" id="searchbox"/>
                </label>
            </div>
            <div className="mainbox-container">
                <div className="box" id="employment">
                    <img src={suitcaseImg} alt="icon" id="suitcase-img"/>
                    <h3>Employment</h3>
                </div>
                <div className="box" id="housing">
                    <img src={houseImg} alt="icon"/>
                    <h3>Housing</h3>
                </div>
                <div className="box" id="education">
                    <img src={notebookImg} alt="icon"/>
                    <h3>Education</h3>
                </div>
                <div className="box" id="transportation">
                    <img src={carImg} alt="icon"/>
                    <h3>Transportation</h3>
                </div>
            </div>
            <div className="mainbox-second-container">
                <div className="box">
                    <img src={heartrateImg} alt="icon"/>
                    <h3>Health Insurance</h3>
                </div>
                <div className="box">
                    <img src={thoughtbubbleImg} alt="icon"/>
                    <h3>Mental Health</h3>
                </div>
                <div className="box">
                    <img src={shieldImg} alt="icon"/>
                    <h3>Subtance Use Treatment</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default Options
