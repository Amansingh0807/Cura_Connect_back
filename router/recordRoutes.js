import express from "express";
import { getRecords, createRecord } from "../controller/recordController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/get", authMiddleware, getRecords);
router.post("/post", authMiddleware, createRecord);

export default router;

