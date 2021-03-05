import React from "react";
import { Table } from "react-bootstrap";

const Times = () => {



  return (
    <div className="beauty" style={{borderColor: "black"}} >
    
      <Table st striped bordered hover variant="dark" >
        <tr>
          <td>Monday</td>
          <td>08:00am - 22:00pm</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>08:00am - 22:00pm</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>08:00am - 22:00pm</td>
        </tr>

        <tr>
          <td>Thursday</td>
          <td>08:00am - 22:00pm</td>
        </tr>

        <tr>
          <td>Friday</td>
          <td>08:00am - 22:00pm</td>
        </tr>

        <tr>
          <td>Saturday</td>
          <td>08:00am - 22:00pm</td>
        </tr>

        <tr>
          <td>Sunday</td>
          <td>12:00pm - 17:00pm</td>
        </tr>
      </Table>
    </div>
  );
};

export default Times;
