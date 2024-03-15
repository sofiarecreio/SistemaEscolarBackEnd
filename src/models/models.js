const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

//Modelo de Usuário
const User = sequelize.define("User", {
    Userid: {
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

const Turma = sequelize.define("Turma", {
    TurmaId: {
        type: DataTypes.UUIDV4,
        defaultValue: () => uuidv4(),
        primaryKey: true
    },
    Numero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Turno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Serie: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    
});

module.exports = {
    User,
    Turma
}
