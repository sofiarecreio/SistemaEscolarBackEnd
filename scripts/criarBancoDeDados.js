const sequelize = require("../config/database");

async function criarBancoDeDados() {
    try {
        await sequelize.sync({ force : true});
        console.log("Banco de Dados criado com sucesso!")
    } catch (error) {
        console.log("Erro na criação do Banco de dados: ", error);
    }
}

module.exports = criarBancoDeDados;