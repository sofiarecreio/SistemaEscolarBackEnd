const { Usuarios } = require("../models/models") 

async function login(req, res){

    try{
        const { login, password } = req.body;
        const user = Usuarios.findOne ({
            where: {
                email: login,
                senha: password
            }
        })
    }catch (error) {

        return res.status(500).json({ error: "nao foi possivel fazer o login" })
    }
    return res.status(200).json(user)
}

module.exports = login
