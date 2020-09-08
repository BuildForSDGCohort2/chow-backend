const mongoose = require('mongoose');

const password = 'XXWBmVylJM9873ps';
const username = 'chow';
const dbname = 'chow';
const MONGO_URI = `mongodb+srv://${username}:${password}@cluster0-x8poy.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const InitDb = async () => {
  await mongoose.connect(MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
        })
    .then(() => {
      // console.log('Connected to Database!');
    }).catch((error) => {
      // console.log('Failed to connect to DB!');
      // console.log(error);
      throw error;
    });
};

module.exports = InitDb;
