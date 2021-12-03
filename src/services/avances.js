const Avances = require('../models/avances')


createAvances = async (avances) => {
    let avancesInstance = new Avances(avances)
    avances = await avancesInstance.save()
    return avances
}


getAvances = async () => {
    let avances = await Avances.find({})
    return avances
}

getAvancesById = async (avancesId) => {
    let avances = await Avances.findById(avancesId).exec()
    return avances
}

updateAvances = async (avancesId, avances) => {
    newAvances = await Avances.findByIdAndUpdate(avancesId, avances, { new: true })
    return newAvances
}

UpdateProject = async(avancesId, projectId)=>{
    let avances = await Avances.findByIdAndUpdate(avancesId,{
        $push:{
            projects:projectId
        }
    })
    return avances
}

module.exports = {
    createAvances,
    getAvances,
    getAvancesById,
    updateAvances,
    UpdateProject
}