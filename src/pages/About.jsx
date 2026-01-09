import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import mapLogo from '../assets/images/mapLogo.png';
import './About.css'

function About() {
  return (
    <>
        <div className="aboutpg">
            <Link to="/" className="header">
                {/* <div className='header'> */}
                    <img src={mapLogo} alt="map logo" id="map-logo" />
                    <div className='title'>
                        <h3>NYS Reentry</h3>
                        <p>Resource Directory</p>
                    </div>
                {/* </div> */}
            </Link>
            <h1>About Us</h1>
            <div className="info">
                <p id="intro">Welcome to Pathway Home!</p>
                <p id="content">Reentry is a critical moment in the lives of justice-impacted individuals. It’s the moment when a person has the opportunity to rebuild, to reconnect, and to rediscover their potential. But the road to reintegration is often filled with challenges. Without the right resources, returning citizens may face barriers that make it harder to succeed. That’s why access to effective reentry services is so important.
                    <br/><br/>Studies show that nearly 70% of individuals released from prison will be re-arrested within three years. Traditional reentry programs often struggle to address the full range of needs housing, employment, education, and mental health support, that returning citizens face. In fact, only about one in five people who participate in traditional reentry programs are able to secure stable employment within the first year. This makes it clear that what we’ve been doing isn’t enough.
                    <br/><br/>On the other hand, holistic reentry services those which consider a person’s entire life, from emotional well-being to physical health, to community connections, show remarkable success. Research has found that those who engage with holistic reentry programs have up to a 60% lower recidivism rate, a much higher chance of securing employment, and a greater sense of overall well-being. These programs are proving that supporting the whole person can help them thrive, not just survive.
                    <br/><br/>That’s why we created this app. It’s built to support you through this transition with a holistic approach, ensuring that no aspect of your reentry journey is overlooked. With resources tailored for all 62 counties in New York State, this app offers everything from housing assistance and job opportunities to mental health support and legal services. Plus, it’s synced with Google Maps to give you step-by-step directions, making it easier to find the services you need wherever you are.
                    <br/><br/>We believe that everyone deserves the chance to succeed, and this app is here to guide you on your journey home. 
                    <br/>You don’t have to do this alone.
                
                <Link to="/select">
                    <button id="back-btn"> Explore now &gt; </button>
                </Link>
                </p>
            </div>
        </div>
    </>
  )
}

export default About
