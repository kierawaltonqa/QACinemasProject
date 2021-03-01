'use strict';
const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PAYMENT, BOOKING, DISCUSSION } = require('./config/CONSTS.json')

// INIT MY APP
const app = express();

app.use(bodyParser.json());

app.use(cors());

//!payment
const paymentRoute = require('./Routes/payment');
app.use(`${PAYMENT}`, paymentRoute);
//!Booking
const bookingRoute = require("./Routes/Booking");
app.use(`${BOOKING}`, bookingRoute);
//!Discussiondi
const discssionRoute = require('./Routes/discussion');
app.use(`${DISCUSSION}`, discssionRoute);

// error handling
app.use((req, res, next) => {
    next(createError(404, 'Resource not found'));
});


const server = app.listen(4500, () => {
    console.log(`server has started on port number:  ${server.address().port}`);
});
