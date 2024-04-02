const { Avaliacoes } = require("../models/models"); //Mudar nome caso no modelo nao seja esse

async function findAvaliacao(req, res, next) {
    try{
        const { avaliacaoId } = req.params;

        const avaliacao = await Avaliacoes.findByPk(avaliacaoId);

        if (!avaliacao) {
            return res.status(404).json({ error: "Avaliação não encontrada"});
        }

        req.avaliacao = avaliacao;

        return next();
    } catch(error) {
        return res 
            .status(500)
            .json({error: "Erro ao tentar achar a avaliação"});
    }
}

module.exports = findAvaliacao;