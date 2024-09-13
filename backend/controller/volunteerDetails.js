const volunteerModel = require("../models/volunteer");
const multer = require('multer');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Add timestamp for unique filenames
  }
});

// Configure multer to handle the specific fields
const upload = multer({ storage }).fields([
  { name: 'aadharImage', maxCount: 1 },
  { name: 'panImage', maxCount: 1 }
]);

async function volunteerDetailsController(req, res) {
  try {
    console.log("Files received:", req.files);  // Log files
    console.log("Body received:", req.body);    // Log body

    if (!req.files || !req.files.aadharImage || !req.files.panImage) {
      return res.status(400).json({
        message: "Missing required file(s)",
        success: false,
        error: true
      });
    }

    const volunteerData = req.body;

    const newVolunteer = new volunteerModel({
      ...volunteerData,
      aadharCardImage: req.files.aadharImage[0].filename,  // Accessing file names
      panCardImage: req.files.panImage[0].filename
    });

    await newVolunteer.save();
    console.log("tttttttttttttt")
    res.status(200).json({
      message: "Form submitted successfully",
      success: true,
      error: false,
      data: newVolunteer
    });
  

  } catch (err) {
    console.log("Error:", err.message);
    res.status(500).json({
      message: "Details submitting failed",
      success: false,
      error: true
    });
  }
}

module.exports = {
  volunteerDetailsController,
  upload // Exporting the multer middleware to use in routes
};
