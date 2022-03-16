import * as React from "react"
import './auditions.css'

import picLogo from '../images/logo-with-pics.jpg'

import Navbar from "../components/navbar"

const Auditions = () => {
    return (
        <>
        <div class="audition-navbar">
            <Navbar/>
        </div>
        
        <div class="audition-wrapper">
            <div class="audition-feature">
                <div className="audition-header">
                    <h1>Join a Choir</h1>
                </div>
            </div>
            <div class="audition-content">

            </div>
        </div>
        </>
    )
}

export default Auditions