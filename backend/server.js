'use strict';
const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PAYMENT, BOOKING, DISCUSSION, COMMENT, BLOG } = require('./config/CONSTS.json');

// INIT MY APP
const app = express();

app.use(cors());

app.use(bodyParser.json());



//!payment
const paymentRoute = require('./Routes/payment');
app.use(`${PAYMENT}`, paymentRoute);
//!Booking
const bookingRoute = require("./Routes/Booking");
app.use(`${BOOKING}`, bookingRoute);
//!Discussiondi
const discssionRoute = require('./Routes/discussion');
app.use(`${DISCUSSION}`, discssionRoute);
//!Comment section
const commentRoute = require('./Routes/Comment');
app.use(`${COMMENT}`, commentRoute);

//!Blog
const blogRoute = require('./Routes/blog');
app.use(`${BLOG}`, blogRoute);

// error handling
app.use((req, res, next) => {
    next(createError(404, 'Resource not found'));
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message || "something went wrong");
})


const server = app.listen(4500, () => {
    console.log(`server has started on port number:  ${server.address().port}`);
});


module.exports = server;