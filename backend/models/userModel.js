var mongoose = require("mongoose")

// Only connect if not already connected
if (mongoose.connection.readyState === 0) {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is not defined in environment variables")
    console.error("Please create a .env file with MONGODB_URI=mongodb://localhost:27017/blogapp")
    process.exit(1)
  }

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB successfully")
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error)
      process.exit(1)
    })
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel
