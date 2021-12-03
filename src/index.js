const express = require('express')
const mongoose = require('mongoose')
const {ApolloServer} = require("apollo-server-express")
const {resolvers} = require('./resolvers')
const {types} = require('./types')


const app = express()
const server = new ApolloServer({
    typeDefs:types,
    resolvers:resolvers
})



mongoose.connect("mongodb+srv://admin:1234@cluster0.vaa2a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", async()=>{
    console.log("conexión a bd exitosa");
    app.listen(5555, async()=>{
        await server.start()
        server.applyMiddleware({app})
        console.log("Servidor inicializado en puerto 5555");
    })
})