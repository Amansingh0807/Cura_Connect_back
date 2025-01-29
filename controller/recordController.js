import { Record } from "../models/recordSchema.js";

export const getRecords = async (req, res) => {
  try {
    const records = await Record.find({ userId: req.user.id });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: "Error fetching records" });
  }
};

export const createRecord = async (req, res) => {
  const { name, age, dob, height, weight, bmi, bloodGroup, medicines, files } = req.body;

  try {
    const newRecord = new Record({
      userId: req.user.id,
      name,
      age,
      dob,
      height,
      weight,
      bmi,
      bloodGroup,
      medicines,
      files,
    });

    await newRecord.save();
    res.json(newRecord);
  } catch (error) {
    res.status(500).json({ message: "Error saving record" });
  }
};
