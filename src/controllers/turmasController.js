const { Op } = require('sequelize');
const { Turmas } = require("../models/turmas");

//Criar uma turma

async function criarTurma(request, response) {
    try {
        const { id, turno, serie } = request.body;
        const turma = await Turmas.create({
            id,
            turno,
            serie,
        });

        return response.status(201).json(turma);
    } catch (error) {
        console.error(error)
        return response
        .status(400)
        .json({ error: "Não foi possível criar o filme!" });
    }
}

module.exports = criarTurma;