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
                    <h2>TakeNote is an auditioned all female a capella group consisting of up to 16 singers from any major. </h2>
                    <p>TakeNote is comprised of 12-16 women selected from the larger Clemson choral ensembles by audition. While highlighting vocal percussion and soloists, TakeNote performs popular music ranging from the 1960s to contemporary songs.</p>
                    <p>TakeNote rehearses on Tuesdays and Thursdays in Brooks 117, meeting from 5pm to 6:15pm during the Fall semester, and from 6:30pm to 7:45pm in the Spring. To enroll, register for MUSC 3420 (Women's Breakout Ensemble)</p>
                    <div className="ensemble-buttons">
                        <Link to="mailto:conley2@clemson.edu"><BigButton label="Email the Faculty Director"/></Link>
                        <a href="https:/instagram.com/clemsontakenote" target="_blank"><BigButton label="@ClemsonTakeNote on Instagram"/></a>
                    </div>
                </div>
                <div className="ensemble-right">
                    <VideoPanel title={"Ain't No Other Man"} subtitle={""} video={"https://www.youtube.com/embed/uZUZe9EvGgg"} bodytext="As performed by Christina Aguilera, arranged by Kyle McTavish."/>
                </div>
            </div>
            <div className="audition-info-wrapper">
                <h2>Audition Information</h2>
                <p>Auditions for the Fall 2023 semester will be held at 5pm on Thursday, August 24th in the Brooks Center for the Performing Arts, Room 117.</p>
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