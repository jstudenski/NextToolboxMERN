const router = require('express').Router();
const sampleRoutes = require('./sample');

router.use('/sample', sampleRoutes);

module.exports = router;
