import * as React from "react"
import { Link } from "gatsby"

import BigButton from '../components/big-button'
import Footer from '../components/footer'
import { AudioPanel, VideoPanel } from '../components/media-panels'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import './stylesheets/ensemble-page.css'

import nightSong from '../audio/night-song.mp3'

const Cantorei = () => {
    return (
        <Div100vh>

         <div class="navbar">
            <Navbar/>
        </div>

        <div class="ensemble-wrapper">
            <div class="cantorei-feature">
                <div className="ensemble-header">
                    <h1>Cantorei</h1>
                </div>
            </div>
            <div class="ensemble-content">
                <div className="ensemble-left">
                    <h2>Clemson Cantorei is an auditioned mixed-voice chamber ensemble consisting of 24 singers from any major. </h2>
                    <p>Cantorei provides an enriching chamber music experience to students at Clemson University. Singers can look forward to performing early music, contemporary choral works, and new modern music commissioned for the ensemble. Cantorei is conducted by Dr. Anthony Bernarducci.</p>
                    <p>Rehearsals are Monday and Wednesday from 2:30 until 3:45 in Room 117 of the Brooks Center. To enroll, register for MUSC 3450 (Chamber Choir).</p>
                    <div className="ensemble-buttons">
                        <Link to="../auditions"><BigButton label="Audition Information"/></Link>
                        <Link to="mailto:bernar5@clemson.edu"><BigButton label="Email the Conductor"/></Link>
                    </div>
                    
                </div>
                <div className="ensemble-right">
                    <AudioPanel title={"Evening Gale Mvt. 1,"} subtitle={"“Night Song”"} audio={nightSong} bodytext="“Night Song” is the first movement in a three movement piece titled “Evening Gale” by Dr. Anthony Bernarducci. “Evening Gale” was premiered by Cantorei in the fall of 2019."/>
                    <VideoPanel title={"“Gloria” from the Missa Brevis San Francesco d’Assisi"} subtitle={""} video={"https://www.youtube.com/embed/fGec1KIPtCI"} bodytext="Gloria is the second movement of Anthony Bernarducci’s Missa Brevis San Francesco d’Assisi, performed by Clemson Cantorei in October of 2021."/>
                </div>
            </div>

            

        </div>

        <div className="ensemble-foot">
                <Footer/>
            </div>
    </Div100vh>
    )
}

export default Cantorei