const { Op } = require("sequelize");
const {Professores} = require("../models/models")
const { v4: uuidv4 } = require('uuid');


async function criarProfessor(req, res) {
    try {
        
        const { Nome, Cpf } = req.body
        const professor = await Professores.create({
            Nome,
            Cpf
            
        })

        return res.status(201).json(professor)
    } catch (error) {
        return res.status(400).json({ error: "nao foi possivel criar o professor" })
    }
}

async function getProfessores(req, res) {
    try {
        const professores = await Professores.findAll()
        return res.status(200).json(professores)

    } catch (error) {
        return res.status(400).json({ error: "nao foi possivel listar os professores" })
    }
}

