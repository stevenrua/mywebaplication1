const express = require('express')
const router = express.Router()
const {User} = require('../models/user')

router.post('/', async(req,res)=>{

    if(req.body.name==="" || req.body.email==="" || req.body.password===""){
        //alert("Debes llenar todos los campos");
        return res.status(400).send("Debes llenar cada campo")
    }
    let user = await User.findOne({email:req.body.email})
    if(user) return res.status(400).send('Ese usuario ya existe')
    
    user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })
    
    const result = await user.save()
    const jwtoken = user.generateJWT();
    res.status(200).send({jwtoken})
    console.log("esta maricada que le pasa")

})
module.exports=router