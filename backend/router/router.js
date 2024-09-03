const express = require('express');
const userSignInController = require('../controller/SignInController');
const contactUsController = require('../controller/contactController');
const getContactDetails = require('../controller/contactGet');
const router = express.Router();
// const signInController = require('../controllers/SignInController');

// POST route for signing in

router.post('/signin', userSignInController);
router.post("/contact",contactUsController)
router.get("/get-contact",getContactDetails )

module.exports = router;
