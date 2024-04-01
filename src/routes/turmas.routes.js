const express = require("express");

const turmasRoutes = express.Router();
const turmasController = require("../controllers/turmacontrollers.js");

//Inclusão dos Middlewares
const checkTurmaExists = require("../middleware/checkTurmaExistsMiddleware");

const findTurma = require("../middleware/findTurma")




//Ver todos as turmas
turmasRoutes.get("/",checkTurmaExists, (req,res)=> turmasController.getTurma(req,res));

//Criar turma
turmasRoutes.post("/", (req,res)=> turmasController.criarTurma(req,res));

//Deletar turma
turmasRoutes.delete("/:id", findTurma, (req,res)=> turmasController.deleteTurma(req,res));

//atualizar turma
turmasRoutes.put("/:id", findTurma, (req,res)=> turmasController.updateTurma(req,res));


//Listar turmas
turmasRoutes.get("/", (request, response) =>
turmasController.getTurma(request, response));

//Atualizar turmas
turmasRoutes.put("/:id", checkTurmaExists, (request, response) => turmasController.updateTurma(request, response));

//Deletar turmas
turmasRoutes.delete("/:id", checkTurmaExists, (request, response) =>
turmasController.deleteTurma(request, response));

module.exports = turmasRoutes;