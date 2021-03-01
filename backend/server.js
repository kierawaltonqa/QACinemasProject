'use strict';
const express = require('express');
const createError = require('http-errors');
const cors = require('cors')

// INIT MY APP
const app = express();
app.use(express.json());

app.use(cors());


// Middleware
const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

app.use(logger);


const bookingRoute = require("./Routes/Booking");

app.use("/bookings", bookingRoute);

// error handling
app.use((req,res,next) => {
    next(createError(404, 'Resource not found'));
});

app.listen(4500);
