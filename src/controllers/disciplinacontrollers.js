const { Op } = require("sequelize");
const { Disciplina } = require("../models/models")
const { v4: uuidv4 } = require('uuid');


async function criarDisciplinas(req, res) {
    try {
        
        const { codigo, nome } = req.body
        const disciplina = await Disciplina.create({
            codigo,
            nome
        })

        return res.status(201).json(disciplina)
    } catch (error) {
        
        return res.status(400).json({ error: "nao foi possivel criar a disciplina" })
    }
}

async function getDisciplina(req, res) {
    try {
        const disciplina = await Disciplina.findAll()
        return res.status(200).json(disciplina)

    } catch (error) {
        return res.status(400).json({ error: "nao foi possivel listar as disciplinas" })
    }
}
async function deleteDisciplina(req, res) {
    const {id} = req.params
    try {
        const disciplina = await Disciplina.findOne({where: {id:id}})
        await disciplina.delete()
        return res.status(200).json(disciplina)
    }
    catch (error) {
        return res.status(400).json({ error: "nao foi possivel deletar a disciplina" })
}}

async function updateDisciplina(req, res){
    const {id} = req.params
    try {
        const disciplina = await Disciplina.findOne({where: {id:id}})
        await disciplina.update(req.body)
        return res.status(200).json(disciplina)
    }
    catch (error) {
        return res.status(400).json({ error: "nao foi possivel deletar a disciplina" })
}}

module.exports = {
    criarDisciplinas,
    getDisciplina,
    deleteDisciplina,
    updateDisciplina
}