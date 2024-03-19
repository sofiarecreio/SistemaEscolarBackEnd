
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const sequelize = require("../../config/database");

//Modelos de Professores
const Professores = sequelize.define("Professor", {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: () => uuidv4(),
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
       type: DataTypes.STRING,
       allowNull: false, 
    }
});

//Modelo de Aluno
const Alunos = sequelize.define("User", {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: () => uuidv4(),
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nomePai: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nomeMae: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
    }
});

module.exports = {
    Alunos,
    Professores
}