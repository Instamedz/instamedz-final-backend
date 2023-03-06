import mongoose from "mongoose";
const schema=mongoose.Schema({
name:{type:String,required:"name of user necessary"},
email:{type:String,required:"name of email necessary"},
password:{type:String,required:true},
secans:{type:String},
phone:{type:Number},
appointment:[{
DateAppoint:Date,
Mode:String,
Status:String,
BookedOn:{type:Date},
Docid:String,
Docname:String,
Care:String
}]
})
export const usermodel =  mongoose.model("user",schema)