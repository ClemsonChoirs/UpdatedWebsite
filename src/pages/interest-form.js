import * as React from "react"
import { useState } from 'react'
import CustomButton from '../components/custom-button'
import Footer from '../components/footer'
import Navbar from "../components/navbar"

import './stylesheets/interest-form.css'

import picLogo from '../images/background-wide.jpg'

const InterestForm = () => {
  const [status, setStatus] = useState("Submit");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [voicepart, setVoicePart] = useState('');
  const [highschool, setHighSchool] = useState('');
  const [foundUs, setFoundUs] = useState('');
  const [currentmember, setCurrentMember] = useState('');
  const [other, setOther] = useState('');

  const handleChangeMacro = (changeValue) => (e) => changeValue(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, voicepart, highschool, foundUs, currentmember, other } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      voicepart: voicepart.value,
      highschool: highschool.value,
      foundUs: foundUs.value,
      currentmember: currentmember.value,
      other: other.value
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submitted");

    console.log('Submit')
  };

  React.useEffect (() => {
    setName('');
    setEmail('');
    setHighSchool('');
    setCurrentMember('');
    setOther('');
    setVoicePart('');
    setFoundUs('');
    
  }, [status])

    return (
      <>
      <div className="navbar">
        <Navbar/>
      </div>
  
      <div className="interest-wrapper">
        <img className="feature" src={picLogo}/>
        <h1>Interest Form</h1>
        {status == 'Submit' ?
          <h3>Please fill out this form to receive an email from Dr. Bernarducci!</h3>
          :
          <h3>Your response has been submitted. Thank you!</h3>
        }
        

        <form onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <div className="form-left">
              <label htmlFor="name">Full Name: *</label>
              <input type='text' id="name" className="text-input" value={name} onChange={handleChangeMacro(setName)}/>

              <label htmlFor="email">Email: *</label>
              <label htmlFor="email2" id="sublabel">(Preferably clemson.edu address)</label>
              <input type="text" id="email" className="text-input" value={email} onChange={handleChangeMacro(setEmail)}/>

              <label htmlFor="voice-part">Voice Part: *</label>
                <div className="voice-part">
                  <input type="radio" id="voicepart" name="voicepart" value="Soprano" checked={voicepart === 'Soprano'} onChange={handleChangeMacro(setVoicePart)}/>
                  <text>Soprano</text>
                </div>
                <div className="voice-part">
                  <input type="radio" id="voicepart" name="voicepart" value="Alto" checked={voicepart === 'Alto'} onChange={handleChangeMacro(setVoicePart)}/>
                  <text>Alto</text>
                </div>
                <div className="voice-part">
                  <input type="radio" id="voicepart" name="voicepart" value="Tenor" checked={voicepart === 'Tenor'} onChange={handleChangeMacro(setVoicePart)}/>
                  <text>Tenor</text>
                </div>
                <div className="voice-part">
                  <input type="radio" id="voicepart" name="voicepart" value="Bass" checked={voicepart === 'Bass'} onChange={handleChangeMacro(setVoicePart)}/>
                  <text>Bass</text>
                </div>
                <div className="voice-part">
                  <input type="radio" id="voicepart" name="voicepart" value="Not sure" checked={voicepart === 'Not sure'} onChange={handleChangeMacro(setVoicePart)}/>
                  <text>Not sure</text>
                </div>
            </div>
                
            <div className="form-right">
            <label htmlFor="high-school">If you participated in choir in high school, what high school did you attend?</label>
                <input type="text" id="highschool" className="text-input" value={highschool} onChange={handleChangeMacro(setHighSchool)}/>
                
              <label htmlFor="foundUs" id="how-hear-label">How did you hear about us?</label>
              <div className="how-hear">
                <input type="radio" id="foundUs" name="foundUs" value="Socials" checked={foundUs === 'Socials'} onChange={handleChangeMacro(setFoundUs)}/>
                <text>Social Media</text>
              </div>

              <div className="how-hear">
                <input type="radio" id="foundUs" name="foundUs" value="Current Member: " checked={foundUs === 'Current Member: '} onChange={handleChangeMacro(setFoundUs)}/>
                <text>Current Member:</text>
                <input type="text" id="currentmember" className="specify" placeholder="What is the member's name?" value={currentmember} onChange={handleChangeMacro(setCurrentMember)}/>
              </div>

              <div className="how-hear">
                <input type="radio" id="foundUs" name="foundUs" value="Email" checked={foundUs === 'Email'} onChange={handleChangeMacro(setFoundUs)}/>
                <text>Received an Email from us</text>
              </div>

              <div className="how-hear">
                <input type="radio" id="foundUs" name="foundUs" value="Letter" checked={foundUs === 'Letter'} onChange={handleChangeMacro(setFoundUs)}/>
                <text>Received a Letter from us</text>
              </div>

              <div className="how-hear">
                <input type="radio" id="foundUs" name="foundUs" value="Advisor" checked={foundUs === 'Advisor'} onChange={handleChangeMacro(setFoundUs)}/>
                <text>Academic Advisor</text>
              </div>

              <div className="how-hear">
                <input type="radio" id="foundUs" name="foundUs" value="Other: " checked={foundUs === 'Other: '} onChange={handleChangeMacro(setFoundUs)}/>
                <text>Other:</text>
                <input type="text" className="specify" id="other" placeholder="Please specify" value={other} onChange={handleChangeMacro(setOther)}/>
              </div>
                
            </div>  
          </div>

          <button type="submit"><CustomButton label="Submit Form"/></button>

        </form>
        
        <div className="foot">
          <Footer/>
        </div>
    </div>
      
        
    </>
  )
}

export default InterestForm