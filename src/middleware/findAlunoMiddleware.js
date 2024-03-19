const { Alunos } = require("../models/models");

async function findAluno( request, response, next ) {
    try {
        const { id } = request.params;

        const aluno = await Alunos.findByPk(userId);

        if(!aluno) {
            return response
            .status(404)
            .json({error: "Aluno não encontrado!"});
        }

        request.aluno = aluno;
        return next();
    } catch (error) {
        return  response
        .status(500)
        .json({error: "Erro ao achar o aluno!"});
    }
}

module.exports = findAluno;