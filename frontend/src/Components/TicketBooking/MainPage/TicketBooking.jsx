import React, { useState } from 'react'
import ReadAll from '../FilmList/ReadAll'
import Sidebar from '../Sidebar/Sidebar'
import "../Resources/TicketBooking.css"

const TicketBooking = () => {

    const [basketid, setbasketid] = useState({});



    



    return (

        <>
        <hr />
            <div className="row">
                <div className="col-9">
                    
                    <h2 style={{ color: "gold",  marginLeft: "25px" }}><center>Ticket Bookings:</center></h2>
                    <br />
                    <br />
                    <div className="">
                        <ReadAll basketid={setbasketid} />
                    </div>
                </div>
                <div className="col-3" style={{backgroundColor:"black"}}>
                    <Sidebar basketid={basketid}  />
                </div>
            </div>
        </>

    )

}

export default TicketBooking
