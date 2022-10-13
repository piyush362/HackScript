import React from 'react'
import DevInfo from './DevInfo'
import Hero from './Hero'
import Navbar from './Navbar'

function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <DevInfo />
        </div>
    )
}

export default HomePage