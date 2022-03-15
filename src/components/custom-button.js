import React from 'react'
import './custom-button.css'

const CustomButton = (props) => {
    return (
        <>
            <button className="custom">{props.label}</button>
        </>
    )
}

export default CustomButton;