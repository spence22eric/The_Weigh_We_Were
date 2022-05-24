const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/selection', (req, res) => {
    res.render('selection');
});


module.exports = router;