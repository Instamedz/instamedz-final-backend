import jwt from "jsonwebtoken"
import bp from "bcryptjs"
import { usermodel } from "../models/muser.js"
import { docmodel } from "../models/mdoctor.js"

export const Login =async(req,res)=>{
    const {email,password}=req.body
    if (email==="instamdez@admin.com" && password ==="tak@bst123") {
        res.send({admin:true})
    }
    else{
    try{
        const existingUser=await usermodel.findOne({email:email})
        if(!existingUser){
            res.status(404).send({message:"user doesnt exist"})
        }
        else{
            const passwordcrt=await bp.compare(password,existingUser.password)
            if(!passwordcrt){
                 res.status(404).send({message:"wrong password"})
            }
            else{
                const token=jwt.sign({email:email,id:existingUser._id},"test",{expiresIn:'1h'})
                res.status(200).send({token:token,id:existingUser._id})
            }
        }
    }
    catch(error){
        res.status(500).send("something went wrong...")
    }
}
}

export const Signup=async(req,res)=>{
const {email,password,name,sec}=req.body
try {
    const existingUser=await usermodel.findOne({email:email})
    if(existingUser){
        res.status(404).send({message:"user already exist"})
    }
    else{
        const hashedPassword=await bp.hash(password,5)
        const newUser=await usermodel.create({name:name,email:email,password:hashedPassword,secans:sec})   
        const token=jwt.sign({email:email,id:newUser._id},"test",{expiresIn:'1h'})
        res.status(200).send({result:newUser,token:token})
    }
} catch (error) {
    res.status(500).send("something went wrong signup...")
}
}

export const CheckSignup= async(req,res)=>{
    const {email}=req.body
    try {
        const existingUser=await usermodel.findOne({email:email})
        res.status(200).send({id:existingUser._id,sec:existingUser.secans,success:true})
    } catch (error) {
        res.status(404).send({message:"user doesn't exist",success:false})
    }
}

export const ChangePass=async (req,res)=>{
    const {id,password}=req.body
    try {
        const hashedPassword=await bp.hash(password,5)
        const update=await usermodel.findByIdAndUpdate(id,{password:hashedPassword})
        res.status(200).send({success:true})
    } catch (error) {
        res.status(404).send({success:false})
    }
}


export const Form=async(req,res)=>{
    const {phone,Mode,Docid,uid,date}=req.body
    try {
        const doc=await docmodel.findById(Docid)
        const user=await usermodel.findByIdAndUpdate(uid,{
            phone:phone,
            $addToSet:{'appointment':[{
                Mode:Mode,
                Status:"confirmed",
                BookedOn: Date(),
                DateAppoint:date,
                Docid:Docid,
                Docname:doc.name,
                Care:doc.care
            }]}
        })
        res.status(200).send("successfully added")

    } catch (error) {
        res.status(404).send("error in form..")
    }
    
}

export const Myappoint=async(req,res)=>{
    const {uid}=req.params
    try {
        const user=await usermodel.findById(uid)
        res.status(200).send(user)
        
    } catch (error) {
        res.status(400).send("eror in id finding")
    }
}