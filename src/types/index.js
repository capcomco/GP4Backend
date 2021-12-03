const { projectType } = require('./project')
const { userType } = require('./user')
const { avancesType } = require('./avances')

const types = [projectType, userType, avancesType]
module.exports = {
    types
}