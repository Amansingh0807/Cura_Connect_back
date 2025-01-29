import mongoose from "mongoose";
import validator from "validator";
const recordSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true },
    name: String,
    age: Number,
    dob: String,
    height: Number,
    weight: Number,
    bmi: String,
    bloodGroup: String,
    medicines: [{ name: String, dosage: String }],
    files: [String],
  });

export const Record = mongoose.model("Record", recordSchema);