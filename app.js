const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const initDb = require('./config/db');

initDb();
const app = express();

/*** 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});*/

app.use(cors());
app.use(express.json({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Routing
 */
const userRoutes = require('./routes/userRoutes');

app.get('/api/v1/', (req, res) => res.status(200).json({
  status: true,
  message: 'Chow is working!',
}));

app.use('/api/v1/user', userRoutes);

module.exports = app;
