// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: "./.env"
})

console.log("ENV TEST:", process.env.MONGODB_URI);




connectDB();
