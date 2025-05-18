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
                        <h2>Founded in 1896, Clemson University Men’s Choir is the oldest music group on campus — and still going strong.</h2>
                        <p>Men’s Choir sings everything from classic choral pieces to folk, spirituals, and pop hits. No audition needed, and open to all majors and levels of experience. It is a great way to meet people, make music, and be part of a proud Clemson tradition.</p>
                        <p>Recently, the Men’s Choir had the opportunity to participate in a masterclass with the GRAMMY®-winning vocal ensemble Chanticleer, where they worked on technique and ensemble singing with some of the best in the business.</p>
                        <p>Directed by Luke Browder.</p>
                        <p>To join, simply register for the course (MUSC 3720) and show up to the first rehearsal on the very first Thursday of the semester at 12:30 p.m in Room 117 of the Brooks Center for the Performing Arts.</p>
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