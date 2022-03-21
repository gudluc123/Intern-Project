//const collegeModel = require("../models/collegeModel")



const createCollege = async function (req , res){
    try{
        return res.status(201).send({status:true , msg:"success"})
    }
    catch(err){
        return res.status(500).send({status:false , msg:err.message})
    }
}







const collegeDetails = async function (req , res){
    try{
        return res.status(201).send({status:true , msg:"success"})
    }
    catch(err){
        return res.status(500).send({status:false , msg:err.message})
    }
}




module.exports.createCollege=createCollege
module.exports.collegeDetails=collegeDetails

