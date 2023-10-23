const express = require('express');
const axios = require('axios');
const cors = require("cors");
const helmet = require("helmet");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());
app.use(helmet());

router.get('/html/:url', async (req, res) => {
    const url = decodeURIComponent(req.params.url);

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.send(error);
    }
});

router.get('/status/:url', async (req, res) => {
    const url = decodeURIComponent(req.params.url);

    try {
        const response = await axios.get(url);
        res.json(response.status);
    } catch (error) {
        res.send(error);
    }
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
