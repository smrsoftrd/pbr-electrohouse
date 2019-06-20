const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const API_PORT = 4000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const router = express.Router();

app.listen(API_PORT,function() {
    console.log("Server is running up on Port:" + API_PORT);
});