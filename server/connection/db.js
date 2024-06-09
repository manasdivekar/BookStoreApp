const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
dotenv.config();

const mongoDB = mongoose.connect(process.env.MONGO_URL).then(() => console.log("MongoDb Connected"))
  


