import express from "express";

import  cors from "cors";
 import cookieParser from "cookie-parser";

const app=express();
app.use(cors(
    ORGIN=process.env.CORS_ORIGIN,
    credentials=true
));


app.use(express.json({limit:"60kb"}))
app.use(express.urlencoded({extended:true,limit:"60kb"}))
app.use(express.static)
app.use(cookieParser())
// export default app;  or
export { app };