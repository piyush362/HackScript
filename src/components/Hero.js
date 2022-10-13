import React from 'react'
import './Hero.css'
function Hero() {
    return (
        <div>
            <div className="container">
                <div className="hero-title">
                    <h1 className='h1-color'>DevFire</h1>
                    <h1>Community</h1>
                    <h4>Learn. <span>Grow</span></h4>
                    <div className="join">
                        <a className='btn-1' href="#">Explor events</a>
                        <a className='btn-2' href="#">Join Discord</a>
                    </div>
                </div>
                <img className='hero-img-main' src="images/hero-main.jpg" alt="" />
            </div>
            <div className="hero-2">
                <div className="hero-card">
                    <div className='hero-card-part1'>
                        <img src="images/hero-pic-2.jpg" alt="" />
                    </div>
                    <div className='hero-card-part2'>
                        <div className='text-area'>
                            <h4>What is DevFire ?</h4>
                            <p>DevFire is a student community built with the vision to encourage development ! We provide the best resources, conducts contests, hackathons, workshops, sessions to test your skills, a guide to Open-source, and help you build projects.</p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-3">
                <div className="hero-3-main">
                    <h1>Dive into the world of</h1>
                    <h1 className='h1-color'>Development🚀</h1>
                    <img src='images/hero-main-3.png' alt='' />
                </div>
            </div>
        </div>
    )
}

export default Hero