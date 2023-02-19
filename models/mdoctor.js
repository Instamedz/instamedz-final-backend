import mongoose from "mongoose"
const doctorSchema=new mongoose.Schema({
    care:{type:String,required:true},
    name:{type:String,required:"include name of doc"},
    language:{type:String,default:"Hindi,English"},
    img:{type:String,default:""},
    degree:{type:[String],default:[]},
    fee:{type:Number,required:"include fees",default:200},
    totalconsult:{type:Number,default:0},
    experience:{type:Number,default:2},
    available_hrs:{type:String,default:"10am to 5pm"},
    gender:{type:String,default:"male"},
    rating:{type:Number}
})
export const docmodel =  mongoose.model("doctor",doctorSchema)