'use strict'

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const Cinemachema = new Schema({
    // : String,
    //locations : String,
});

const Cinema = model(`Cinema`, Cinemachema);

const paymentSchema = new Schema({
    fullName: { type: String, required: true },
    cardNumber: { type: Number, required: true },
    expiryDate: { type: String, required: true },
    CVC: { type: Number, required: true }



});
const Payment = model(`Payment`, paymentSchema);

mongoose.connect(`mongodb+srv://cinema:root@spellcluster.tnmib.mongodb.net/test?authSource=admin&replicaSet=atlas-nzfvt5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Connection has worked`);
    }
})

module.exports = { "Cinema": Cinema };
module.exports = { "Payment": Payment };