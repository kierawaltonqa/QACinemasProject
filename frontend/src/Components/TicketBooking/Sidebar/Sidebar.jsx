import React from 'react'
import { Card, CardBody, CardTitle, CardFooter } from "reactstrap"
import "../Resources/TicketBooking.css"

const Sidebar = ({basketid}) => {








    return (
        <div className=" border-right" id="bookingside" style={{backgroundColor:"black"}}>
        <Card style={{backgroundColor:"gold"}}>
            <CardBody style={{backgroundColor:"gold"}}>
                <CardTitle>My Basket:</CardTitle>
                <div>
                <h6><b>Ticket Holder Name</b>  {basketid.bookername}</h6>
                <h6><b>Movie:</b>  {basketid.moviename}</h6>
                <h6><b>Adult Tickets:</b>  {basketid.adultseats}</h6>
                <h6><b>Child Tickets:</b>  {basketid.childseats}</h6>
                <h6><b>Deluxe seats:</b>  {basketid.deluxe}</h6>
                <h6><b>Time:</b>  {basketid.time}</h6>
                </div>
            </CardBody>
            <CardFooter className="text-muted">

            </CardFooter>
        </Card>
    </div>   
    )
}

export default Sidebar
