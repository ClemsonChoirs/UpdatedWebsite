import * as React from "react"
import CustomButton from '../components/custom-button'
import Footer from '../components/footer'
import Navbar from "../components/navbar"

import './stylesheets/interest-form.css'

import picLogo from '../images/background-wide.jpg'

const InterestForm = () => {
    return (
      <>
      <div className="navbar">
        <Navbar/>
      </div>
  
      <div className="interest-wrapper">
        <img className="feature" src={picLogo}/>
        <h1>Interest Form</h1>

        <form>
            <label>Full Name: *</label>
              <input type='text'/>
            <label>Email: *</label>
            <label>(Preferably clemson.edu address)</label>
              <input type="text"/>
            <label>Voice Part: *</label>
            <div className="voice-part">
              <input type="checkbox" id="voice-part" name="voice-part" value="Soprano"/>Soprano
            </div>
            <div className="voice-part">
            <input type="checkbox" id="voice-part" name="voice-part" value="Alto"/>Alto
            </div>
            <div className="voice-part">
            <input type="checkbox" id="voice-part" name="voice-part" value="Tenor"/>Tenor
            </div>
            <div className="voice-part">
            <input type="checkbox" id="voice-part" name="voice-part" value="Bass"/>Bass
            </div>
            <div className="voice-part">
            <input type="checkbox" id="voice-part" name="voice-part" value="Not sure"/>Not sure
            </div>
              
              
              
              
              
            
            <label>How did you hear about us?</label>
            <div className="how-hear">
              <input type="checkbox" id="how-hear" name="how-hear" value="socials"/>Social Media
            </div>

            <div className="how-hear">
              <input type="checkbox" id="how-hear" name="how-hear" value="current member"/>Current Member
              <input type="text" placeholder="What is the member's name?"/>
            </div>

            <div className="how-hear">
              <input type="checkbox" id="how-hear" name="how-hear" value="email"/>Received an Email from us
            </div>

            <div className="how-hear">
              <input type="checkbox" id="how-hear" name="how-hear" value="letter"/>Received a Letter from us
            </div>

            <div className="how-hear">
              <input type="checkbox" id="how-hear" name="how-hear" value="advisor"/>Academic Advisor
            </div>

            <div className="how-hear">
              <input type="checkbox" id="how-hear" name="how-hear" value="other"/>Other
              <input type="text" placeholder="Please specify"/>
            </div>
              
            

            <label>If you participated in choir in high school, what high school did you attend?</label>
              <input type="text"/>

        </form>
        
        <div className="foot">
          <Footer/>
        </div>
    </div>
      
        
    </>
  )
}

export default InterestForm