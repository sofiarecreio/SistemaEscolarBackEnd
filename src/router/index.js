const Router = require('express');
const router = Router();

const usuarioRouter = require("./usuario.router")

router.use("/usuario", usuarioRouter)

module.exports = router;