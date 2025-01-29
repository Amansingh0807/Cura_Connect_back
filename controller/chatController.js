import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: './config/config.env' });

const apiKey = process.env.GOOGLE_API_KEY;

// Ensure that API Key is loaded correctly
if (!apiKey) {
  console.error('API key is missing!');
  throw new Error('API key is not set in the environment');
}

const genAI = new GoogleGenerativeAI({ apiKey });

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp", // Ensure this model name is correct
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const handleChatRequest = async (req, res) => {
  const { input } = req.body;

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(input);
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error("Error in Gemini API:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      response: error.response ? error.response.data : null,
    });
    res.status(500).json({ error: "Failed to get response from Gemini API", details: error.message });
  }
};

export default handleChatRequest;