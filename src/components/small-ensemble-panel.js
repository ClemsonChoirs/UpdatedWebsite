import React from 'react'
import './small-ensemble-panel.css'
import CustomButton from './custom-button'

const SmallEnsemblePanel = (props) => {
    return (
        <div className="small-ensemble">
            <img src={props.image}/>
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.bodytext}</p>
                <div className="custom-button">
                    <CustomButton label="Learn More"/>
                </div>
            </div>
        </div>
    )
}

export default SmallEnsemblePanel;