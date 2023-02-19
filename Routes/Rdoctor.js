import express from "express"
import { addDoctor, findDoctor, viewDoctor } from "../controller/Cdoctor.js"
export const docRouter=express.Router()
docRouter.get(`/view/:care`,viewDoctor)
docRouter.get(`/find/:id`,findDoctor)
docRouter.post(`/add`,addDoctor)