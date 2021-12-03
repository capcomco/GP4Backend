const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Project = require('./project')

const UserSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    lastName: {
        type: String
    },
    phone: {
        type: String
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    perfil:{
        type: String,
        required: true
    },
    estado:{
        type: String,
        required: true,
        default: "Pendiente"
    },
    projects:[{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }]
})

module.exports = mongoose.model("User",UserSchema)