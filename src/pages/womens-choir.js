import * as React from "react"
import { Link } from "gatsby"

import BigButton from '../components/big-button'
import Footer from '../components/footer'
import { AudioPanel, VideoPanel } from '../components/media-panels'
import Navbar from "../components/navbar"

import './ensemble-page.css'

import nightSong from '../audio/night-song.mp3'

const WomensChoir = () => {
    return (
        <>
         <div class="navbar">
            <Navbar/>
        </div>

        <div class="ensemble-wrapper">
            <div class="ensemble-feature">
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
                        <Link to="../auditions"><BigButton label="Audition Information"/></Link>
                        <Link to="mailto:bernar5@clemson.edu"><BigButton label="Email the Conductor"/></Link>
                    </div>
                    
                </div>
                <div className="ensemble-right">
                    {/* <AudioPanel title={"Evening Gale Mvt. 1,"} subtitle={"“Night Song”"} audio={nightSong} bodytext="“Night Song” is the first movement in a three movement piece titled “Evening Gale” by Dr. Anthony Bernarducci. “Evening Gale” was premiered by Cantorei in the fall of 2019."/> */}
                    <VideoPanel title={"Simple Gifts & Invitation To Love"} subtitle={""} video={"https://www.youtube.com/embed/MytZaosNoJc"} bodytext="Clemson University Women's Choir performs two pieces, “Simple Gifts” and “Invitation to Love”, as part of the Clemson Vocal Arts Series."/>
                </div>
            </div>

            <div className="ensemble-foot">
                <Footer/>
            </div>

        </div>

        
        </>
    )
}

export default WomensChoir