const express = require('express') ;
const usuariosRoute = express.Router();
const usuarios_controller = require("../controllers/usuarios_controller");

// inclusao middlwares
const findUser = require("../middleware/findUser")

//rotas

//ver todos os usuarios
usuariosRoute.get("/", (req,res)=> usuarios_controller.getUser(req,res));

//Criar Usuario
usuariosRoute.post("/", (req,res)=> usuarios_controller.createUser(req,res));

//Deletar usuario
usuariosRoute.delete("/:id", findUser, (req,res)=> usuarios_controller.deleteUser(req,res));

//atualizar usuario
usuariosRoute.put("/:id", findUser, (req,res)=> usuarios_controller.updateUser(req,res));



module.exports = usuariosRoute;