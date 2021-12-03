const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')


const ProjectSchema = new  Schema({
    identificador:{
        type: String,
        required: true,
        unique: true

    },
    nombre:{
        type: String
    },
    descripcion:{
        type: String
    },
    objetivosGenerales: String,
    objetivosEspecificos: [String],
    
    presupuesto: Number,
    fechaInicio: {
        type: String,
        default: new Date()
    },
    fechaTerminacion:String,
    estado: {
        type: String,
        default: "inactivo"
    },
    fase: String,
    lider: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    
})

module.exports = mongoose.model("Project", ProjectSchema)