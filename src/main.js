const express = require("express");
const app = express();

const port = 3333;

const router = require("./routes/index");
const criarBancoDeDados = require("../scripts/criarBancoDeDados");

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log("API rodando na porta: ", port);
    console.log("Encerrar => CTRL + C")
})

criarBancoDeDados();