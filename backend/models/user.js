const mongosee = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongosee.Schema({
    name:{
        type : String
    },

    email:{
        type : String
    },

    password:{
        type : String
    },    

    date:{
        type : Date,
        default : Date.now
    }
})

userSchema.methods.generateJWT = function(){
    return jwt.sign({
        _id : this._id,
        name : this.name,
        email : this.email
    }, "secretKey")
}

const User = mongosee.model('user', userSchema)
module.exports.User = User
module.userSchema = userSchema