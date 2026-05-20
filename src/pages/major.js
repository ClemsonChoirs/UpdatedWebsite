import * as React from "react"

import CustomButton from '../components/custom-button'
import Footer from '../components/footer'
import { InfoPanel } from '../components/media-panels'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import './stylesheets/major.css'

import Michael from "../images/michael.jpeg"
import Kaleigh from "../images/kaleigh.jpg"
import AnnaGrace from "../images/annagrace.jpeg"
import Emy from "../images/emy.jpg"
import Alana from "../images/alana.jpg"
import Nia from "../images/nia.jpg"

import graphic from '../images/major-graphic.jpg'

const Major = () => {
    return (
        <Div100vh>
            <title>Voice Major - Clemson University Choirs</title>
        <div class="navbar">
            <Navbar/>
        </div>
        
        <div class="major-wrapper">
            <img className="feature" src={graphic} alt="Images of Clemson Choirs rehearsing with logo"/>
            <div class="major-content">
                <div className="major-left">
                    <h2>Vocal Studies in Performing Arts</h2>
                    <p>Vocal students in Clemson’s Bachelor of Arts in Performing Arts have the opportunity to perform in more than 20 ensembles, including a variety of choirs, chamber groups, and cross-disciplinary productions. They gain valuable real-world experience through performing and working at the Brooks Center for the Performing Arts. Students engage in masterclasses with visiting artists, collaborate with expert faculty, and build professional connections that extend far beyond the classroom.</p>
                    <p>This program provides a comprehensive and flexible education designed to prepare them for success in today’s evolving music industry. With a strong foundation in performance, music theory, history, technology, arts administration, and entrepreneurship, students can shape their coursework to match their individual interests and career goals.</p>
                    <p>More information regarding applications and auditions can be found <a href="https://www.clemson.edu/cah/academics/performing-arts/academics/music.html" target="_blank" rel="noreferrer">here</a>.</p>
                </div>
                {/* <div className="major-right">
                    <div class="side-content">
                        <InfoPanel 
                            title="Audition Information" 
                            bodytext="Prospective voice students should prepare two vocal solos of contrasting styles. At least one of the selections MUST be a classical folk song, art song, or aria. Foreign language art songs are encouraged. The second can be from a musical. Make sure the selections adequately demonstrate musicality, tone quality, and technical abilities. Singers are encouraged to memorize their songs. For repertoire suggestions, please contact Dr. Lisa Sain Odom at "
                        />
                    </div>
                </div> */}
            </div>
            <h2 className="major-stories-header">Recent Graduates</h2>
            <div class="major-stories">
            <MajorPanel
                    name="Nia Evans"
                    title="New England Conservatory, Masters of Music in Jazz Studies"
                    image={Nia}
                    body="Vanderbilt University, Master of Marketing '26"
                    link="https://youtu.be/CI0kpIp-1Ek?si=OgIh0xyPHPttWmun"
                />
                <MajorPanel
                    name="Alana Yarborough"
                    title="New York University, Masters in Vocal Performance and Vocal Pedagogy"
                    image={Alana}
                    body="Vanderbilt University, Master of Marketing '26"
                    link="https://youtu.be/Z_h-S3Qkpj8?si=OaAoWI4G0VBlfiye"
                />
                <MajorPanel
                    name="Emy Gardner"
                    title="Belmont University, Masters of Music in Composition"
                    image={Emy}
                    body="Vanderbilt University, Master of Marketing '26"
                    link="https://youtu.be/vBVczSYfjOI"
                />
                <MajorPanel
                    name="Kaleigh Stagich"
                    title="College Charleston, Master of Arts in Teaching/ Choral Music Concentration"
                    image={Kaleigh}
                    body=""
                    link="https://youtu.be/onW180FrLME"
                />
                <MajorPanel
                    name="Anna Grace Stiltner"
                    title="Queens University of Charlotte, Bachelors of Music in Music Therapy"
                    image={AnnaGrace}
                    body=""
                    link="https://youtu.be/pKqDKpFbaxc"
                />
                <MajorPanel
                    name="Michael Stebbins"
                    title="NYU, Master of Music in Vocal Performance and Vocal Pedagogy"
                    image={Michael}
                    body=""
                    link="https://youtu.be/IWTAB08-sko"
                />
                
            </div>
            <div className="major-foot">
                <Footer/>

            </div>
            
        </div>

        
        </Div100vh>
    )
}

export default Major

export const MajorPanel = (props) => {
    return (
        <div className="staff-panel">
            <h2>{props.name}</h2>
            <hr className="solid"></hr>
            <div className="panel-content">
                <h3 className="mobile-staff-title">{props.title}</h3>
                <img src={props.image} alt={"Image of " + props.name}/>
                <h3 className="web-staff-title">{props.title}</h3>
                {props.subtitle ? <h4>{props.subtitle}</h4> : ''}
                <p>
                    {props.body}
                    {!!props.link &&
                        <p>Watch their Senior Reflection <a href={props.link} target="_blank">here</a>.</p>
                    }
                </p>
            </div>
            
        </div>
    )
}