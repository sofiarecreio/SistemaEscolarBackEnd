const Router = require('express');

const turmasRoutes = require("./turmas.routes");

const userRoutes = require('./user.routes');

const alunosRoutes = require('./alunos.routes');

const avaliacoesRoutes = require("./avaliacoes.routes");

const router = Router();

router.use('/users', userRoutes);

router.use("/turmas", turmasRoutes);

router.use("/alunos", alunosRoutes);

router.use("/avaliacoes", avaliacoesRoutes);

module.exports = router;