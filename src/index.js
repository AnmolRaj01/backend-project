import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./env",
});

connectDB()
.then(()=>{
 app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running at port ${process.env.PORT || 8000}`);
 })  
}).catch((err)=>{
    console.log("mongodb connection failed !!!",err);
    throw err;
})   



// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";

// import  express from "express";

// const app = express();





// // function connectDB() {
// //   mongoose.connect(process.env.MONGODB_URI, {
// //     dbName: process.env.DB_NAME,
// //   });
// //   const db = mongoose.connection;
// //   db.on("error", console.error.bind(console, "connection error:"));

// // usnig IIFE(immediately invoked funxgtion)
// (async () => {
//     try{
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    app.on("error",()=>{
//        console.log( "ERROR:",err);
//     throw err;
//    })
//     }
//     catch(err){
//         console.log( "ERROR:",err);
//     throw err;
//     }    

// })()





