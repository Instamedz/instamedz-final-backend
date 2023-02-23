import * as dotenv from 'dotenv';
dotenv.config();
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { contentrouter } from "./Routes/Rcontent.js"
import { userRoutes } from "./Routes/Rauth.js"
import { docRouter } from './Routes/Rdoctor.js';
import { paymentrouter } from './Routes/Rpayment.js';

const app=express()
app.use(cors())
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))

app.use("/content",contentrouter)
app.use("/auth",userRoutes)
app.use("/doctor",docRouter)
app.use("/api",paymentrouter)

const PORT=process.env.PORT || 8000
const CONNECTION_URL=process.env.MONGODB_URL
mongoose.set('strictQuery', false)
mongoose.connect(CONNECTION_URL).then((res)=>console.log("db connected")).catch((err)=>console.log("err in db connnect"))

app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)})

