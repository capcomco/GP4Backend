const { gql } = require("apollo-server-express")

const userType = gql`
    
enum Perfil{
    Estudiante
    Lider
    Administrador
}

enum EstadoUsuario{
    Pendiente
    Autorizado
    No_Autorizado
}

type User{
        _id: ID!
        name: String
        lastName: String
        phone: String
        email: String!
        password: String!
        perfil: Perfil
        estado: EstadoUsuario
        projects:[Project]
    }
    type Project{
        _id: ID!
        name: String
        description: String
        topic: String
        owner: ID
    }

    type Query {
        getUsers: [User]
        getUserById(_id:String): User
    }
    type Mutation {
        createUser(
            name: String
            lastName: String
            phone: String
            email: String!
            password: String!
            perfil: Perfil
            estado: EstadoUsuario
        ): User
        updateUser(
            _id: ID!
            name: String
            lastName: String
            phone: String
            email: String!
            password: String!
            perfil: String
            estado: EstadoUsuario
        ): User
    }
`;

module.exports = {userType}