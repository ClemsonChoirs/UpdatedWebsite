import * as React from "react"
import { Link } from "gatsby"

import BigButton from '../components/big-button'
import Footer from '../components/footer'
import { AudioPanel, VideoPanel } from '../components/media-panels'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import './stylesheets/ensemble-page.css'

const Cantorei = () => {
    return (
        <Div100vh>
        <title>Tigeroar - Clemson University Choirs</title>
        <div class="navbar">
            <Navbar/>
        </div>

        <div class="ensemble-wrapper">
            <div class="tigerroar-feature">
                <div className="ensemble-header">
                    <h1>Tigeroar</h1>
                </div>
            </div>
            <div class="ensemble-content">
                <div className="ensemble-left">
                    <p>Tigeroar is Clemson University’s premier all-male a cappella group, made up of 12–16 talented men selected through competitive auditions from the university’s choral ensembles. With a focus on musical excellence and dynamic performances, Tigeroar brings a fresh twist to popular songs, blending creativity with precision. Their performances showcase a wide range of musical styles, offering both classic hits and contemporary favorites reimagined through a cappella arrangements.</p>
                    <p>Tigeroar is offered as a one-credit hour course that meets on Tuesdays and Thursdays from 5 p.m. to 6:15 p.m. during the Spring semester, and from 6:30 p.m. to 7:45 p.m. in the Fall. Auditions are held at the beginning of each semester. Please look to social media for more information.</p>
                    <p>To enroll, register for MUSC 3410 (Men's Breakout Ensemble).</p>
                    <div className="ensemble-buttons">
                        <Link to="mailto:conley2@clemson.edu"><BigButton label="Email the Faculty Director"/></Link>
                        <a href="https:/instagram.com/tigeroarclemson" target="_blank"><BigButton label="@TigeroarClemson on Instagram"/></a>
                    </div> 
                </div>
                <div className="ensemble-right"></div>
            </div>
            <div className="audition-info-wrapper">
                <h2>Audition Information</h2>
                <p className="audition-info">Auditions will include the following:</p>
                <ol>
                    <li>Questionnaire: Tell us about yourself!</li>
                    <li>Range Test: Vocal exercises to test the upper and lower limits of your vocal range.</li>
                    <li>Pitch Matching: Listen to a series of pitches, then match the pitches with your voice.</li>
                    <li>Solo Performance: 1-2 minutes (a verse and chorus) of a song to showcase your voice.</li>
                </ol>
            </div>

            <div className="ensemble-foot">
                <Footer/>
            </div>

        </div>

        
    </Div100vh>
    )
}

export default Cantorei