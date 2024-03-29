import * as React from "react"

import CustomButton from '../components/custom-button'
import Footer from '../components/footer'
import { InfoPanel } from '../components/media-panels'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import './stylesheets/major.css'

import caroline from '../images/caroline-ritchie-stahl.jpg'
import kevin from '../images/kevin.png'

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
                    <p>A music student in the Bachelor of Arts in Performing Arts is equipped with the knowledge and skills to thrive in the dynamic performing arts market. Our degree prepares students through music courses such as performance, theory, history, technology, arts administration, and entrepreneurship.</p>
                    <p>Music students can choose from more than 20 large and small ensembles within our band, choir, and orchestra programs and get hands-on experience in our professional roadhouse, the Brooks Center for the Performing Arts, our on-site learning laboratory.  Students also participate in masterclasses, develop connections with professional artists, and work alongside dynamic faculty who are leaders in their field.</p>
                    <p>More information regarding applications and auditions can be found <a href="https://www.clemson.edu/cah/academics/performing-arts/academics/music.html" target="_blank" rel="noreferrer">here</a>.</p>
                </div>
                <div className="major-right">
                    <div class="side-content">
                        <InfoPanel 
                            title="Audition Information" 
                            bodytext="Prospective voice students should prepare two vocal solos of contrasting styles. At least one of the selections MUST be a classical folk song, art song, or aria. Foreign language art songs are encouraged. The second can be from a musical. Make sure the selections adequately demonstrate musicality, tone quality, and technical abilities. Singers are encouraged to memorize their songs. For repertoire suggestions, please contact Dr. Lisa Sain Odom at "
                        />
                    </div>
                </div>
            </div>
            <div class="major-stories">
                <h2>Alumni Stories</h2>
                <div className="story">
                    <h3>Caroline Ritchie Stahl</h3>
                    <hr className="solid"></hr>
                    <div className="story-content">
                        <img src={caroline} alt="Image of alum, Caroline Ritchie Stahl, in Carnegie Hall"/>
                        <p>I attended Clemson from Fall 2005 to Spring 2009. My favorite part of the degree—and perhaps of my college experience in general!—was participating in Clemson Choirs. I looked forward to every rehearsal, as it was always a highlight of my day and a much-needed respite from the stress of academic life. There is nothing like singing and making music with your peers. I made some of my very best friends in Clemson Choirs, many of whom I still keep up with to this day! After college, I moved to New York City and pursued a career in Arts Administration. I spent 5 years in the Development department at Carnegie Hall, where I worked in foundation relations, corporate sponsorships, and individual giving.</p>
                    </div>
                </div>
                <div className="story">
                    <h3>Kevin Arnold</h3>
                    <hr className="solid"></hr>
                    <div className="story-content">
                        <img src={kevin} alt="Image of alum, Kevin Arnold"/>
                        <p>Being a Performing Arts major at Clemson University was instrumental in my development as not only an artist, but as a person. The truly special thing about the Department of Performing Arts is that you really get to establish a personal relationship with each of your professors, and they take a great investment in your growth. As a vocal performance major, I found that not only was the music faculty invested in my success, but the theatre and audio-tech professors were equally devoted to my maturation. Clemson has prepared me to be a successful artist at the graduate and professional level, and I feel very proud to say I went to Clemson.</p>
                    </div>
                </div>
            </div>
            <div className="major-foot">
                <Footer/>

            </div>
            
        </div>

        
        </Div100vh>
    )
}

export default Major