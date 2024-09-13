const express = require('express');
const userSignInController = require('../controller/SignInController');
const contactUsController = require('../controller/contactController');
const getContactDetails = require('../controller/contactGet');
const { volunteerDetailsController, upload } = require('../controller/volunteerDetails');
// const { volunteerDetailsController, upload } = require('../controller/volunteerDetails');

const router = express.Router();
const multer = require('multer');
const { default: mongoose } = require('mongoose');
// const signInController = require('../controllers/SignInController');

// storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });
// storage

// POST route for signing in

router.post('/signin', userSignInController);
<<<<<<< HEAD
router.post('/contact', contactUsController);
router.get('/get-contact', getContactDetails);

require('../models/donor');

const donerschema = mongoose.model('donorModel');

router.post('/upload-files', upload.single('panCard'), async (req, res) => {
  const { name, phone, email } = req.body;
  const filename = req.file;

  console.log(req.file, req.body);
  const panCard = req.file.filename;
  try {
    await donerschema.create({
      name,
      phone,
      email,
      panCard: filename.path,
    });
    res.send({ status: 'ok' });
  } catch (error) {
    res.json({ status: error });
  }
});
=======
router.post("/contact",contactUsController)
router.post('/volunteer', upload, volunteerDetailsController);
router.get("/get-contact",getContactDetails )
>>>>>>> aac02b08b648bf4f06814899840309cae0220aed

module.exports = router;
