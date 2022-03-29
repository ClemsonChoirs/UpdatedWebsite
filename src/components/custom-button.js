import React from 'react'
import './custom-button.css'

export const CustomButton = (props) => {
    return (
        <>
            <button className="custom">{props.label}</button>
        </>
    )
}

export const BigButton = (props) => {
    return (
        <>
            <button className="big">{props.label}</button>
        </>
    )
}

