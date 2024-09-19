const express = require('express');
const userSignInController = require('../controller/SignInController');
const contactUsController = require('../controller/contactController');
const getContactDetails = require('../controller/contactGet');


const router = express.Router();
const multer = require('multer');
const { default: mongoose } = require('mongoose');
const getDonnerController = require('../controller/donorGet');
const volunteerDetails = require('../controller/volunteerDetails');
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
      panCard: filename,
    });
    res.send({ status: 'ok' });
  } catch (error) {
    res.json({ status: error });
  }
});

router.get("/doner-get", getDonnerController)

// voluntieer post 
router.post('/volunteers', upload.fields([
  { name: 'aadharImage', maxCount: 1 },
  { name: 'panCardImage', maxCount: 1 },
  { name: 'passbookImage', maxCount: 1 },
]), volunteerDetails);


module.exports = router;
