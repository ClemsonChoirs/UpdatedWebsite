import * as React from "react"
import './index.css'

import Navbar from "../components/navbar"
import EnsemblePanel from '../components/ensemble-panel'
import SmallEnsemblePanel from '../components/small-ensemble-panel'
import CustomButton from '../components/custom-button'
import Footer from '../components/footer'

import picLogo from '../images/logo-with-pics.jpg'
import cantorei from '../images/cantorei.jpg'
import singers from '../images/singers.jpg'
import mens from '../images/mens.jpg'
import womens from '../images/womens.jpg'




// markup
const IndexPage = () => {
  return (
    <>
    <div class="navbar">
      <Navbar/>
    </div>

    <div class="wrapper">
      <img class="feature" src={picLogo}/>
        <div class="content">
          
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
          <div class="right-wide">
            <h2>Large Ensembles</h2>
              <EnsemblePanel title="Cantorei" image={cantorei}
                bodytext="Cantorei provides an enriching chamber music experience to students at Clemson University. Singers can look forward to performing early music, contemporary choral works, and new modern music commissioned for the ensemble."/>
              <EnsemblePanel title="CU Singers" image={singers}
                bodytext="Each year, Clemson University Singers performs several concerts in the Brooks Center for the Performing Arts and off-campus. In addition to performing a range of unaccompanied repertoire, each spring CU Singers performs a Choral-Orchestral Masterwork."/>
              <EnsemblePanel title="Men's Choir" image={mens}
                bodytext="Begun in 1896, Men's Choir is the oldest musical organization at Clemson University. This choir performs a wide variety of traditional choral literature representing multiple genres, style periods, and nationalities. No audition is required and students from all majors are encouraged to join."/>
              <EnsemblePanel title="Women's Choir" image={womens}
                bodytext="The Clemson University Women’s Choir consists of about 45 undergraduate students. The ladies represent almost every major Clemson University offers, but are united by a passion for vocal music. Women’s Choir meets twice a week, learning a multitude of pieces from varying genres of choral literature."/>
          </div>
          <div className="right-tall">
            <h2>Large Ensembles</h2>
                <SmallEnsemblePanel title="Cantorei" image={cantorei}
                  bodytext="Cantorei provides an enriching chamber music experience to students at Clemson University. Singers can look forward to performing early music, contemporary choral works, and new modern music commissioned for the ensemble."/>
                <SmallEnsemblePanel title="CU Singers" image={singers}
                  bodytext="Each year, Clemson University Singers performs several concerts in the Brooks Center for the Performing Arts and off-campus. In addition to performing a range of unaccompanied repertoire, each spring CU Singers performs a Choral-Orchestral Masterwork."/>
                <SmallEnsemblePanel title="Men's Choir" image={mens}
                  bodytext="Begun in 1896, Men's Choir is the oldest musical organization at Clemson University. This choir performs a wide variety of traditional choral literature representing multiple genres, style periods, and nationalities. No audition is required and students from all majors are encouraged to join."/>
                <SmallEnsemblePanel title="Women's Choir" image={womens}
                  bodytext="The Clemson University Women’s Choir consists of about 45 undergraduate students. The ladies represent almost every major Clemson University offers, but are united by a passion for vocal music. Women’s Choir meets twice a week, learning a multitude of pieces from varying genres of choral literature."/>
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
