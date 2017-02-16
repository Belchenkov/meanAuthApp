const express = require('express');
const router = express.Router();

//Register
router.get('/register', (req, res, next) => {
    res.send('<h2>REGISTER</h2>');
});

module.exports = router;