const { Op } = require("sequelize");
const { Disciplinas } = require("../models/disciplinas")
const { v4: uuidv4 } = require('uuid');


async function criarDisciplinas(req, res) {
    try {
        
        const { Codigo, Nome } = req.body
        const disciplina = await Disciplinas.create({
            Codigo,
            Nome
        })

        return res.status(201).json(disciplina)
    } catch (error) {
        
        return res.status(400).json({ error: "nao foi possivel criar a disciplina" })
    }
}

