import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";

import { DB_NAME } from "../constants.js";

const connectDB= async()=> {
    try{
      const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MONGODB connected successfully!! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.error("MONGODB connection error:", error);
        process.exit(1); // Exit the process with an error code
    }


}


export default connectDB;    // async function returns a promise, so we can use .then when calling connectDB() in index.js