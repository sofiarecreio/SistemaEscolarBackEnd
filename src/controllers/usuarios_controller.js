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
        const usuario = Usuario.create(
            dados);

    } catch (error) {
        console.log(error)
        return  res.status(500).json({error : "nao foi possivel criar o usuario"})
    }
}

// deletar usuario
async function deleteUser (req,res){
    try {
        const user = req.user;
        await user.destroy()
        return res.status(204).send()

    } catch (error) {
        console.log(error)
        return  res.status(500).json({error : "nao foi possivel deletar o usuario"})
    }
}

//update user

async function updateUser (req,res){
    try {
        const user = req.user;
        const novosDados = req.body;
        await user.update(novosDados);
        return res.status(200).json('Usuario atualizado com sucesso')

    } catch (error) {
        console.log(error)
        return  res.status(500).json({error : "nao foi possivel atualizar o usuario"})
    }
}

module.exports = {
    getUser,
    createUser,
    deleteUser,
    updateUser,
}