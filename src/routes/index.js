const Router = require("express");

const turmasRoutes = require("./turmas.routes");

const router = Router();

router.use("/api/turmas", turmasRoutes);

module.exports = router