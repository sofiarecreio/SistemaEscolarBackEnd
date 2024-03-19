const { Alunos } = require("../models/models")

// Criar aluno
async function createAluno(request, response){
    try {
        const { nome, idade, nomePai, nomeMae, cpf } = request.body;
        const aluno = await Alunos.create({
            nome, 
            idade, 
            nomePai, 
            nomeMae, 
            cpf
        });
        return response
            .status(201)
            .json(aluno);
    } catch (error) {
        console.log(error);
        return response
                .status(400)
                .json({error: "Não foi possível criar aluno."});
    }
}

//Listar todos os alunos
async function getAllAluno(request, response) {
    try {
        const alunos = await Alunos.findAll();
        return response
            .status(200)
            .json(alunos);
    } catch (error) {
        console.log(error);
        return response
            .status(500)
            .json({error: "Não foi possível listar todos os alunos."});
    }
}

//Buscar aluno por id
async function getByIdAluno(request, response) {
    const { id } = request.params;
    try {
        const aluno = await Alunos.findOne({where: {id:id}});
        return response
            .status(200)
            .json(aluno);
    } catch (error) {
        console.log(error);
        return response
                .status(500)
                .json({error: "Não foi possível buscar o aluno por id."});
    }
}


//Excluir um aluno
async function deleteAluno(request, response) {
    const { id } = request.params;
    try {
        const aluno = await Alunos.findOne({where: {id:id}});
        await aluno.delete();
        return response
            .status(204)
            .json(aluno);
    } catch (error) {
        console.log(error);
        return response
            .status(500)
            .json({error: "Não foi possível excluir o aluno."});

    }
}

//Atualizar o aluno
async function updateAluno(request, response) {
    const { id } = request.params;
    try {
        const aluno = await Alunos.findOne({where: {id:id}});
        await aluno.update(request.body);
        return response
            .status(200)
            .json(aluno);
    } catch (error) {
        console.log(error);
        return response
            .status(500)
            .json({error: "Não foi possível atualizar o aluno."});
    }
}

module.exports = {
    createAluno,
    getAllAluno,
    getByIdAluno,
    deleteAluno,
    updateAluno
}