import {useEffect, useState} from "react"
import * as React from 'react'
import './index.css'

import { EnsembleInfo } from '../ensemble-info'
import Navbar from "../components/navbar"
import EnsemblePanel from '../components/ensemble-panel'
import SmallEnsemblePanel from '../components/small-ensemble-panel'
import CustomButton from '../components/custom-button'
import Footer from '../components/footer'

import picLogo from '../images/logo-with-pics.jpg'


// markup
const IndexPage = () => {

  const [data, setData] = useState([]);


  return (
    <>
    <div className="navbar">
      <Navbar/>
    </div>

    <div className="wrapper">
      <img className="feature" src={picLogo}/>
        <div className="content">
          
          <div className="left">
            <div className="side-content">
              <h3>Mission Statement</h3>
              <hr className="solid"></hr>
              <p>Our mission is to provide the highest quality artistic experience through ensemble and solo singing to all Clemson students. This includes performing diverse and inclusive repertoire, commissioning new works, and collaborating with other art forms. Finally, our outreach programs aim to enrich the music education of students throughout the region.</p>
            </div>
            <div className="side-content">
              <h3>Vocal Arts Series</h3>
              <hr className="solid"></hr>
              <p>The Clemson Vocal Arts Series is a showcase of our choral ensembles, voice majors, and talent from within our choirs. The goal with this online music series is to connect with our community and create another avenue for everyone to have access to music.</p>
              <div id="custom-button">
                <a href="https://youtube.com/playlist?list=PLJI3Pv0gkD2CPArkG0ui87QUeIPaojqy7" target="_blank"><CustomButton label="View on YouTube"/></a>
              </div>
            </div>
            <div className="side-content">
              <h3>Interest Form</h3>
              <hr className="solid"></hr>
              <p>If you would like more information about Clemson Choirs, please fill out this short form to receive a personal email from our director.</p>
              <div id="custom-button">
                <a href="https://forms.gle/kH1CGbdybgLd5J1a8" target="_blank"><CustomButton label="Go to Form"/></a>
              </div>
              
            </div>
          </div>
          <div className="right-wide">
            <h2>Large Ensembles</h2>
            {EnsembleInfo.map((item, index) => {
              return(
                <EnsemblePanel title={item.name} image={item.image} bodytext={item.body}/>
              )
            })}
          </div>
          <div className="right-tall">
            <h2>Large Ensembles</h2>
            {EnsembleInfo.map((item, index) => {
              return(
                <SmallEnsemblePanel title={item.name} image={item.image} bodytext={item.body}/>
              )
            })}
          </div>
        </div>
        
        <div className="foot">
          <Footer/>
        </div>
    </div>
      
        
    </>
  )
}

export default IndexPage