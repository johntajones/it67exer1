const mongoose = require("mongoose")

try {
  mongoose.connect("mongodb://localhost/exer2")
} catch (error) {
  console.log("Database error")
  console.log(error)
}
