'use strict';
const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const cors = require('cors')

// INIT MY APP
const app = express();


app.use(bodyParser.json());

app.use(cors());


// Middleware
// const logger = (req, res, next) => {
//     console.log(new Date());
//     next();
// }

//app.use(logger);

// const cinemaRoute = require("./Routes/Cinema");
// app.use("/cinema", cinemaRoute);

// app.use(logger);

const paymentRoute = require('./Routes/payment');

app.use("/payment", paymentRoute);

// error handling
app.use((req, res, next) => {
    next(createError(404, 'Resource not found'));
});

app.listen(4500);
