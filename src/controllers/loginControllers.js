const { Usuarios } = require("../models/models") 

async function login(req, res){

    try{
        const { email, senha } = req.body;
        const user = Usuarios.findOne ({
            where: {
                email: email,
                senha: senha
            }
        })
        return res.status(200).json(user)
    }catch (error) {

        return res.status(500).json({ error: "nao foi possivel fazer o login" })
    }

}

module.exports = login
