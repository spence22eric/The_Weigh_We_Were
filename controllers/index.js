const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const selectionRoutes = require('./selection-routes.js');



router.use('/selection', selectionRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;