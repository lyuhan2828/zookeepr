const router = require('express').Router();

router.use(require('./zookeeperRoutes'));

router.use(require('./animalRoutes'));

module.exports = router;