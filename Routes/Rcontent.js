import express from "express"
import { addcontent,deletecontent,viewcontent } from "../controller/Ccontent.js"
export const contentrouter=express.Router()
contentrouter.post("/add",addcontent)
contentrouter.delete("/delete",deletecontent)
contentrouter.post("/viewall",viewcontent)