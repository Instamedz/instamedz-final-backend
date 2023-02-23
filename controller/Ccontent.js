import {eyemodel,covidmodel,dentalmodel,nutrimodel,soulmodel,heartmodel,childmodel} from "../models/mcontent.js"

function modelfind(care){
    switch(care){
        case "eye":
            return eyemodel      
            break
        case "heart":
            return(heartmodel)
            break
        case "covid":
            return(covidmodel)
            break
        case "dental":
            return(dentalmodel)
            break
        case "nutrimodel":
            return(nutrimodel)
            break
        case "soul":
            return(soulmodel)
            break
        case "child":
            return(childmodel)
           
    }
}

export const addcontent=async(req,res)=>{
const {title,care,shd,color,content}=req.body

const model=modelfind(care)
    try{
        const dataAdded = await model.create({
            title:title,
            shd:shd,
            bg:color,
            content:content,
            img:""
        })
        res.send({msg:"data added success",success:true})
    }
    catch(error){
        res.send({msg:"err in content add",success:false})
    }
}

export const deletecontent=async(req,res)=>{
    const {_id,care}=req.body
    try {
        await modelfind(care).deleteOne({_id:_id})
        res.status(200).send("deleted success")
    } catch (error) {
        console.log(error)
    }
}
export const viewcontent=async(req,res)=>{
    const pr=req.body.care.toLowerCase() 
    const model=modelfind(pr)
    try {
        const all= await model.find()
        res.status(200).send(all)
    } catch (error) {
        res.send({msg:"err in content view"})
        console.log("error view")
    }
    

}