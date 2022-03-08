import React from 'react'
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'
import youtube from '../images/youtube.png'
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <div className="dr-b">
                    <p>Dr. Anthony Bernarducci</p>
                    <p>Director of Choral Activities</p>
                    <p>bernar5@clemson.edu</p>
                </div>
                <div className="socials">
                    <img src={instagram}/>
                    <img src={youtube}/>
                    <img src={facebook}/>
                </div>
                <div className="brooks">
                    <p>Brooks Center for the Performing Arts</p>
                    <p>Clemson University</p>
                    <p>Suite 119B</p>
                </div>
            </div>
        </>
    )
}

export default Footer;