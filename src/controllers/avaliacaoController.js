const { Avaliacoes } = require("../models/models"); //Mudar nome caso no modelo nao seja esse

//Criando Avaliação
async function createAvaliacao (req, res) {
    try {
        const { nome, notaMaxima, peso } = req.body;
        const avaliacao = await Avaliacoes.create({
            nome,
            notaMaxima,
            peso,
        });
        return res
            .status(201)
            .json(avaliacao);
    } catch (error) {
        console.log(error);
        return res
                .status(400)
                .json({error: "Não foi possível criar avaliação."});
    }
};

//Listar Avaliações
async function getAvaliacoes(req, res) {
    try {
        const avaliacao = await Avaliacoes.findAll();
        return res
            .status(200)
            .json(avaliacao);
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({error: "Não foi possível listar as avaliações."});
    }
};

//Buscar avaliação pelo id
function getAvaliacaoById(req, res) {
    const { avaliacao } = req.params;
      
    return res
        .status(200)
        .json(avaliacao);
};

//Atualizar Avaliação
async function updateAvaliacao(req, res) {
    try {
        const { avaliacao } = req.body;
  
        const avaliacaoUpdated = await avaliacao.update(req.body);
  
        return res.status(200).json(avaliacaoUpdated);
    } catch (error) {
        return res
            .status(500)
            .json({ error: "Erro ao atualizar a avaliação" });
    }
};

//Deletar Avaliação
async function deleteAvaliacao (req, res) {
    try {
      const { avaliacao } = req;
  
      await avaliacao.destroy();
  
      return res.status(204).end();
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Erro ao deletar a avaliação" });
    }
};

module.exports = {
    createAvaliacao,
    getAvaliacoes,
    getAvaliacaoById,
    updateAvaliacao,
    deleteAvaliacao
};