import React, { useState } from 'react'
import ReadAll from '../FilmList/ReadAll'
import Sidebar from '../Sidebar/Sidebar'
import "../Resources/TicketBooking.css"
import { Alert } from 'reactstrap'

const TicketBooking = () => {

    const [basketid, setbasketid] = useState({});
    const [ticketAlert, setticketAlert] = useState(false);



    



    return (

        <>
            <div className="row">
                <div className="col-9">
                    <br />
                    <h2 style={{ color: "white", backgroundColor: "grey", marginLeft: "25px" }}><center>Ticket Booking:</center></h2>
                    <Alert isOpen={ticketAlert} style={{marginLeft:"25px", textAlign:"center"}} color="danger">Please select a movie and seats before purchasing!</Alert>
                    <br />
                    <br />
                    <div className="">
                        <ReadAll basketid={setbasketid} />
                    </div>
                </div>
                <div className="col-3" style={{backgroundColor:"black"}}>
                    <Sidebar ticketalert={setticketAlert} basketid={basketid} style={{backgroundColor:"black"}} />
                </div>
            </div>
        </>

    )

}

export default TicketBooking
