import React, { useState } from 'react'
import ReadAll from '../FilmList/ReadAll'
import Sidebar from '../Sidebar/Sidebar'
import "../Resources/TicketBooking.css"

const TicketBooking = () => {

    const [basketid, setbasketid] = useState({});



    



    return (

        <>
            <div className="row">
                <div className="col-9">
                    <br />
                    <h2 style={{ color: "white", backgroundColor: "grey", marginLeft: "25px" }}><center>Ticket Booking:</center></h2>

                    <br />
                    <br />
                    <div className="">
                        <ReadAll basketid={setbasketid} />
                    </div>
                </div>
                <div className="col-3" style={{backgroundColor:"black"}}>
                    <Sidebar basketid={basketid} style={{backgroundColor:"black"}} />
                </div>
            </div>
        </>

    )

}

export default TicketBooking
