import * as React from 'react'
import './custom-button.css'

const CustomButton = (props) => {
    return (
        <>
            <button className="custom-button">{props.label}</button>
        </>
    )
}

export default CustomButton