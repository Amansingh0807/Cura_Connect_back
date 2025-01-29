import express from "express";
import  handleChatRequest  from "../controller/chatController.js";


const router = express.Router();

// Route to handle chat requests
router.post("/send", handleChatRequest);

export default router;
