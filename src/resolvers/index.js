const {projectResolvers} = require('./project')
const {userResolvers} = require('./user')
const {avancesResolvers} = require('./avances')

const resolvers = [projectResolvers, userResolvers, avancesResolvers]

module.exports = {resolvers}