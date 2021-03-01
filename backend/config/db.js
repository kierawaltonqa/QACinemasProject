'use strict'

const mongoose = require('mongoose');
const { Schema, model } = mongoose;





const paymentSchema = new Schema({
    fullName: { type: String, required: true },
    cardNumber: { type: Number, required: true },
    expiryDate: { type: String, required: true },
    CVC: { type: Number, required: true }



});
const Payment = model(`Payment`, paymentSchema);

const BookingSchema = new Schema ({

    moviename : { type: String, required: true },
    date : { type: String, required: true },
    time : { type: String, required: true },
    bookername : { type: String, required: true },
    adultseats : { type: String, required: true },
    childseats : { type: String, required: true },
    
})
const Booking = model('Booking', BookingSchema);

mongoose.connect(`mongodb+srv://cinema:root@spellcluster.tnmib.mongodb.net/cinema?authSource=admin&replicaSet=atlas-nzfvt5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log(`Connection has worked`);
    }
})

module.exports = { "Payment": Payment };
module.exports = {"Booking" : Booking};
