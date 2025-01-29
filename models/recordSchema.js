import mongoose from "mongoose";
import validator from "validator";
const recordSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true },
    name: {type: String,
      reqyuired : true
    },
    age: 
    {type : Number,
      required : true
    },
    dob: String,
    height:  {type : Number,
      required : true
    },
    weight:   {type : Number,
      required : true
    },
    bmi: { type : String,
      reuired : true
    },
    bloodGroup: { type : String,
      reuired : true
    },
    medicines: [{ name: String, dosage: String }],
    files: [String],
  });

export const Record = mongoose.model("Record", recordSchema);