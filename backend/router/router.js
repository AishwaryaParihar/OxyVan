const express = require('express');
const userSignInController = require('../controller/SignInController');
const contactUsController = require('../controller/contactController');
const getContactDetails = require('../controller/contactGet');

const router = express.Router();
const multer = require('multer');
const { default: mongoose } = require('mongoose');
const getDonnerController = require('../controller/donorGet');
const volunteerDetails = require('../controller/volunteerDetails');
const getUserRecord = require('../controller/UserRecordController');
const postUserRecord = require('../controller/UserRecordController');
const {
  getVolunteer,
  updateVolunteer,
  deleteVolunteer,
} = require('../controller/getVolunteer');
// const getVolunteer = require('../controller/getVolunteer');
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
router.get('/get-userRecord',getUserRecord);
router.post('/post-userRecord',postUserRecord)

require('../models/donor');

const donerschema = mongoose.model('donorModel');

router.post('/upload-files', upload.single('panCard'), async (req, res) => {
  const {
    name,
    address,
    phone,
    email,
    donationAmount,
    donationType,
    paymentMethod,
    paymentFrequency,
    cardNumber,
    expiryDate,
    chequeNumber,
    bankDetails,
    donationPurpose,
    anonymous,
    updates,
  } = req.body;

  console.log(req.file, req.body);
  const panCard = req.file.filename;
  try {
    await donerschema.create({
      name,
      address,
      phone,
      email,
      donationAmount,
      donationType,
      paymentMethod,
      paymentFrequency,
      cardNumber: paymentMethod === 'online' ? cardNumber : null,
      expiryDate: paymentMethod === 'online' ? expiryDate : null,
      chequeNumber: paymentMethod === 'cheque' ? chequeNumber : null,
      bankDetails: paymentMethod === 'bank' ? bankDetails : null,
      donationPurpose,
      anonymous,
      updates,
      panCard: panCard,
    });
    res.send({ status: 'ok' });
  } catch (error) {
    res.json({ status: error });
  }
});

router.get('/doner-get', getDonnerController);

// voluntieer oprations
router.post(
  '/volunteers',
  upload.fields([
    { name: 'aadharImage', maxCount: 1 },
    { name: 'panCardImage', maxCount: 1 },
    { name: 'passbookImage', maxCount: 1 },
  ]),
  volunteerDetails
);
router.get('/get-Volunteers', getVolunteer);
router.put('/update-volunteer/:id', updateVolunteer);
router.delete('/delete-Volunteers/:id', deleteVolunteer);

module.exports = router;
