const { DataTypes } = require("sequelize");

const sequelize = require("../../config/database");

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

module.exports = {
    Turmas
}