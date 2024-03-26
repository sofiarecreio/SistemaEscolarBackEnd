const express = require("express");

const turmasRoutes = express.Router();
const turmasController = require("../controllers/turmascontroller.js");

//Inclusão dos Middlewares
const checkTurmaExists = require("../middleware/checkTurmaExistsMiddleware");




//ver todos os turma
turmasRoutes.get("/", (req,res)=> turmasController.getTurma(req,res));

//Criar Usuario
turmasRoutes.post("/", (req,res)=> turmasController.criarTurma(req,res));

//Deletar usuario
turmasRoutes.delete("/:id", checkTurmaExists, (req,res)=> turmasController.deleteTurma(req,res));

//atualizar usuario
turmasRoutes.put("/:id", checkTurmaExists, (req,res)=> turmasController.updateTurma(req,res));


module.exports = turmasRoutes;