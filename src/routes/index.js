
const Router = require('express');

const turmasRoutes = require("./turmas.routes");

const userRoutes = require('./user.routes');

const alunosRoutes = require('./alunos.routes');

const professorRoutes = require('./professor.routes')

const router = Router();

router.use('/users', userRoutes);

router.use("/turmas", turmasRoutes);

router.use("/alunos", alunosRoutes);

router.use("/professores", professorRoutes)

module.exports = router;