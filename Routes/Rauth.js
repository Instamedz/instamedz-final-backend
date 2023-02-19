import express from "express"
import { Login } from "../controller/auth.js"
export const userRoutes=express.Router()

userRoutes.post("/login",Login)