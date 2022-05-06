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
                        <h2>Women’s Choir (MUSC 3710) is a non-auditioned all-female ensemble from any major.</h2>
                        <p>The Clemson University Women’s Choir consists of about 45 undergraduate students. The ladies represent almost every major Clemson University offers, but are united by a passion for vocal music. Women’s Choir meets twice a week, learning a multitude of pieces from varying genres of choral literature. CU Women's Choir is conducted by Laura Ritter.</p>
                        <p>To participate, register for the course and attend the first rehearsal on the first Thursday of each semester at 2:00 p.m.</p>
                        <div className="ensemble-buttons">
                            <Link to="mailto:llritte@clemson.edu"><BigButton label="Email the Conductor"/></Link>
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