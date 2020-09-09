const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const initDb = require('./config/db');


initDb();
const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/****
 * Routing
 */
const userRoutes = require('./routes/userRoutes');

app.use('api/v1/user',userRoutes);
app.use('api/v1/', (req, res) => res.status(200).json({
  status: true,
  message: 'Chow is working!',
}));

module.exports = app;
