import * as React from 'react'
import './stylesheets/components.css'

const BigButton = (props) => {
    return (
        <>
            <button 
              className={`big-button`} 
              disabled={props.disabled}>
                  {props.label}
            </button>
        </>
    )
}

export default BigButton