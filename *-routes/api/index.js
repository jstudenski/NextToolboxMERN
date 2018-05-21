const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/samples", bookRoutes);

module.exports = router;
