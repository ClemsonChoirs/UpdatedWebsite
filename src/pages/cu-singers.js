import * as React from "react"
import { Link } from "gatsby"

import BigButton from '../components/big-button'
import Footer from '../components/footer'
import { VideoPanel } from '../components/media-panels'
import Navbar from "../components/navbar"

import './stylesheets/ensemble-page.css'

const Singers = () => {
    return (
        <>
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
                        <h2>Clemson University Singers (MUSC 3700) is a mixed vocal ensemble consisting of approximately 70 auditioned students from any major.</h2>
                        <p>Each year, Clemson University Singers performs several concerts in the Brooks Center for the Performing Arts and off-campus. In addition to performing a range of unaccompanied repertoire, each spring CU Singers performs a Choral-Orchestral Masterwork.</p>
                        <p>Rehearsals are MWF from 11:15 until 12:05 in Room 117 of the Brooks Center. To enroll, register for MUSIC 3700.</p>
                        <div className="ensemble-buttons">
                            <Link to="../auditions"><BigButton label="Audition Information"/></Link>
                            <Link to="mailto:bernar5@clemson.edu"><BigButton label="Email the Conductor"/></Link>
                        </div>
                        
                    </div>
                    <div className="ensemble-right">
                        {/* <AudioPanel title={"Evening Gale Mvt. 1,"} subtitle={"“Night Song”"} audio={nightSong} bodytext="“Night Song” is the first movement in a three movement piece titled “Evening Gale” by Dr. Anthony Bernarducci. “Evening Gale” was premiered by Cantorei in the fall of 2019."/> */}
                        <VideoPanel title={"Proud Music of the Storm"} subtitle={""} video={"https://www.youtube.com/embed/cbzS7gR-HG4"} bodytext="CU Singers performed Jake Runestad's “Proud Music of the Storm” at their Fall Concert in October of 2021."/>
                    </div>
                </div>
            </div>

            

        </div>

        <div className="ensemble-foot" id="singers-foot">
                <Footer/>
            </div>
        </>
    )
}

export default Singers