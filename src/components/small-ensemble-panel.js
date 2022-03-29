import React from 'react'
import './small-ensemble-panel.css'
import { CustomButton } from '../components/custom-button'
import { Link } from "gatsby"


const SmallEnsemblePanel = (props) => {
    return (
        <div className="small-ensemble">
            <img src={props.image}/>
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.bodytext}</p>
                <div className="custom-button">
                <Link to={props.link} target={props.target}><CustomButton label="Learn More"/></Link>
                </div>
            </div>
        </div>
    )
}

export default SmallEnsemblePanel;