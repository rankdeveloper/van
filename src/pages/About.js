import React from 'react'
import about from '../images/about.png'

export default function About() {
    return (
        <div className='about-container'>

            <div className='image'>
                <img src={about} alt="img" />
            </div>

            <div className='text'>
                <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)<br></br><br></br>

                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>


                <div className='yellow-box'>
                    <h3>Your destination is waiting.<br></br>
                        Your van is ready.</h3>
                    <a href="#">Explore our vans</a>
                </div>
            </div>




        </div>
    )
}
