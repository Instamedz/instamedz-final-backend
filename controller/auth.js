import jwt from "jsonwebtoken"
import bp from "bcryptjs"
// import modelinst from "../models/muser.js"

export const Login =async(req,res)=>{
    const {email,password}=req.body
    try{
        console.log(req.body)
        // const existingUser=await modelinst.findOne({email:email})
        // const passwordcrt=await bp.compare(password,existingUser.password)
        // if(!existingUser){
        //     res.status(404).send({message:"user doesnt exist"})
        // }
        // else{
        //     if(!passwordcrt){
        //         return res.status(404).send({msg:"wrong password"})
        //     }
        //     else{
        //         const token=jwt.sign({email:email,id:existingUser._id},"test",{expiresIn:'1h'})
        //         res.status(200).send({result:existingUser,token:token})
        //     }

        // }
        if (email==="instamdez@admin.com" && password ==="tak@bst123") {
            res.send({admin:true})
        }
    }
    catch(error){
        res.status(500).send("something went wrong...")
    }
}