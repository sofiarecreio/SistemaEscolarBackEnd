const Router = require('express');
const router = Router();

const usuarioRoute = require('./usuario.router');

router.use('/usuario', usuarioRoute);

module.exports = router;