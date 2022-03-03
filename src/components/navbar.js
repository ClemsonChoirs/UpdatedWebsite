import * as React from "react"
import './navbar.css'
import logo from '../images/whitelogo.png'

const Navbar = () => {
    return (
        <header>
            <nav>
                <img src={logo} className="logo"/>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Ensembles</a></li>
                    <li><a href="#">Join a Choir</a></li>
                    <li><a href="#">Major</a></li>
                    <li><a href="#">Staff</a></li>
                    <li><a href="#">Outreach Programs</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;