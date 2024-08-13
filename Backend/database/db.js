const mongoose = require('mongoose');

const URI = process.env.MONGO_URL;

console.log("Inside MONGO ", URI)
mongoose.connect(URI)
    .then(()=>{console.log('Connected to the Database')})
    .catch((err) =>{ "Error Connecting to DB :" + err})


const db = mongoose.connection;

module.exports = db;