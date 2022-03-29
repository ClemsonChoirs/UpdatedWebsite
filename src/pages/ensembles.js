import * as React from "react"
import './ensembles.css'

import Navbar from "../components/navbar"
import Footer from '../components/footer'
import { EnsembleInfo } from '../ensemble-info'
import SmallEnsemblePanel from '../components/small-ensemble-panel'




const Ensembles = () => {
    return (
        <>
        <div className="navbar">
            <Navbar/>
        </div>

        <div className="ensembles-wrapper">
            <h1>Choral Ensembles</h1>
            <hr className="solid"></hr>
            <div className="ensembles-content">
                {EnsembleInfo.map((item, index) => {
                    return(
                        <SmallEnsemblePanel title={item.name} image={item.image} bodytext={item.body} link={item.link} target={item.target}/> 
                    )
                })}
            </div>

        </div>

        <div className="foot">
          <Footer/>
        </div>
        </>
    )
}

export default Ensembles