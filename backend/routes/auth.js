const express = require('express')
const router = express.Router()
const {User} = require('../models/user')

router.post('/', async(req,res)=>{
    const user = await User.findOne({email:req.body.email})
    if(!user) return res.status(400).send('usuario o contraseña incorrectos')

    if(user.password!==req.body.password) return res.status(400).send('usuario o contraseña incorrectos')

    const jwtoken = user.generateJWT()
    res.status(200).send({jwtoken})
})
module.exports = router