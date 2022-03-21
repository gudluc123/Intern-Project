const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({

name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
},
mobile:{
    type:String,
    required:true,
    unique:true,
    match:/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
},
collegeId:{
    type:ObjectId,
    ref:College
},
isDeleted:{
    type:Boolean,
    default:false
}






},{timestamps:true});
module.exports = mongoose.model('Intern',internSchema)
