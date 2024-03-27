const express = require("express");

const professorRoutes = express.Router();
const professorController = require("../controllers/professoresControllers.js");


const findProfessor = require("../middleware/findProfessor")




//Ver todos os professores
professorRoutes.get("/", (req,res)=> professorController.getProfessores(req,res));

//Criar professor
professorRoutes.post("/", (req,res)=> professorController.criarProfessor(req,res));

//Deletar professor
professorRoutes.delete("/:id", findProfessor,  (req,res)=> professorController.deleteProfessor(req,res));

//atualizar professor
professorRoutes.put("/:id", findProfessor, (req,res)=> professorController.updateProfessor(req,res));


module.exports = professorRoutes;