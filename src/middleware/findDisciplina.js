const { Disciplina } = require("../models/models");

// encontrar disciplina
async function findDisciplina (req,res,next){
    const { id } = req.params;
    const disciplina = await Disciplina.findByPk(id);
    
    if(!disciplina){
        return res.status(400).json({error:'nao encontrado'})
    }

    req.disciplina = disciplina;
    next()
}

module.exports = findDisciplina;