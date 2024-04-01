const { Turmas } = require("../models/models");

// encontrar turma
async function findTurma (req,res,next){
    const { id } = req.params;
    const turma = await Turmas.findByPk(id);
    
    if(!turma){
        return res.status(400).json({error:'nao encontrado'})
    }

    req.turma = turma;
    next()
}

module.exports = findTurma;