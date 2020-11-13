require('../dbConnect/connect');
const router = require('express').Router();

// get all contacts
router.route('/test').get((req, res) => {
    res.send('Contaz API is working perfectly ...');
});

module.exports = router;