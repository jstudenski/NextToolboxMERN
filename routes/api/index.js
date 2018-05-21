// const router = require('express').Router();
// const sampleRoutes = require('./samples');

// router.use('/samples', sampleRoutes);

// module.exports = router;


const router = require('express').Router();

const sampleRoutes = require('./sample');

router.use('/samples', sampleRoutes);

module.exports = router;