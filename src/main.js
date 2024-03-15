const express = require('express');
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = 3333;

const router = require('./routes/index');
const swaggerFile = require("./swagger.json"); 
const createDataBase = require('../scripts/createDataBase');

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile)); 

app.use(router);

app.listen(port, () => {
    console.log("Nosso servidor está rodando na porta", port);
});

createDataBase();

