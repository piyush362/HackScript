import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav-title'>
                <img src="images/code10.png" alt="img" href="./" />
                <a className='title' href="./">HackScript</a>
            </div>
            <div className="nav-item">
                <a href="#">Home</a>
                <a href="#">Resources</a>
                <a href="#">Events</a>
            </div>
            <a className='login-btn2' href='#'>LOG IN</a>
        </nav>



    )
}

export default Navbar