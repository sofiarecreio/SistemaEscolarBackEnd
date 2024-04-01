const { Op } = require("sequelize");

const { Turmas } = require("../models/models")
const { Disciplina } = require("../models/models")

const { v4: uuidv4 } = require('uuid');


async function criarTurma(req, res) {
    try {
        const { ano, turno, serie, disciplinas } = req.body;


        // Crie a turma
        const turma = await Turmas.create({
            ano,
            turno,
            serie
        });

        // Recupere as disciplinas do banco de dados com base nos IDs fornecidos
        const disciplinasAssociadas = await Disciplina.findAll({ where: { id: disciplinas }});

        // Associe as disciplinas à turma criada    
        await turma.setDisciplinas(disciplinasAssociadas);

        // Retorne a resposta com a turma criada
        return res.status(201).json(turma);
    } catch (error) {
        console.error('Erro ao criar turma:', error);
        return res.status(400).json({ error: "Não foi possível criar a turma" });
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