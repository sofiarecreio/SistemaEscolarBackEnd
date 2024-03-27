
const Router = require('express');

const turmasRoutes = require("./turmas.routes");

const userRoutes = require('./usuario.router');

const alunosRoutes = require('./alunos.routes');


const professorRoutes = require('./professor.routes')

const coordenadorRoutes = require('./coordenador.routes');

const router = Router();

router.use('/users', userRoutes);

router.use("/turmas", turmasRoutes);

router.use("/alunos", alunosRoutes);

router.use("/professores", professorRoutes)

router.use("/coordenador", coordenadorRoutes)

module.exports = router;