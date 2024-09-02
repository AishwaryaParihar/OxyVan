const mongoose = require("mongoose");

async function connectDB() {
  console.log("Connecting to DB...");
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
    throw err; // Ensure the error is thrown to handle it in the main file
  }
}

module.exports = connectDB;
