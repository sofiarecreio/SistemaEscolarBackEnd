
const Router = require('express');

const turmasRoutes = require("./turmas.routes");

const userRoutes = require('./usuario.router');

const alunosRoutes = require('./alunos.routes');


const disciplinaRoutes = require('./disciplina.routes')

const professorRoutes = require('./professor.routes')

const coordenadorRoutes = require('./coordenador.routes');

const loginRoutes = require('./login.routes');

const router = Router();

router.use('/users', userRoutes);

router.use("/turmas", turmasRoutes);

router.use("/alunos", alunosRoutes);

router.use("/professores", professorRoutes)

router.use("/disciplinas", disciplinaRoutes)

router.use("/coordenador", coordenadorRoutes)

router.use("/login", loginRoutes)


module.exports = router;