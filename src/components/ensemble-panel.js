import React from 'react'
import './ensemble-panel.css'
import CustomButton from './custom-button'

const EnsemblePanel = (props) => {
    return (
        <div class="container">
            <img src={props.image}/>
            <div class="text">
                <h2>{props.title}</h2>
                <p>Body Text</p>
                <CustomButton label="Learn More"/>
            </div>
        </div>
    )
}

export default EnsemblePanel;