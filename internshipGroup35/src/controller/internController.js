//const internModel = require("../models/internModel")





const createInterns = async function (req , res){
    try{
        return res.status(201).send({status:true , msg:"success"})
    }
    catch(err){
        return res.status(500).send({status:false , msg:err.message})
    }
}



module.exports.createInterns=createInterns




