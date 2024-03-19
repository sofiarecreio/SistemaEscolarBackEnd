const {Alunos} = require("../models/models");

async function checkAlunoExists( request, response, next ) {
    try {
        const { id } = request.body;
        const aluno = await Alunos.findOne({
            where: {
                id:id,
            }
    })
    if(aluno) {
        return response
        .status(400)
        .json({error: "Aluno já existe!"});
    }
    return next();
    } catch (error) {
        return response
        .status(500)
        .json({error: "Erro ao checar se o aluno já existe!"})
    }
}
module.exports = checkAlunoExists;