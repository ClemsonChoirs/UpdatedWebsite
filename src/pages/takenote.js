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
        <title>TakeNote - Clemson University Choirs</title>
        <div class="navbar">
            <Navbar/>
        </div>

        <div class="ensemble-wrapper">
            <div class="takenote-feature">
                <div className="ensemble-header">
                    <h1>TakeNote</h1>
                </div>
            </div>
            <div class="ensemble-content">
                <div className="ensemble-left">
                    <p>TakeNote is Clemson University’s all-female a cappella group, consisting of 12–16 exceptional vocalists selected through competitive auditions from the university’s choral ensembles. Known for their standout soloists, impressive vocal percussion, and harmonious arrangements, TakeNote performs a diverse repertoire ranging from classic hits of the 1960s to contemporary chart-toppers. Through their engaging performances, the group showcases their dedication to musical excellence and their passion for a cappella artistry.</p>
                    <p>TakeNote is offered as a one-credit hour course that meets on Tuesdays and Thursdays from 5pm to 6:15pm in the Fall and 6:30 to 7:45 p.m in the Spring. Auditions are held at the beginning of each semester. Please look to social media for more information.</p>
                    <p>To enroll, register for MUSC 3420 (Women's Breakout Ensemble)</p>
                    <div className="ensemble-buttons">
                        <Link to="mailto:conley2@clemson.edu"><BigButton label="Email the Faculty Director"/></Link>
                        <a href="https://instagram.com/clemsontakenote" target="_blank"><BigButton label="@ClemsonTakeNote on Instagram"/></a>
                    </div>
                </div>
                {/* <div className="ensemble-right"></div> */}
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