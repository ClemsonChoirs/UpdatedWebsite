import * as React from "react"
import Navbar from "../components/navbar"
import './index.css'
import EnsemblePanel from '../components/ensemble-panel'
import cantorei from '../images/cantorei.jpg'
import CustomButton from '../components/custom-button'



// markup
const IndexPage = () => {
  return (
    <>
    <div class="navbar">
      <Navbar/>
    </div>
      
      <div class="wrapper">
        <div class="left">
          <div class="side-content">
            <h3>Mission Statement</h3>
            <hr class="solid"></hr>
            <p>Our mission is to provide the highest quality artistic experience through ensemble and solo singing to all Clemson students. This includes performing diverse and inclusive repertoire, commissioning new works, and collaborating with other art forms. Finally, our outreach programs aim to enrich the music education of students throughout the region.</p>
          </div>
          <div class="side-content">
            <h3>Vocal Arts Series</h3>
            <hr class="solid"></hr>
            <p>The Clemson Vocal Arts Series is a showcase of our choral ensembles, voice majors, and talent from within our choirs. The goal with this online music series is to connect with our community and create another avenue for everyone to have access to music.</p>
            <div id="custom-button">
              <CustomButton label="View on YouTube"/>
            </div>
          </div>
          <div class="side-content">
            <h3>Interest Form</h3>
            <hr class="solid"></hr>
            <p>If you would like more information about Clemson Choirs, please fill out this short form to receive a personal email from our director.</p>
            <div id="custom-button">
              <CustomButton label="Go to Form"/>
            </div>
            
          </div>
        </div>
        <div class="right">
          <h2>Choral Ensembles</h2>
            <EnsemblePanel title="Cantorei" image={cantorei}/>
            <EnsemblePanel title="CU Singers" image={cantorei}/>
            <EnsemblePanel title="Men's Choir" image={cantorei}/>
            <EnsemblePanel title="Women's Choir" image={cantorei}/>
        </div>
      </div>
        
    </>
  )
}

export default IndexPage
