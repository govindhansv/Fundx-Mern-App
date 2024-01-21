const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    
    firstname: {
      type: String,
      required: [true, "Please add the firstname"],
    },
    lastname: {
      type: String,
      required: [true, "Please add the lastname"],
    },
    email: {
      type: String,
      required: [true, "Please add the email"],
      unique: [true, "email already registerd"],
    },
    password: {
      type: String,
      required: [true, "Please add the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);