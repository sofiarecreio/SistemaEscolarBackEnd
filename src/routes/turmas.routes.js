const express = require("express");

const turmasRoutes = express.Router();

//Inclusão dos Middlewares
const checkTurmaExists = require("../middleware/checkTurmaExistsMiddleware");

//Inclusão dos Controllers
const turmasController = require("../controllers/turmasController");

// Criar turmas
turmasRoutes.post("/", checkTurmaExists, (request, response) => turmasController.criarTurma(request, response));

//Listar turmas
turmasRoutes.get("/", (request, response) =>
turmasController.getTurma(request, response));

//Atualizar turmas
turmasRoutes.put("/:id", checkTurmaExists, (request, response) => turmasController.updateTurma(request, response));

//Deletar turmas
turmasRoutes.delete("/:id", checkTurmaExists, (request, response) =>
turmasController.deleteTurma(request, response));

module.exports = turmasRoutes;