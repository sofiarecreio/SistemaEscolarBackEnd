const Router = require('express');

const turmasRoutes = require("./turmas.routes");

const userRoutes = require('./usuario.router');

const alunosRoutes = require('./alunos.routes');

const avaliacoesRoutes = require("./avaliacoes.routes");

const coordenadorRoutes = require('./coordenador.routes');

const router = Router();

router.use('/users', userRoutes);

router.use("/turmas", turmasRoutes);

router.use("/alunos", alunosRoutes);

router.use("/avaliacoes", avaliacoesRoutes);

router.use("/coordenador", coordenadorRoutes);

module.exports = router;