const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/userRoutes');
const initDb = require('./config/db');


initDb();
const app = express();
const baseUrl = '/api/v1/';

app.use(cors());
app.use(express.json({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(`${baseUrl}signup`,userRoute);
app.use(baseUrl, (req, res) => res.status(200).json({
  status: true,
  message: 'Chow is working!',
}));

/**
 * Router middleware
 * Route - /signup
 * Method - Post
 */


module.exports = app;
