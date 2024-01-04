import express from "express";
import { askGemini } from "../controllers/geminiController.js";
const geminiRouter = express.Router();

//private
geminiRouter.post("/ask",askGemini);

export default geminiRouter;