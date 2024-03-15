const { Usuario } = require("../models/models")

async function getUser (req,res){
    try {
        const Users = await Usuario.findAll()
        return res.status(200).json(Users)
    } catch (error) {
        console.log(error)
        return  res.status(500).json({error : "nao foi possivel achar os usuarios"})
    }
}

module.exports = {
    getUser,
}