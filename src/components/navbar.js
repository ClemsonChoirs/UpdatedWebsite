import React, {useState, useEffect} from "react"
import './navbar.css'
import logo from '../images/whitelogo.png'

const Navbar = () => {
    const [ensembles, showEnsembles] = useState(false);
    const [hoverOnEns, setHoverOnEns] = useState(false);
    const [hoverOnOptions, setHoverOnOptions] = useState(false);


    const ensemblesHover = () => {
        setHoverOnEns(!hoverOnEns);
        // setShowEnsembles();
    }

    const optionsHover = () => {
        setHoverOnOptions(!hoverOnOptions);
        // setShowEnsembles();
    }

    const setShowEnsembles = () => {
        if (hoverOnEns || hoverOnOptions) {
            showEnsembles(true);
        } else {
            showEnsembles(false);
        }
    
    }

    useEffect (() => {
        if (hoverOnEns || hoverOnOptions) {
            showEnsembles(true);
        } else {
            showEnsembles(false);
        }
    }, [hoverOnEns, hoverOnOptions])


    
    return (
        <>
        <header>
            <nav>
                <img src={logo} className="logo"/>
                <ul className="pages">
                    <li><a href="#">Home</a></li>
                    <li><a href="#" onMouseEnter={ensemblesHover} onMouseLeave={ensemblesHover} class={ensembles ? "active" : ""}>Ensembles</a></li>
                    <li><a href="#">Join a Choir</a></li>
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