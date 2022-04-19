const mongoose =  require("mongoose");
const db = mongoose.connection;
require("dotenv").config();

const DB = "mongodb://127.0.0.1:27017/todoDB"


const connect = () => {
    mongoose.connect(DB)
    try{
     console.log(`Data base is connected on ${DB}`)
    } 
    catch(err) {
        console.log(err)
    }
} 

connect();

