const express = require("express");

const turmasRoutes = express.Router();

//Inclusão dos Middlewares
const checkTurmaExists = require("../middleware/checkTurmaExistsMiddleware");

//Inclusão dos Controllers
const turmasController = require("../controllers/turmasController");

// Criar turmas
turmasRoutes.post("/", checkTurmaExists, (request, response) => turmasController.criarTurma(request, response));

module.exports = turmasRoutes;