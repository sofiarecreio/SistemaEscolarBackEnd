const express = require("express");

const disciplinaRoutes = express.Router();
const disciplinaController = require("../controllers/disciplinacontrollers.js");


const findDisciplina = require("../middleware/findDisciplina")




//Ver todos as disciplinas
disciplinaRoutes.get("/", (req,res)=> disciplinaController.getDisciplina(req,res));

//Criar disciplina
disciplinaRoutes.post("/", (req,res)=> disciplinaController.cria(req,res));

//Deletar Disciplina
disciplinaRoutes.delete("/:id", findDisciplina,  (req,res)=> disciplinaController.deleteDisciplina(req,res));

//atualizar Disciplina
disciplinaRoutes.put("/:id", findDisciplina, (req,res)=> disciplinaController.updateDisciplina(req,res));


module.exports = disciplinaRoutes;