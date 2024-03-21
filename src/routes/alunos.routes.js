const express = require('express') ;
const alunosRoutes = express.Router();

// Inclusão dos Middlewares
const checkAlunoExists = require("../middleware/checkAlunoExistsMiddleware")
const findAluno = require("../middleware/findAlunoMiddleware")

//Inclusão dos Controllers
const alunoController = require("../controllers/alunosControllers")

//Criar aluno
alunosRoutes.post('/', checkAlunoExists, (req, res) => alunoController.createAluno(req, res));

//Listar alunos
alunosRoutes.get('/', (req, res) => alunoController.getAllAluno(req, res));

//Buscar aluno pelo id
alunosRoutes.get('/:id', findAluno, (req, res) => alunoController.getByIdAluno(req, res));

//Atualizar aluno
alunosRoutes.put('/:id', findAluno, (req, res) => alunoController.updateAluno(req, res));

// Deletar aluno
alunosRoutes.delete('/:id', findAluno, (req,res) => alunoController.deleteAluno(req, res));

module.exports = alunosRoutes;