import * as React from "react"

import CustomButton from '../components/custom-button'
import Footer from '../components/footer'
import Navbar from "../components/navbar"

import './staff.css'
import DrB from '../images/dr-b.jpg'

const Staff = () => {
    return (
        <>
        <div class="navbar">
            <Navbar/>
        </div>
        <div className="staff-wrapper">
            <h1>{'Faculty & Staff'}</h1>
            <div className="staff-left">
                <StaffPanel
                    name="Dr. Anthony Bernarducci"
                    title="Director of Choral and Vocal Studies"
                    image={DrB}
                    body="Dr. Anthony Bernarducci is an
                    Associate Professor of Music and serves as the Director of Choral and Vocal Studies at Clemson University. Anthony conducts the Men’s Choir, Cantorei and Clemson University Singers as well as courses in music theory and composition. As an author, Anthony published articles on topics ranging from music education to performance practice. Most recently GIA Publications has released his book titled “Listening Awareness: Build Independent Creative Listeners In Choir”. Dr. Bernarducci is an active composer and has works published with GIA Publications, Hinshaw Music, and ECS Publishing Group. He has received commissions and performances from leading ensembles and organizations such as The Westminster Williamson Voices, The St. Olaf Choir, and The United States Soldiers Chorus. His compositions have been performed around the world by choral ensembles in Korea, Slovenia, Italy, and South Africa and on such notable stages as Carnegie Hall, Severance Hall, Mechanics Hall, and Heinz Hall.​He holds a PhD in music education from Florida State University, a Master of Music in conducting from the University of Arizona, and a Bachelor of music education from Westminster Choir College."

                />
            </div>
            <div className="staff-right">

            </div>
        </div>
        </>
    )
}

export default Staff

const StaffPanel = (props) => {
    return (
        <div className="staff-panel">
            <h2>{props.name}</h2>
            <hr className="solid"></hr>
            <div className="panel-content">
                <img src={props.image}/>
                <h3>{props.title}</h3>
                <p>{props.body}</p>
            </div>
            
            <button>Read More</button>
        </div>
    )
}