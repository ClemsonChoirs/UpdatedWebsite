import React from 'react'
import { Link } from "gatsby"

import CustomButton from '../components/custom-button'
import './ensemble-panel.css'


const EnsemblePanel = (props) => {
    return (
        <div className="wide-ensemble">
            <img src={props.image}/>
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.bodytext}</p>
                <div className="button-wrapper">
                    <Link to={props.link} target={props.target}><CustomButton label="Learn More"/></Link>
                </div>
            </div>
        </div>
    )
}

export default EnsemblePanel;