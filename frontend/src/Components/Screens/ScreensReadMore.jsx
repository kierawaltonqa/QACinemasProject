import React, { useState } from 'react'
import ReadMoreText from './ReadMoreText'
import "./Screen.css"

const ScreensReadMore = ({screen, toggleState}) => {






    return (
            <button id="myButton" className="btn btn-secondary btn-block" onClick={toggleState} >Read More</button>
    )
}

export default ScreensReadMore
