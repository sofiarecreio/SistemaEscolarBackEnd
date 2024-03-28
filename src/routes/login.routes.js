const express = require("express");

const loginRoutes = express.Router();
const loginController = require("../controllers/loginControllers.js");


const checkUserExists = require("../middleware/checkLoginExistsMiddleware")







loginRoutes.get("/", checkUserExists, (req,res)=> loginController.login(req,res));




module.exports = loginRoutes;