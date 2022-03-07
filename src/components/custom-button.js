import React from 'react'
import './custom-button.css'

const CustomButton = (props) => {
    return (
        <>
            <button>{props.label}</button>
        </>
    )
}

export default CustomButton;