import { docmodel } from "../models/mdoctor.js"
export const viewDoctor=async(req,res)=>{
    const {care}=req.params
    try {
        const data=await docmodel.find({care:care});
        res.send(data)
    } catch (error) {
        console.log("errorin doctor fetch")
    }    
}

export const addDoctor=async(req,res)=>{
    // const {care,name,language,img,degree,fee,totalconsult,experience,available_hrs,gender,rating}=req.body
    const data=req.body
        try{
            const dataAdded = await docmodel.create({
            ...data
            })
            res.send({msg:"data added success"})
        }
        catch(error){
            res.send({msg:"err in content add"})
        }
    }

export const findDoctor=async(req,res)=>{
    const {id}=req.params
    try {
        const docData = await docmodel.findById(id)
        res.status(200).send(docData)
    } catch (error) {
        console.log("error in find by id")
    }
}
    