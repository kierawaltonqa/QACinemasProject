import React from 'react'

import "../Resources/Screen.css"

const ScreensReadMore = ({ screen, toggleState }) => {

    return (
        <button id="myButton" style={{ backgroundColor: "gold" }} className="btn btn-secondary btn-block" onClick={toggleState} >Read More</button>
    )
}

export default ScreensReadMore
