import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [2, "First Name Must Contain At Least 2 Characters!"],
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone Number Must Contain Exact 11 Digits!"],
    maxLength: [10, "Phone Number Must Contain Exact 11 Digits!"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "Message Must Contain At Least 10 Characters!"],
  },
});

export const Message = mongoose.model("Message", messageSchema);