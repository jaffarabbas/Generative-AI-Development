import geminiRouter from "../api/v1/routes/gemeiniRoutes.js";

const routeConfig = [
  {
    version: 'v1',
    routes: [
      { path: '/gemini-app/v1/api/ask-gemini', router: geminiRouter },
    ]
  },
];

export default routeConfig;
