const express = require('express');
const router = express.Router();

//Register
router.get('/register', (req, res, next) => {
    res.send('<h2>REGISTER</h2>');
});

//Authenticate
router.get('/authenticate', (req, res, next) => {
    res.send('<h2>Authenticate</h2>');
});

//Profile
router.get('/profile', (req, res, next) => {
    res.send('<h2>PROFILE</h2>');
});

//ValidateS
router.get('/validate', (req, res, next) => {
    res.send('<h2>VALIDATE</h2>');
});


module.exports = router;