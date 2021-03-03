import React from 'react'
import { Card, CardBody, CardTitle } from "reactstrap"
import "../Resources/TicketBooking.css"

const Sidebar = () => {
    return (
        <div className="bg-light border-right" id="bookingside">
        <Card>
            <CardBody>
                <CardTitle>My Basket:</CardTitle>
            </CardBody>
        </Card>
    </div>   
    )
}

export default Sidebar
