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
                    <h2>Tigeroar is an auditioned male acapella group consisting of a max of 16 members.</h2>
                    <p>Tigeroar is comprised of 12-16 men selected from the larger Clemson choral ensembles by audition. The group aims to bring talented and passionate vocal performers together in the pursuit of musicianship and excellence in a-cappella performance, while bringing popular songs to life with new and interesting covers.</p>
                    <p>Tigeroar rehearses on Tuesdays and Thursdays in Brooks 117, meeting from 5pm to 6:15pm during the Spring semester, and from 6:30pm to 7:45pm in the Fall. To enroll, register for MUSC 3410 (Men's Breakout Ensemble).</p>
                    <div className="ensemble-buttons">
                        <Link to="mailto:conley2@clemson.edu"><BigButton label="Email the Faculty Director"/></Link>
                        <a href="https:/instagram.com/tigeroarclemson" target="_blank"><BigButton label="@TigeroarClemson on Instagram"/></a>
                    </div> 
                </div>
                <div className="ensemble-right">
                    <VideoPanel title={"Uptown Girl"} subtitle={""} video={"https://www.youtube.com/embed/6yF4nFsg_fQ"} bodytext="As performed by Billy Joel, arranged by Jake Liguori."/>
                </div>
            </div>
            <div className="audition-info-wrapper">
                <h2>Audition Information</h2>
                <p>Auditions for the Fall 2023 semester will be held at 6:30pm on Thursday, August 24th in the Brooks Center for the Performing Arts, Room 117.</p>
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