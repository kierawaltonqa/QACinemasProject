'use strict'

const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Cinemachema = new Schema ({
    // : String,
    //locations : String,
});

const BookingSchema = new Schema ({

    moviename : String,
    date : String,
    time : String,
    bookername : String,
    adultseats : Number,
    childseats : Number
    
})
    
const Cinema = model(`Cinema`, Cinemachema);
const Booking = model('Booking', BookingSchema);

mongoose.connect(`mongodb+srv://cinema:root@spellcluster.tnmib.mongodb.net/test?authSource=admin&replicaSet=atlas-nzfvt5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Connection has worked`);
    }
})

module.exports = { "Cinema": Cinema };
module.exports = {"Booking" : Booking};