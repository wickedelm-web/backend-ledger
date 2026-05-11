const userModel = require("../models/user.model")

/*
* - user register controller
* -  POST / api/auth/register
*/

 async function userRegisterController(req, res){

    const {email, password, name} = req.body

    const isExists = await userModel.findOne({
        email:email
    })

    if(isExists){
        return res.status(422).json({
            message:"User already exists with this email",
            status:"failed"
        })
    }

    
}


module.exports = {
    userRegisterController
}