const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const sequelize = require("../../config/database");

//Modelo de Usuário
const Usuarios = sequelize.define("Usuario", {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: () => uuidv4(),
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cargoId: {
        type: DataTypes.ENUM("aluno", "professor", "secretario", "coordenador", "administrador"),
        allowNull: false,
    }
});

//Modelo de Turma
const Turmas = sequelize.define("Turmas", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    turno: {
        type: DataTypes.ENUM("manhã", "tarde"),
        allowNull: false,
    },
    serie: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 9
        }
    }
});

//Modelo de Aluno
const Alunos = sequelize.define("Aluno", {
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

//Modelo de Coordenador
const Coordenadores = sequelize.define("Coordenador", {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: () => uuidv4(),
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // A senha é criptografada
    senhaHash: {
        type: DataTypes.STRING,
        set(value) {
            this.setDataValue('password', hash(value));
        }
    },
});

module.exports = {
    Alunos,
    Usuarios,
    Coordenadores,
    Turmas
};