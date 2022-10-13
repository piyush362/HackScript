import React from 'react'
import DevCard from './DevCard'
import './Devinfo.css'

function DevInfo() {
    return (
        <div className='dev-container'>
            <DevCard
                name='Piyush Sagar'
                devtag='Founder'
            />
            <DevCard
                name='Aayush Pandey'
                devtag='Co-Founder'
            />
            <DevCard
                name='Saksham Vedi'
                devtag='Co-Founder'
            />
            <DevCard
                name='Atish Yadav'
                devtag='Co-Founder'
            />

        </div>
    )
}

export default DevInfo