const { Usuario } = require("../models/models");

// encontrar usuario
async function findUser (req,res,next){
    const { id } = req.params;
    const user = await Usuario.findByPk(id);
    
    if(!user){
        return res.status(400).json({error:'nao encontrado'})
    }

    req.user = user;
    next()
}

module.exports = findUser;