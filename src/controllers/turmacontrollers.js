const { Op } = require("sequelize");

const { Turmas } = require("../models/turmas")

const { v4: uuidv4 } = require('uuid');


async function criarTurma(req, res) {
    try {

        
        const { turno, serie } = req.body
        const turma = await Turmas.create({

            turno,
            serie
            
        })

        return res.status(201).json(turma)
    } catch (error) {
        
        return res.status(400).json({ error: "nao foi possivel criar o turma" })
    }
}

async function getTurma(req, res) {
    try {
        const turmas = await Turmas.findAll()
        return res.status(200).json(turmas)

    } catch (error) {
        return res.status(400).json({ error: "nao foi possivel listar as Turmas" })
    }
}

async function deleteTurma(req, res) {
    const {id} = req.params
    try {
        const turma = await Turmas.findOne({where: {id:id}})
        await turma.delete()
        return res.status(200).json(turma)
    }
    catch (error) {
        return res.status(400).json({ error: "nao foi possivel deletar a turma" })
}}

async function updateTurma(req, res){
    const {id} = req.params
    try {
        const turma = await Turmas.findOne({where: {id:id}})
        await turma.update(req.body)
        return res.status(200).json(turma)
    }
    catch (error) {
        return res.status(400).json({ error: "nao foi possivel deletar a turma" })
}}

module.exports = {
    deleteTurma,
    criarTurma,
    getTurma,
    updateTurma
}