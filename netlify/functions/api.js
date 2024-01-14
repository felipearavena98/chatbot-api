// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

const express = require("express");
const  serverless = require("serverless-http");
const cors = require('cors');
const apiRoute = require('./src/routes/routes');

const app = express();

const corsOptions = {
    origin: 'https://graph.facebook.com',
  };
  
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', apiRoute); 

// const api = express();

// const router = Router();
// router.get("/hello", (req, res) => res.send("Hello World!"));

// api.use("/api/", router);

export const handler = serverless(app);
