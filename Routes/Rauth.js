import express from "express"
import { Login,Signup,Form,Myappoint, ChangePass, CheckSignup } from "../controller/auth.js"
export const userRoutes=express.Router()

userRoutes.post("/login",Login)
userRoutes.post("/signup",Signup)
userRoutes.post("/formsubmit",Form)
userRoutes.post("/changepassword",ChangePass)
userRoutes.post("/checksignup",CheckSignup)
userRoutes.get("/myappoint/:uid",Myappoint)