import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routeConfig from '../src/config/routeConfig.js';
dotenv.config();

const app = express();
const port = process.env.PORT;
const API_KEY = process.env.API_KEY;

//CORS 
app.use(cors());
// Connect to gemini

//JSON
app.use(express.json());

//routes confriguation
const version = process.env.VERSION;
const selectedVersion = routeConfig.find(config => config.version === version);
//confriguation for routes according to version
if (selectedVersion) {
    console.log(`Using ${selectedVersion.version} routes`);
    selectedVersion.routes.forEach(route => {
      const router = route.router; 
      app.use(route.path, router);
    });
} else {
    throw new Error('Invalid API version');
}

//starting server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

