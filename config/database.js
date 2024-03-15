const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./data/database.sqlite",
});

async function testConnectionDataBase() {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.log("Não foi possível se conectar com o banco de dados");
    }
}

testConnectionDataBase();

module.exports = sequelize;