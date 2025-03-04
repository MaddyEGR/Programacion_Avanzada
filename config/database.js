const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { 
        userNewUrlParser: true,
        userUnifiedTopology: true }
    ).then(() => {
        console.log ('DataBase conectada');
    }).catch ((err) => {
        console.log ('Error al conectarse con DataBase: ', err);
});