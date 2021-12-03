const { gql } = require("apollo-server-express")

const projectType = gql`
    

    type User{
        _id: ID!
        name: String
        lastName: String
        phone: String
        email: String!
        password: String!
        projects:[Project]
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
        getProjects:[Project]
        getProjectById(_id:String):Project
    }

    type Mutation{
        createProject(
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
        ): Project
        updateProject(
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
        ):Project
    }

`;
module.exports = { projectType }