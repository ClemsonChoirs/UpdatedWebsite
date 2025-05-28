import * as React from "react"
import { Link } from "gatsby"

import BigButton from '../components/big-button'
import Footer from '../components/footer'
import { AudioPanel, VideoPanel } from '../components/media-panels'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import './stylesheets/ensemble-page.css'

import featuredAudio from '../audio/into-the-light.mp3'


const Singers = () => {
    return (
        <Div100vh>
        <title>CU Singers - Clemson University Choirs</title>
        <div class="navbar">
            <Navbar/>
        </div>

        <div class="ensemble-wrapper">
            <div className="ensemble-subwrapper">
                <div class="singers-feature">
                    <div className="ensemble-header">
                        <h1>CU Singers</h1>
                    </div>
                </div>
                <div class="ensemble-content">
                    <div className="ensemble-left">
                        <p>Clemson University Singers is a large, auditioned mixed vocal ensemble of approximately 70 students, representing a wide range of academic disciplines across the university. The ensemble performs a diverse selection of choral repertoire each season, culminating annually in the presentation of a major choral-orchestral masterwork.</p>
                        <p>In Spring 2023, the ensemble embarked on an international tour through Europe, including a performance in the historic Canterbury Cathedral. In Spring 2024, CU Singers participated in a masterclass with renowned composer Jake Runestad and later performed his powerful choral work Into the Light. In 2025, the ensemble traveled to New York City to perform Mozart’s Mass in C at Carnegie Hall, with Dr. Anthony Bernarducci serving as guest conductor. Most recently, CU Singers presented Cherubini’s Requiem, widely regarded as one of the greatest choral masterworks of all time.</p>
                        <p>Directed by Dr. Anthony Bernarducci</p>
                        <p>Rehearsals are MWF from 11:15 until 12:05 in Room 117 of the Brooks Center. To enroll, register for MUSIC 3700.</p>
                        <div className="ensemble-buttons">
                            <Link to="../auditions"><BigButton label="Audition Information"/></Link>
                            <Link to="mailto:bernar5@clemson.edu"><BigButton label="Email the Conductor"/></Link>
                        </div>
                        
                    </div>
                    <div className="ensemble-right">
                        <AudioPanel title={"Into The Light"} subtitle={""} audio={featuredAudio} bodytext="Listen to CU Singers perform Jake Runestad's “Into The Light”, after participating in a masterclass with the composer."/>
                        <VideoPanel title={"Ubi Caritas"} subtitle={""} video={"https://www.youtube.com/embed/EzpmmI4Zfv0?si=E16e_uCJ8RtXO05f"} bodytext="Watch our Clemson University Singers perform “Ubi Caritas” by Ola Gjeilo"/>
                    </div>
                </div>
            </div>

            <div className="ensemble-foot" id="singers-foot">
                <Footer/>
            </div>

        </div>

        
        </Div100vh>
    )
}

export default Singers