import * as React from "react"

import CustomButton from '../components/custom-button'
import Footer from '../components/footer'
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
                    <h1>Join a Choir</h1>
                </div>
            </div>
            <div class="major-content">
                <div className="major-left">
                    <h2>Thank you for your interest in Clemson Choirs! Each of our choral ensembles are open to ALL students at Clemson University.</h2>
                    <p>Auditions for CU Singers (MUSC 3700) and Cantorei (MUSC 3450) for the Fall 2022 Semester will be announced later this Spring.</p>
                    <p>If you would like to be a part of Men's Choir (MUSC 3720) or Women’s Choir (MUSC 3710), no major is necessary! Simply register for the class on iRoar.</p>
                    <p>For more information on Tigeroar and TakeNote auditions contact Dr. David Conley.</p>
                </div>
                <div className="major-right">
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
        </div>

        <div className="major-foot">
          <Footer/>
        </div>
        </>
    )
}

export default Major