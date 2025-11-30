import React, {useState} from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import navImg from '../assets/images/navigation.png';
import './Select.css'

function Select() {
    const [side, setSide] = useState("left");
    const [query, setQuery] = useState("");

    const counties = [
        "Chautauqua County",
        "Erie County",
        "Livingston County",
        "Orleans County",
        "Wyoming County"
    ];

    const filteredCounties = counties.filter(c =>
        c.toLowerCase().startsWith(query.toLowerCase())
    );

    return (
    <>
        <Routes>
            <Route
                path="/"
                element = {
                    <>
                        <div className="selectpg">
                            <div className="select-container">
                                <div className={`regcount-selector ${side}`}> 
                                    <div className={`selection ${side}`}></div>
                                    <div className="base">
                                        <span id="region" onClick={() => setSide("left")}>Region</span>
                                        <span id="county" onClick={() => setSide("right")}>County</span>
                                    </div> 
                                </div>
                                {side === "left" && (
                                    <div className="left-options">
                                        <div className="option">
                                            <div className="title">
                                                <h3>Region 1</h3>
                                                <p>Wende Hub</p>
                                            </div>
                                            <div id="nextsym">&gt;</div>
                                        </div>
                                        <div className="option">
                                            <div className="title">
                                                <h3>Region 2</h3>
                                                <p>Clinton Hub, Watertown Hub</p>
                                            </div>
                                            <div id="nextsym">&gt;</div>
                                        </div>
                                        <div className="option">
                                            <div className="title">
                                                <h3>Region 3</h3>
                                                <p>Elmira Hub, Oneida Hub</p>
                                            </div>
                                            <div id="nextsym">&gt;</div>
                                        </div>
                                        <div className="option">
                                            <div className="title">
                                                <h3>Region 4</h3>
                                                <p>Great Meadow Hub</p>
                                            </div>
                                            <div id="nextsym">&gt;</div>
                                        </div>
                                        <div className="option">
                                            <div className="title">
                                                <h3>Region 5</h3>
                                                <p>Great Haven Hub, New York City Hub</p>
                                            </div>
                                            <div id="nextsym">&gt;</div>
                                        </div>
                                    </div>
                                )}
                                {side === "right" && (
                                    <>
                                        <label>
                                            <input name="myInput" placeholder="Search your county" value={query} onChange={(e) => setQuery(e.target.value)} id="searchbox"/>
                                        </label>
                                        <div className="right-options">
                                            {filteredCounties.map((c, idx) => (
                                                <div key={idx}>{c}</div>
                                            ))}
                                        </div>
                                    </>
                                )}
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
