const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Project = require('./project')


const AvancesSchema = new  Schema({
    
    descripcionAvance:{
        type: String,
        require: true
    },
    fechaAvance:{
        type: Date,
        default: new Date()
    },
    observaciones:{
        type: String,
        required: true,
    },
    project:{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }
    
    
})

module.exports = mongoose.model("Avances", AvancesSchema)