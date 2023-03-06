import express from "express"
import { Login,Signup,Form,Myappoint } from "../controller/auth.js"
export const userRoutes=express.Router()

userRoutes.post("/login",Login)
userRoutes.post("/signup",Signup)
userRoutes.post("/formsubmit",Form)
userRoutes.get("/myappoint/:uid",Myappoint)