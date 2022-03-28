import * as React from "react"
import './ensembles.css'

import Navbar from "../components/navbar"
import CustomButton from '../components/custom-button'
import Footer from '../components/footer'


const Ensembles = () => {
    return (
        <>
        <div class="audition-navbar">
            <Navbar/>
        </div>

        <div className="ensembles-wrapper">
            <h1>Choral Ensembles</h1>
        </div>

        <div className="foot">
          <Footer/>
        </div>
        </>
    )
}

export default Ensembles