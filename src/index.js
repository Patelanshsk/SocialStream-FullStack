// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path: "./.env"
})

console.log("ENV TEST:", process.env.MONGODB_URI);




connectDB()
.then(() => {

    app.on("error", (err) => {
        console.log("Error inside server !!", err);
    });

    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running on port : ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("MONGODB connection failed !!", err);
});

