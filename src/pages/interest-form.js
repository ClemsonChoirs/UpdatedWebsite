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
  const [grade, setGrade] = useState('');
  const [highschool, setHighSchool] = useState('');
  const [foundUs, setFoundUs] = useState('');
  const [currentmember, setCurrentMember] = useState('');
  const [other, setOther] = useState('');
  const [comments, setComments] = useState('');

  const handleChangeMacro = (changeValue) => (e) => changeValue(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, voicepart, highschool, foundUs, currentmember, other, grade, comments } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      voicepart: voicepart.value,
      highschool: highschool.value,
      foundUs: foundUs.value,
      currentmember: currentmember.value,
      other: other.value,
      grade: grade.value,
      comments: comments.value
    };

    await fetch("http://localhost:5000/contact", {
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
    setGrade('');
    setComments('');
    
  }, [status])

    return (
      <>
      <div className="navbar">
        <Navbar/>
      </div>
  
      <div className="interest-wrapper">
        <img className="feature" src={picLogo} alt="Images of Clemson Choirs rehearsing with logo"/>
        <h1>Interest Form</h1>
        {status === 'Submit' ?
          <h3>Please fill out this form if you're interested in learning more about Clemson Choirs.</h3>
          :
          <h3>Your response has been submitted. Thank you!</h3>
        }
        

        <form onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <div className="form-left">
              <label htmlFor="name">Full Name: *</label>
              <input type='p' id="name" className="text-input" value={name} onChange={handleChangeMacro(setName)}/>

              <label htmlFor="email">Email: *</label>
              <label htmlFor="email2" id="sublabel">(Preferably clemson.edu address)</label>
              <input type="text" id="email" className="text-input" value={email} onChange={handleChangeMacro(setEmail)}/>

              <label htmlFor="voice-part">Voice Part: *</label>
                <div className="voice-part">
                  <input type="radio" id="voicepart" name="voicepart" value="Soprano" checked={voicepart === 'Soprano'} onChange={handleChangeMacro(setVoicePart)}/>
                  <p>Soprano</p>
                </div>
                <div className="voice-part">
                  <input type="radio" id="voicepart" name="voicepart" value="Alto" checked={voicepart === 'Alto'} onChange={handleChangeMacro(setVoicePart)}/>
                  <p>Alto</p>
                </div>
                <div className="voice-part">
                  <input type="radio" id="voicepart" name="voicepart" value="Tenor" checked={voicepart === 'Tenor'} onChange={handleChangeMacro(setVoicePart)}/>
                  <p>Tenor</p>
                </div>
                <div className="voice-part">
                  <input type="radio" id="voicepart" name="voicepart" value="Bass" checked={voicepart === 'Bass'} onChange={handleChangeMacro(setVoicePart)}/>
                  <p>Bass</p>
                </div>
                <div className="voice-part">
                  <input type="radio" id="voicepart" name="voicepart" value="Not sure" checked={voicepart === 'Not sure'} onChange={handleChangeMacro(setVoicePart)}/>
                  <p>Not sure</p>
                </div>

                <label htmlFor="class-standing" id="grade-label">Class Standing: *</label>
                <div className="grade">
                  <input type="radio" id="grade" name="grade" value="High School" checked={grade === 'High School'} onChange={handleChangeMacro(setGrade)}/>
                  <p>High School</p>
                </div>
                <div className="grade">
                  <input type="radio" id="grade" name="grade" value="Freshman" checked={grade === 'Freshman'} onChange={handleChangeMacro(setGrade)}/>
                  <p>Freshman</p>
                </div>
                <div className="grade">
                  <input type="radio" id="grade" name="grade" value="Sophomore" checked={grade === 'Sophomore'} onChange={handleChangeMacro(setGrade)}/>
                  <p>Sophomore</p>
                </div>
                <div className="grade">
                  <input type="radio" id="grade" name="grade" value="Junior" checked={grade === 'Junior'} onChange={handleChangeMacro(setGrade)}/>
                  <p>Junior</p>
                </div>
                <div className="grade">
                <input type="radio" id="grade" name="grade" value="Senior" checked={grade === 'Senior'} onChange={handleChangeMacro(setGrade)}/>
                  <p>Senior</p>
                </div>
                <div className="grade">
                  <input type="radio" id="grade" name="grade" value="Graduate" checked={grade === 'Graduate'} onChange={handleChangeMacro(setGrade)}/>
                  <p>Graduate</p>
                </div>
            </div>
                
            <div className="form-right">
              <label htmlFor="high-school" id="highschool-label">If you participated in choir in high school, what high school did you attend?</label>
              
              <input type="text" id="highschool" className="text-input" value={highschool} onChange={handleChangeMacro(setHighSchool)}/>
                
              <label htmlFor="foundUs" id="how-hear-label">How did you hear about us?</label>

              <div className="how-hear">
                <input type="radio" id="foundUs" name="foundUs" value="Socials" checked={foundUs === 'Socials'} onChange={handleChangeMacro(setFoundUs)}/>
                <p>Social Media</p>
              </div>

              <div className="how-hear">
                <input type="radio" id="foundUs" name="foundUs" value="Current Member: " checked={foundUs === 'Current Member: '} onChange={handleChangeMacro(setFoundUs)}/>
                <p>Current Member:</p>
                <input type="text" id="currentmember" className="specify" placeholder="What is the member's name?" value={currentmember} onChange={handleChangeMacro(setCurrentMember)}/>
              </div>

              <div className="how-hear">
                <input type="radio" id="foundUs" name="foundUs" value="Email" checked={foundUs === 'Email'} onChange={handleChangeMacro(setFoundUs)}/>
                <p>Received an Email from us</p>
              </div>

              <div className="how-hear">
                <input type="radio" id="foundUs" name="foundUs" value="Letter" checked={foundUs === 'Letter'} onChange={handleChangeMacro(setFoundUs)}/>
                <p>Received a Letter from us</p>
              </div>

              <div className="how-hear">
                <input type="radio" id="foundUs" name="foundUs" value="Advisor" checked={foundUs === 'Advisor'} onChange={handleChangeMacro(setFoundUs)}/>
                <p>Academic Advisor</p>
              </div>

              <div className="how-hear">
                <input type="radio" id="foundUs" name="foundUs" value="Other: " checked={foundUs === 'Other: '} onChange={handleChangeMacro(setFoundUs)}/>
                <p>Other:</p>
                <input type="text" className="specify" id="other" placeholder="Please specify" value={other} onChange={handleChangeMacro(setOther)}/>
              </div>
                

              <label htmlFor="comments" id="comments-label">Is there anything you'd like us to know?</label>

              <textarea value={comments} id="comments" onChange={handleChangeMacro(setComments)}/>
            </div>  
          </div>

          <button type="submit"><CustomButton label="Submit Form"/></button>

        </form>
        
        <div className="interest-foot">
          <Footer/>
        </div>
    </div>
      
        
    </>
  )
}

export default InterestForm