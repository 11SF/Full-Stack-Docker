const mongoose = require("mongoose");
// require("dotenv").config();

const username = "root";
const password = "example";
// const dbName = "Person";

// const mongo_url = 'mongodb://root:example@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
const mongo_url = `mongodb://${username}:${password}@localhost:27017/?authSource=admin`;
mongoose.Promise = global.Promise;
mongoose.connect(mongo_url, {useNewUrlParser: true}).then(
  () => {
    console.log("[success] : connected to the database ");
  },
  error => {
    console.log("[failed] task 2 " + mongo_url + " " + error);
    process.exit();
  }
);