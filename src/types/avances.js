const { gql } = require("apollo-server-express")

const avancesType = gql`
 
 
     type Avances{
        _id:ID
        descripcionAvance: String
        fechaAvance: String
        observaciones: String
        project: [Project]
    }
    

    enum EstadoStatus{
        Activo
        Inactivo
    }
    enum FaseStatus{
        Iniciado
        Desarrollo
        Terminado
    }

    type Project{
        _id: ID!
        identificador: String
        nombre: String
        descripcion: String
        objetivosGenerales: String
        objetivosEspecificos: [String]       
        presupuesto: Int
        fechaInicio: String
        fechaTerminacion: String
        estado: EstadoStatus
        fase: FaseStatus
        lider: ID
    }
    type Query{
        getAvances:[Avances]
        getAvancesById(_id:String):Avances
    }

    type Mutation{
        createAvances(
            descripcionAvance: String
            fechaAvance: String
            observaciones: String
            project: ID            
        ): Avances
        updateAvances(
            _id: ID!
            descripcionAvance: String
            fechaAvance: String
            observaciones: String                                   
        ):Avances
    }

`;
module.exports = { avancesType }