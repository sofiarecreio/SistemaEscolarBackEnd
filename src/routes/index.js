
const Router = require('express');

const turmasRoutes = require("./turmas.routes");

const userRoutes = require('./user.routes');

const router = Router();

router.use('/users', userRoutes);

router.use("/api/turmas", turmasRoutes);

module.exports = router;