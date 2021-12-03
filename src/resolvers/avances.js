const avancesService = require('../services/avances')


const avancesResolvers ={
    Query:{
        getAvances: async(parent,args) =>{
            // lógica del proceso
            let avances  = await avancesService.getAvances()
            return avances
        },
        getAvancesById: async (parent,args)=>{
            let avances = await avancesService.getAvancesById(args._id)
        }
    },
    Mutation:{
        createAvances: async (parent, args) => {
            let avances = await avancesService.createAvances(args)
            return avances
        },
        updateAvances: async (parent,args) =>{
            let avances_update = avancesService.updateAvances(args._id,args)
            return avances_update
        }
    }
}

module.exports = {
    avancesResolvers
}