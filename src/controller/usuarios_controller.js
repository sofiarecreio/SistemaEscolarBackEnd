const { Usuario } = require("../models/models") // supondo que models esteja pronto

//listar usuarios
async function getUser (req,res){
    try {
        const Users = await Usuario.findAll()
        return res.status(200).json(Users)
    } catch (error) {
        console.log(error)
        return  res.status(500).json({error : "nao foi possivel achar os usuarios"})
    }
}

//criar usuario
async function createUser (req,res){
    try {
        const dados = req.body
        dados.senha = await bcrypt.hash(dados.senha, 8);
        const Usuario = Usuario.create(
            dados);

    } catch (error) {
        onsole.log(error)
        return  res.status(500).json({error : "nao foi possivel criar o usuario"})
    }
}

module.exports = {
    getUser,
    createUser
}