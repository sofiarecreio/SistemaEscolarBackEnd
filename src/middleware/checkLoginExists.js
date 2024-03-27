const { Usuarios } = require("../models/models");

async function checkUserExists( request, response, next) {
    try {
        const { mail } = request.body;
        const user = await Usuarios.findOne({
            where: {
                email: mail,
                
            }
    })
    if(!user) {
        return response
        .status(404)
        .json({error: "email não existe!"});
    }
    const { password } = request.body;
    if (user.senha != password){
        return response
        .status(400)
        .json({error: "senha incorreta!"});
    }
    return next();
    } catch (error) {
        return response
        .status(500)
        .json({error: "Erro ao checar se o email não existe!"})
    }
}

module.exports = checkUserExists;