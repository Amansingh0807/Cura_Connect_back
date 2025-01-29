import express from "express";
import cors from "cors";
import { config } from "dotenv";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
import chatRouter from "./router/chatRouter.js";

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], 
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

// Handle preflight requests
app.options("*", cors());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Debug CORS Headers
app.use((req, res, next) => {
  console.log("CORS Headers:", res.getHeaders());
  next();
});

app.use("/api/user", userRouter);
app.use("/api/message", messageRouter);
app.use("/api/appointment", appointmentRouter);
app.use("/api/chat", chatRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
