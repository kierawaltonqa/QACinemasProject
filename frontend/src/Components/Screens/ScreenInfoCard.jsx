import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap'
import "./Screen.css"
const ScreenInfoCard = ({title,cost,desc}) => {

    return (
        <center>
            <div className="container" style={{backgroundColor:"gray"}} type="hidden">
                <div className="col-4">
                <p id="myInfo">{title}</p>
                <p id="myInfo">{cost}</p>
                <p id="myInfo">{desc}</p>

                </div>
            </div>
        </center>
    )
}

export default ScreenInfoCard
