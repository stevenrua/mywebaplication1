const jwt = require('jsonwebtoken')

function auth(req,res,next){
    let jwtoken = req.header('Authorization')
    if(!jwtoken) return res.status(401).send('Acceso Denegado. No hay token locas')

    jwtoken = jwtoken.split(' ')[1]
    if(!jwtoken) return res.status(401).send('Acceso Denegado. No hay token')

    try{
        const payload = jwt.verify(jwtoken,"secretKey")
        req.user = payload
        next()
    }catch(e){
        res.status(401).send('Acceso Denegado. Token no válido')
    }
}

module.exports = auth