'use strict'

const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { DB_URL, DB_NAME } = require('./CONSTS.json');


const commentSchema = new Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    datePosted: { type: Date, default: Date.now }

})

const Comment = model(`Comment`, commentSchema);





const paymentSchema = new Schema({
    fullName: { type: String, required: true },
    cardType: { type: String, required: true },
    cardNumber: { type: Number, required: true },
    expiryDate: { type: String, required: true },
    CVC: { type: Number, required: true }



});
const Payment = model(`Payment`, paymentSchema);

const BookingSchema = new Schema({

    moviename: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    bookername: { type: String, required: true },
    adultseats: { type: String, required: true },
    childseats: { type: String, required: true },
    deluxe : {type: Boolean, required: true}

})
const Booking = model('Booking', BookingSchema);

const discussionSchema = new Schema({

    name: { type: String, required: true },
    movie: { type: String },
    topic: { type: String },
    discussion: { type: String },
    rating: { type: Number, min: 1, max: 10 }

})

const Discuss = model('Discuss', discussionSchema);

mongoose.connect(`${DB_URL}/${DB_NAME}?authSource=admin&replicaSet=atlas-nzfvt5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Connection has worked`);
    }
})

// //!FOR TESTING PURPOSES
// mongoose.connect(`${DB_URL}/test?authSource=admin&replicaSet=atlas-nzfvt5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(`Connection has worked`);
//     }
// })

module.exports = {
    "Payment": Payment,
    "Booking": Booking,
    "Discuss": Discuss,
    "Comment": Comment
}
