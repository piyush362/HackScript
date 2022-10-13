import React from 'react'
import './Devinfo.css'

function DevCard(props) {
    return (
        <div className='dev-card'>
            <img src='images/hero-pic-2.jpg'></img>
            <h4>{props.name}</h4>
            <h6>{props.devtag}</h6>
        </div>
    )
}

export default DevCard