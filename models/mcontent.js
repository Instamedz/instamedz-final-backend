import mongoose from "mongoose"
const contentSchema=new mongoose.Schema({
    title:{type:String,required:true},
    shd:{type:String,required:true},
    content:{type:String,required:true},
    img:{type:String},
    bg:{type:String},
    _id:{type:Number}
    
})

export const eyemodel=mongoose.model("eye",contentSchema)
export const covidmodel=mongoose.model("covid",contentSchema)
export const dentalmodel=mongoose.model("dental",contentSchema)
export const nutrimodel=mongoose.model("nutri",contentSchema)
export const soulmodel=mongoose.model("soul",contentSchema)
export const heartmodel=mongoose.model("heart",contentSchema)
export const childmodel=mongoose.model("child",contentSchema)

