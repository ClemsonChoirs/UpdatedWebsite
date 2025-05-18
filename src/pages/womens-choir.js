import * as React from "react"
import { Link } from "gatsby"

import BigButton from '../components/big-button'
import Footer from '../components/footer'
import { VideoPanel, AudioPanel } from '../components/media-panels'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import ifICanSing from '../audio/if-i-can-sing.mp3'

import './stylesheets/ensemble-page.css'

const WomensChoir = () => {
    return (
        <Div100vh>
            <title>Women's Choir - Clemson University Choirs</title>
         <div class="navbar">
            <Navbar/>
        </div>

        <div class="ensemble-wrapper">
            <div className="ensemble-subwrapper">
                <div class="womens-feature">
                    <div className="ensemble-header">
                        <h1>Women's Choir</h1>
                    </div>
                </div>
                <div class="ensemble-content">
                    <div className="ensemble-left">
                        <p>The Clemson University Women’s Choir is a non-auditioned ensemble open to students from all majors who share a passion for singing. Rehearsing twice a week, the choir performs a wide variety of choral repertoire, showcasing diverse musical styles and traditions. The ensemble fosters community, creativity, and musical growth in an inclusive and welcoming environment.</p>
                        <p>In Spring 2024, the Women’s Choir had the unique opportunity to work with EMMY®-winning and GRAMMY®-nominated composer and conductor Jake Runestad in a special masterclass, culminating in a performance of his piece Rise Up.</p>
                        <p>Directed by Luke Browder</p>
                        <p>To join, simply register for the course (MUSC 3710) and show up to the first rehearsal on the very first Thursday of the semester at 2:00 p.m in Room 117 of the Brooks Center for the Performing Arts.</p>
                        <div className="ensemble-buttons">
                            <Link to="mailto:llbrowd@clemson.edu"><BigButton label="Email the Conductor"/></Link>
                        </div>
                        
                    </div>
                    <div className="ensemble-right">
                        <AudioPanel title={"If I Can Sing, I Will Be Free"} audio={ifICanSing} bodytext="Listen to the CU Women's Choir perform “If I Can Sing, I Will Be Free” by Michael John Trotta at their 2022 Spring Concert."/>
                        
                    </div>
                </div>

                
            </div>
            <div className="ensemble-foot" id="womens-foot">
            <Footer/>
        </div>
        </div>

        

        
        </Div100vh>
    )
}

export default WomensChoir