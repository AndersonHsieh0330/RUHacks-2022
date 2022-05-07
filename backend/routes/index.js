const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('Successful test request');
});






module.exports = router;