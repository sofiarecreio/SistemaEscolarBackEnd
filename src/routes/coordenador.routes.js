const express = require('express') ;
const coordenadorRoutes = express.Router();
const coordenadorController = require("../controllers/coordenadorControllers")

// inclusao middlwares
const findCoordenador = require("../middleware/findCoordenador")

//rotas

//ver todos os usuarios
coordenadorRoutes.get("/", (req,res)=> coordenadorController.getUser(req,res));

//Criar Usuario
coordenadorRoutes.post("/", (req,res)=> coordenadorController.createUser(req,res));

//Deletar usuario
coordenadorRoutes.delete("/:id", findCoordenador, (req,res)=> coordenadorController.deleteUser(req,res));

//atualizar usuario
coordenadorRoutes.put("/:id", findCoordenador, (req,res)=> coordenadorController.updateUser(req,res));



module.exports = coordenadorRoutes;