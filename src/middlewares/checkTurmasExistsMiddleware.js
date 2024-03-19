const Turmas = require("../models/turmas");

async function checkTurmaExists( request, response, next) {
    try {
        const { id } = request.body;
        const turma = await Turmas.findOne({
            where: {
                id:id,
            }
    })
    if(turma) {
        return response
        .status(400)
        .json({error: "Turma já existe!"});
    }
    return next();
    } catch (error) {
        return response
        .status(500)
        .json({error: "Erro ao checar se a turma já existe!"})
    }
}
module.exports = checkTurmaExists;