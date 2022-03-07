import React, {useState} from "react"
import './navbar.css'
import logo from '../images/whitelogo.png'

const Navbar = () => {
    const [ensembles, setEnsembles] = useState(false);
    
    return (
        <>
        <header>
            <nav>
                <img src={logo} className="logo"/>
                <ul className="pages">
                    <li><a href="#">Home</a></li>
                    <li><a href="#" onMouseEnter={showEnsembles()}>Ensembles</a></li>
                    <li><a href="#">Join a Choir</a></li>
                    <li><a href="#">Major</a></li>
                    <li><a href="#">Staff</a></li>
                    <li><a href="#">Outreach Programs</a></li>
                </ul>
                
            </nav>
        </header>

        <ul className={"ensembles"}>
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

function showEnsembles() {
    console.log("ensembles");

}

export default Navbar;