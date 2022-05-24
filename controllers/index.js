const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const selectionRoutes = require('./selection-routes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/selection', selectionRoutes);

module.exports = router;