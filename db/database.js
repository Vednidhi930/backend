const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/registerUser");

const db =mongoose.connection;

db.on("connected",()=>console.log("Database is connected"))
db.on("error",()=>console.log("Database facing some internal Error"))
db.on("diconnected",()=>console.log("Database is disconnected"));

module.exports=db;

