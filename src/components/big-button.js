import * as React from 'react'
import './big-button.css'

const BigButton = (props) => {
    return (
        <>
            <button className="big-button">{props.label}</button>
        </>
    )
}

export default BigButton