import * as React from "react"
import Navbar from "../components/navbar"
import './index.css'
import EnsemblePanel from '../components/ensemble-panel'
import cantorei from '../images/cantorei.jpg'



// markup
const IndexPage = () => {
  return (
    <>
      <Navbar/>
      <div class="wrapper">
        <div class="left">
          <p>I want a hippopatomus for Christmas</p>
        </div>
        <div class="right">
          <h1>Choral Ensembles</h1>
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
