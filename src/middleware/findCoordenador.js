const { Coordenador } = require("../models/models");

// encontrar usuario
async function findCoordenador (req,res,next){
    const { id } = req.params;
    const user = await Coordenador.findByPk(id);
    
    if(!user){
        return res.status(400).json({error:'nao encontrado'})
    }

    req.user = user;
    next()
}

module.exports = findCoordenador;