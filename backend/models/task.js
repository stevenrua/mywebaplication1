const mongosee = require('mongoose')

const taskSchema = new mongosee.Schema({
    userId : String,
    name : String,
    status : String,
    description : String,
    imageUrl : String,
    date : {
        type : Date,
        default : Date.now
    }
})

const Task = mongosee.model('task',taskSchema)
module.exports = Task