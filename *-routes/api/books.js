const router = require("express").Router();
const sampleController = require("../../controllers/sample.controller");

// Matches with "/api/books"
router.route("/")
  .get(sampleController.findAll)
  .post(sampleController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(sampleController.findById)
  .put(sampleController.update)
  .delete(sampleController.remove);

module.exports = router;
