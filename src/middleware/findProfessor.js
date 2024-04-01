const { Professores } = require("../models/models");

// encontrar professor
async function findProfessor (req,res,next){
    const { id } = req.params;
    const professor = await Professores.findByPk(id);
    
    if(!professor){
        return res.status(400).json({error:'nao encontrado'})
    }

    req.professor = professor;
    next()
}

module.exports = findProfessor;