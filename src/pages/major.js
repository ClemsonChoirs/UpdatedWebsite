import * as React from "react"

import CustomButton from '../components/custom-button'
import Footer from '../components/footer'
import { InfoPanel } from '../components/media-panels'
import Navbar from "../components/navbar"

import './major.css'


const Major = () => {
    return (
        <>
        <div class="navbar">
            <Navbar/>
        </div>
        
        <div class="major-wrapper">
            <div class="major-feature">
                <div className="major-header">
                    <h1>Performing Arts Major</h1>
                </div>
            </div>
            <div class="major-content">
                <div className="major-left">
                    <h2>Vocal Studies in Performing Arts</h2>
                    <p>The B.A. in Performing Arts - Music Concentration allows you to create your own future in the Performing Arts. Our innovative Music degree combines performance (lessons and ensembles), music theory, music history, music technology (Finale, MIDI, recording), and arts administration (music business, entrepreneurship, and marketing).</p>
                    <p>Music students collaborate with Theater and Audio students and get hands-on experience in our professional roadhouse, the Brooks Center for the Performing Arts, our on-site learning laboratory.</p>
                    <p>Students also participate in masterclasses, develop connections with professional artists, and work alongside dynamic faculty who are leaders in their field. Most importantly, our students are prepared for today’s highly competitive job market after graduation.</p>
                </div>
                <div className="major-right">
                    <div class="side-content">
                        <InfoPanel 
                            title="Audition Information" 
                            bodytext="Prospective voice students should prepare two art songs or folk songs of contrasting styles. At least one of the selections MUST be in a language other than English. Make sure the selections adequately demonstrate musicality, tone quality, and technical abilities. In addition to the prepared pieces, students will be asked to sight read a short excerpt. For repertoire suggestions, please contact Dr. Anthony Bernarducci at "
                            bodytext2="More Information regarding applications and auditions can be found "
                        />
                    </div>
                </div>
            </div>
            <div class="major-stories">
                <h2>Alumni Stories</h2>
                <div className="story">
                    <h3>Caroline Ritchie Stahl</h3>
                    <hr className="solid"></hr>
                </div>
            </div>

            <div className="major-foot">
                <Footer/>
            </div>

        </div>

        
        </>
    )
}

export default Major