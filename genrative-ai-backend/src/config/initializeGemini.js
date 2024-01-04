import { GoogleGenerativeAI } from '@google/generative-ai';
import {generationConfig,safetySettings} from '../constants/constants.js';
import dotnev from 'dotenv'

dotnev.config();

const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.API_KEY;


export async function initialise(){
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
        model: MODEL_NAME
    });
    
    const chat = model.startChat({
        generationConfig,
        safetySettings,
    });
    return await chat;
}
