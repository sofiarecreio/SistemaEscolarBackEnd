const express = require("express");

const turmasRoutes = express.Router();

//Inclusão dos Controllers
const turmasController = require("../controllers/turmasController");

// Criar turmas
turmasRoutes.post("/", (request, response) => turmasController.criarTurma(request, response));

module.exports = turmasRoutes;