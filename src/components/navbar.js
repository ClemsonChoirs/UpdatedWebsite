import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

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
        setHoverOnEns(true);
    }

    const optionsHover = () => {
        setHoverOnOptions(true);
    }

    const ensemblesUnhover = () => {
        setHoverOnEns(false);
    }

    const optionsUnhover = () => {
        setHoverOnOptions(false);
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
                <button className={dropdown ? "dropdown-button-active" : "dropdown-button"}>
                   <FontAwesomeIcon icon={faCaretDown} onClick={setShowDropdown}/> 
                </button>
                
            </div>
            <ul className={dropdown ? "dropdown-active" : "dropdown-hidden"}>
                    <li><Link to={'../'}>Home</Link></li>

                    <hr className="solid"></hr>
                    <li><Link to={'../ensembles'}>Ensembles</Link></li>

                    <hr className="solid"></hr>
                    <li><Link to={'../auditions'}>Join a Choir</Link></li>

                    <hr className="solid"></hr>
                    <li><Link to={'../major'}>Major</Link></li>

                    <hr className="solid"></hr>
                    <li><Link to={'../staff'}>Staff</Link></li>

                    <hr className="solid"></hr>
                    <li><a href="#">Outreach Programs</a></li>
                </ul>

            <nav>
                <img src={logo} className="logo"/>
                
                <ul className="pages">
                    <li><Link to={'../'}>Home</Link></li>
                    <li><Link to={'../ensembles'} onMouseEnter={ensemblesHover} onMouseLeave={ensemblesUnhover} className={ensembles ? "active" : ""}>Ensembles</Link></li>
                    <li><Link to={'../auditions'}>Join a Choir</Link></li>
                    <li><Link to={'../major'}>Major</Link></li>
                    <li><Link to={'../staff'}>Staff</Link></li>
                    <li><a href="#">Outreach Programs</a></li>
                </ul>
            </nav>
        </header>

        <ul className={ensembles ? "ensembles-active" : "ensembles-hidden"} onMouseEnter={optionsHover} onMouseLeave={optionsUnhover}>
            <li><Link to={'../cu-singers'}>CU Singers</Link></li>
            <li><Link to={'../cantorei'}>Cantorei</Link></li>
            <li><Link to={'../mens-choir'}>Men's Choir</Link></li>
            <li><Link to={'../womens-choir'}>Women's Choir</Link></li>
            <li><Link to={'https://www.clemsontakenote.com/'} target="_blank">TakeNote</Link></li>
            <li><Link to={'https://www.clemsontigeroar.com/'} target="_blank">Tigeroar</Link></li>
        </ul>
        </>
    )

  
}



export default Navbar;