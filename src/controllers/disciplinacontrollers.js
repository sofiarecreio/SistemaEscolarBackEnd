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

async function getDisciplina(req, res) {
    try {
        const disciplina = await Disciplinas.findAll()
        return res.status(200).json(disciplina)

    } catch (error) {
        return res.status(400).json({ error: "nao foi possivel listar as disciplinas" })
    }
}
async function deleteDisciplina(req, res) {
    const {id} = req.params
    try {
        const disciplina = await Disciplinas.findOne({where: {id:id}})
        await disciplina.delete()
        return res.status(200).json(disciplina)
    }
    catch (error) {
        return res.status(400).json({ error: "nao foi possivel deletar a disciplina" })
}}

