import * as React from "react"
import { Link } from "gatsby"

import BigButton from '../components/big-button'
import Footer from '../components/footer'
import { AudioPanel } from '../components/media-panels'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import almaMater from '../audio/alma-mater.mp3'

import './stylesheets/ensemble-page.css'

const MensChoir = () => {
    return (
    <Div100vh>
        <title>Men's Choir - Clemson University Choirs</title>
         <div class="navbar">
            <Navbar/>
        </div>

        <div class="ensemble-wrapper">
            <div className="ensemble-subwrapper">
                <div class="mens-feature">
                    <div className="ensemble-header">
                        <h1>Men's Choir</h1>
                    </div>
                </div>
                <div class="ensemble-content">
                    <div className="ensemble-left">
                        <h2>Men's Choir (MUSC 3720) is a non-auditioned, all-male ensemble.</h2>
                        <p>Begun in 1896, Men's Choir is the oldest musical organization at Clemson University. This choir performs a wide variety of traditional choral literature representing multiple genres, style periods, and nationalities. No audition is required and students from all majors are encouraged to join. CU Men's Choir is conducted by Luke Browder.</p>
                        <p>To participate, register for the course and attend the first rehearsal on the first Thursday of each semester at 12:30 p.m.</p>
                        <div className="ensemble-buttons">
                            <Link to="mailto:llbrowd@clemson.edu"><BigButton label="Email the Conductor"/></Link>
                        </div>
                        
                    </div>
                    <div className="ensemble-right">
                        <AudioPanel title={"Clemson University Alma Mater"} audio={almaMater} bodytext="Listen to the CU Men's Choir perform the Clemson University Alma Mater, written by Robert Farmer and Hugh McGarity, which they sing at the end of each of their concerts."/>
                        
                    </div>
                </div>
            </div>

            <div className="ensemble-foot" id="mens-foot">
                <Footer/>
            </div>

        </div>
        
       
        
        </Div100vh>
    )
}

export default MensChoir