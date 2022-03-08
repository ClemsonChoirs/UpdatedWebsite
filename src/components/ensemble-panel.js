import React from 'react'
import './ensemble-panel.css'
import CustomButton from './custom-button'

const EnsemblePanel = (props) => {
    return (
        <div class="container">
            <img src={props.image}/>
            <div class="text">
                <h2>{props.title}</h2>
                <p>{props.bodytext}</p>
                <div class="custom-button">
                    <CustomButton label="Learn More"/>
                </div>
            </div>
        </div>
    )
}

export default EnsemblePanel;