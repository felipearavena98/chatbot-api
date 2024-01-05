// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

const express = require("express");
const  serverless = require("serverless-http");

const apiRoute = require('./src/routes/routes');

const app = express();

app.use(express.json());
app.use('/api', apiRoute); 

// const api = express();

// const router = Router();
// router.get("/hello", (req, res) => res.send("Hello World!"));

// api.use("/api/", router);

export const handler = serverless(app);
