const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    // await mongoose.connect(db, {
    await mongoose.connect("mongodb://127.0.0.1:27017/calendar", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
