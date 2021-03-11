import React, { useState } from 'react'
import ReadAll from '../FilmList/ReadAll'
import Sidebar from '../Sidebar/Sidebar'
import "../Resources/TicketBooking.css"
import { Alert } from 'reactstrap'


const TicketBooking = () => {



    // States
    const [basketInfo, setbasketinfo] = useState({});
    const [ticketAlert, setticketAlert] = useState(false);


    return (

        <>
            <hr />
            <div className="row">
                <div className="col-9">
                    <br />
                    <h2 style={{ color: "gold", marginLeft: "25px" }}><center>Ticket Booking:</center></h2>
                    <Alert isOpen={ticketAlert} style={{ marginLeft: "25px", textAlign: "center" }} color="danger">Please select a movie and seats before purchasing!</Alert>
                    <br />
                    <br />
                    <div className="">
                        <ReadAll basketinfo={setbasketinfo} />
                    </div>
                </div>
                <div className="col-3" style={{ backgroundColor: "black" }}>
                    <Sidebar ticketalert={setticketAlert} basketinfo={basketInfo} style={{ backgroundColor: "black" }} />
                </div>
            </div>
        </>
    )
}

export default TicketBooking
