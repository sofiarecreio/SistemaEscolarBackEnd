const express = require('express');
const avaliacoesRoutes = express.Router();

//Inclusão do Middleware
const findAvaliacao = require('../middleware/findAvaliacaoMiddleware');

//Inclusão do Controller
const avaliacaoController = require('../controllers/avaliacaoController');

//Criar Avaliação
avaliacoesRoutes.post("/", (req, res) => avaliacaoController.createAvaliacao(req,res),
);

//Listar Avaliação
avaliacoesRoutes.get("/", (req, res) => avaliacaoController.getAvaliacoes(req,res),
);

//Buscar Avaliação pelo id
avaliacoesRoutes.get("/:avaliacaoId", findAvaliacao, (req, res) => avaliacaoController.getAvaliacaoById(req,res),
);

//Atualizar Avaliação
avaliacoesRoutes.put('/:avaliacaoId', findAvaliacao, (req, res) => avaliacaoController.updateAvaliacao(req, res),
);

//Deletar Avaliação
avaliacoesRoutes.delete('/:avaliacaoId', findAvaliacao, (req, res) => avaliacaoController.deleteAvaliacao(req, res),
);

module.exports = avaliacoesRoutes;