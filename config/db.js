const mongoose = require('mongoose');

const password = "XXWBmVylJM9873ps";
const username = "chow";
const dbname = "chow";
const MONGO_URI = `mongodb+srv://${username}:${password}@cluster0-x8poy.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const InitDb = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true    
    });
    console.log("Connected to DB successfully!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitDb;