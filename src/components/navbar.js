import React, {useState, useEffect} from "react"
import { Link, graphql } from "gatsby"

import './navbar.css'
import logo from '../images/whitelogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [ensembles, showEnsembles] = useState(false);
    const [hoverOnEns, setHoverOnEns] = useState(false);
    const [hoverOnOptions, setHoverOnOptions] = useState(false);
    const [dropdown, showDropdown] = useState(false);


    const ensemblesHover = () => {
        setHoverOnEns(!hoverOnEns);
    }

    const optionsHover = () => {
        setHoverOnOptions(!hoverOnOptions);
    }

    useEffect (() => {
        if (hoverOnEns || hoverOnOptions) {
            showEnsembles(true);
        } else {
            showEnsembles(false);
        }
    }, [hoverOnEns, hoverOnOptions])

    const setShowDropdown = () => {
        showDropdown(!dropdown);
    }


    
    return (
        <>
        <header>
            <div className="reduced-nav">
                <img src={logo} className="logo"/>
                <button class={dropdown ? "dropdown-button-active" : "dropdown-button"}>
                   <FontAwesomeIcon icon={faCaretDown} onClick={setShowDropdown}/> 
                </button>
                
            </div>
            <ul className={dropdown ? "dropdown-active" : "dropdown-hidden"}>
                    <li><Link to={'../'}>Home</Link></li>

                    <hr class="solid"></hr>
                    <li><a href="#">Ensembles</a></li>

                    <hr class="solid"></hr>
                    <li><Link to={'../auditions'}>Join a Choir</Link></li>

                    <hr class="solid"></hr>
                    <li><a href="#">Major</a></li>

                    <hr class="solid"></hr>
                    <li><a href="#">Staff</a></li>

                    <hr class="solid"></hr>
                    <li><a href="#">Outreach Programs</a></li>
                </ul>

            <nav>
                <img src={logo} className="logo"/>
                
                <ul className="pages">
                    <li><Link to={'../'}>Home</Link></li>
                    <li><a href="#" onMouseEnter={ensemblesHover} onMouseLeave={ensemblesHover} class={ensembles ? "active" : ""}>Ensembles</a></li>
                    <li><Link to={'../auditions'}>Join a Choir</Link></li>
                    <li><a href="#">Major</a></li>
                    <li><a href="#">Staff</a></li>
                    <li><a href="#">Outreach Programs</a></li>
                </ul>
            </nav>
        </header>

        <ul className={ensembles ? "ensembles-active" : "ensembles-hidden"} onMouseEnter={optionsHover} onMouseLeave={optionsHover}>
            <li><a href="#">CU Singers</a></li>
            <li><a href="#">Cantorei</a></li>
            <li><a href="#">Men's Choir</a></li>
            <li><a href="#">Women's Choir</a></li>
            <li><a href="#">TakeNote</a></li>
            <li><a href="#">Tigeroar</a></li>
        </ul>
        </>
    )

  
}



export default Navbar;