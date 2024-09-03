const express = require('express');
const userSignInController = require('../controller/SignInController');
const router = express.Router();
// const signInController = require('../controllers/SignInController');

// POST route for signing in

router.post('/signin', userSignInController);

module.exports = router;
