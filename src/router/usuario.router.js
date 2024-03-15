const express = require('express') ;
const usuariosRoute = express.Router();
const usuarios_controller = require("../controller/usuarios_controller");

// inclusao middlwares

//rotas

//ver todos os usuarios
usuariosRoute.get("/", (req,res)=> usuarios_controller.getUser(req,res));

//Criar Usuario
usuariosRoute.post("/", (req,res)=> usuarios_controller.createUser(req,res));



module.exports = usuarioRoute;