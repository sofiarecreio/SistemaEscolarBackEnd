const express = require("express");

const professorRoutes = express.Router();
const professorController = require("../controllers/professoresControllers.js");






//Ver todos os professores
professorRoutes.get("/", (req,res)=> professorController.getProfessores(req,res));

//Criar professor
professorRoutes.post("/", (req,res)=> professorController.criarProfessor(req,res));

//Deletar professor
professorRoutes.delete("/:id",  (req,res)=> professorController.deleteProfessor(req,res));

//atualizar professor
professorRoutes.put("/:id",  (req,res)=> professorController.updateProfessor(req,res));


module.exports = professorRoutes;