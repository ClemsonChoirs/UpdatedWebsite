import * as React from "react"
import { Link } from "gatsby"

import BigButton from '../components/big-button'
import Footer from '../components/footer'
import { AudioPanel, VideoPanel } from '../components/media-panels'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import './stylesheets/ensemble-page.css'

import featuredAudio from '../audio/blue-bird2.mp3'
import featuredAudio2 from '../audio/abraham-and-isaac.mp3'

const Cantorei = () => {
    return (
        <Div100vh>
        <title>Cantorei - Clemson University Choirs</title>
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
                    <p>Clemson University’s Cantorei, founded in 2017, is a premier mixed-voice choral ensemble composed of 24 college students from a fusion of educational disciplines. Cantorei has established itself as a select ensemble on campus, known for its chamber-focused programming and exceptional vocal artistry. Under the direction of Dr. Anthony Bernarducci, Cantorei’s repertoire highlights a wide range of genres, from classical masterpieces to contemporary works. Since its inception, Cantorei has worked with professional ensembles like the Gesualdo Six, and has both commissioned and premiered many choral works, most recently <a href="https://jakerunestad.com/products/el-aire-baila" target="_blank">Jake Runestad’s “El Aire Baila”</a> in the Spring of 2024. Read about Runestad’s visit to Clemson <a href="https://news.clemson.edu/incredibly-special-clemson-students-impress-emmy-award-winning-composer-in-one-of-a-kind-visit/" target="_blank">here.</a></p>
                    <p>In Fall 2024, Clemson University’s Cantorei was honored to perform at the South Carolina American Choral Directors Association (SCACDA) Conference at Furman University, where they showcased two chamber choral works by Dr. Anthony Bernarducci. Building on this collaboration, Cantorei recorded these works in February 2025 for Something Beautiful Remains, Dr. Bernarducci’s new EP, which was released on September 5, 2025. It is available on all major streaming platforms as well as the Naxos Music Library. The album was produced by GIA Publications and audio engineered by Joshua Rinker, a Clemson Cantorei alumnus and staff member of the Department of Performing Arts.
                    </p>
                    <p>Dedicated to musical excellence, Cantorei continues to deliver high-level performances while fostering a rich and inclusive music education experience for all Clemson students.</p>
                    <p>Directed by Dr. Anthony Bernarducci</p>
                    <p>Rehearsals are Monday and Wednesday from 2:30 until 3:45 in Room 117 of the Brooks Center. To enroll, register for MUSC 3450 (Chamber Choir).</p>
                    <p><a href="https://www.youtube.com/playlist?list=PLJI3Pv0gkD2B1ey5-N2YlgR2UkUAVcTRW" target="_blank">Listen to Cantorei's EP, "Something Beautiful Remains"</a></p>
                    <div className="ensemble-buttons">
                        <Link to="../auditions"><BigButton label="Audition Information"/></Link>
                        <Link to="mailto:bernar5@clemson.edu"><BigButton label="Email the Conductor"/></Link>
                    </div>
                    
                </div>
                <div className="ensemble-right">
                    <AudioPanel title={"The Blue Bird"} audio={featuredAudio} bodytext="Listen to “The Blue Bird” by Charles Stanford, performed by Cantorei."/>
                    <AudioPanel title={"Abraham and Isaac"} audio={featuredAudio2} bodytext="Listen to “Abraham and Isaac” by Roger Ames, performed by Cantorei."/>
                    <VideoPanel title={"Something Beautiful Remains"} subtitle={"EP Recording Video"} video={"https://www.youtube.com/embed/RYNMf6JLzc8?si=Qq1vTqNl-DONUs6w"} bodytext="Watch the making of Cantorei's EP, “Something Beautiful Remains”, composed by choir director, Anthony Bernarducci."/>
                </div>
            </div>

            <div className="ensemble-foot">
                <Footer/>
            </div>

        </div>

        
    </Div100vh>
    )
}

export default Cantorei