const router = require('express').Router();
const sampleController = require('../../controllers/sampleController');

router.route('/')
  .get(sampleController.findAll);

module.exports = router;
