const express = require('express');
const router = express.Router();
const signInController = require('../controllers/SignInController');

// POST route for signing in
router.post('/signin', signInController);

module.exports = router;
