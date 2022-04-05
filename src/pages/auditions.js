import * as React from "react"

import CustomButton from '../components/custom-button'
import Footer from '../components/footer'
import Navbar from "../components/navbar"

import './auditions.css'


const Auditions = () => {
    return (
        <>
        <div class="navbar">
            <Navbar/>
        </div>
        
        <div class="audition-wrapper">
            <div class="audition-feature">
                <div className="audition-header">
                    <h1>Join a Choir</h1>
                </div>
            </div>
            <div class="audition-content">
                <div className="audition-left">
                    <h2>Thank you for your interest in Clemson Choirs! Each of our choral ensembles are open to ALL students at Clemson University.</h2>
                    <p>Auditions for CU Singers (MUSC 3700) and Cantorei (MUSC 3450) for the Fall 2022 Semester will be announced later this Spring.</p>
                    <p>If you would like to be a part of Men's Choir (MUSC 3720) or Women’s Choir (MUSC 3710), no audition is necessary! Simply register for the class on iRoar.</p>
                    <p>For more information on Tigeroar and TakeNote auditions contact Dr. David Conley.</p>
                </div>
                <div className="audition-right">
                    <div class="side-content">
                        <h3>Interest Form</h3>
                        <hr class="solid"></hr>
                        <p>If you would like more information about Clemson Choirs, please fill out this short form to receive a personal email from our director.</p>
                        <div id="custom-button">
                            <CustomButton label="Go to Form"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="audition-foot">
                <Footer/>
            </div>
        </div>

       
        </>
    )
}

const FullAuditions = () => {
    return (
        <>
        <div class="navbar">
            <Navbar/>
        </div>
        
        <div class="audition-wrapper">
            <div class="audition-feature">
                <div className="audition-header">
                    <h1>Join a Choir</h1>
                </div>
            </div>
            <div class="audition-content">
                <div className="audition-left">
                    <h2>Thank you for your interest in Clemson Choirs! Each of our choral ensembles are open to ALL students at Clemson University.</h2>
                    <p> If you would like to be a part of CU Singers (MUSC 3700) or Cantorei (MUSC 3450), please read the audition instructions below. Audition forms and videos will be due on July 28, 2021. We recommend that you register for the class(es) that you are auditioning for now to avoid scheduling conflicts.</p>
                    <p>If you would like to be a part of Men's Choir (MUSC 3720) or Women’s Choir (MUSC 3710), no audition is necessary! Simply register for the class on iRoar.</p>
                    <p>For more information on Tigeroar and TakeNote auditions contact Dr. David Conley.</p>
                </div>
                <div className="audition-right">
                    <div class="side-content">
                        <h3>Interest Form</h3>
                        <hr class="solid"></hr>
                        <p>If you would like more information about Clemson Choirs, please fill out this short form to receive a personal email from our director.</p>
                        <div id="custom-button">
                            <CustomButton label="Go to Form"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="audition-instructions">
                <h2>Audition Instructions</h2>
                <div className="instruction-panels">
                    <AuditionPanel
                        title="Step One"
                        subtitle="Record Your Video"
                        bodytext="In your video, please introduce yourself and sing “My Country ’Tis of Thee”. Please use the sheet music and starting pitch that correspond to your preferred voice part, found below."
                    />
                    <AuditionPanel
                        title="Step Two"
                        subtitle="Upload Your Video"
                        bodytext="Upload the video to either YouTube OR Google Drive. Please include your first and last name in the title of your video. On YouTube, set the video’s visibility to “Unlisted”. On Google Drive, set link sharing permissions to “Anyone with link can view”."
                    />
                    <AuditionPanel
                        title="Step Three"
                        subtitle="Fill Out Your Form"
                        bodytext="Copy the link to your video and paste it in the last field, after answering some questions about your past choir/singing experience."
                        btnlabel="Audition Form"
                        link="#"
                    />
                </div>

            </div>
            <div className="audition-foot">
                <Footer/>
            </div>
        </div>

       
        </>
    )
}

export default FullAuditions

const AuditionPanel = (props) => {
    return (
        <div className="audition-panel">
            <div className="text">
                <h3>{props.title}</h3>
                {props.subtitle ?
                    <h4>{props.subtitle}</h4> : ''
                }
                <p>{props.bodytext}</p>
                
            </div>
            {props.btnlabel ?
                    <a href={props.link} target="_blank"><CustomButton label={props.btnlabel}/></a> : ''
                }
        </div>
    )
}