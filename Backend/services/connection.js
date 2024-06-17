const mongoose = require("mongoose");
const config = require('config');
const tool = require("./tool");

// Database connection
mongoose.Promise = global.Promise;

const options = {
  autoIndex: false,
  reconnectTries: 100,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useFindAndModify: false,  // Set to false to suppress deprecation warning
  useUnifiedTopology: true  // Use the new Server Discovery and Monitoring engine
};

mongoose.connect(config.get('mongodb.connectionString'), options)
  .then(() => {
    console.log('\x1b[32m', "Connected successfully to LocalHost MongoDatabase");
     //tool.createadmin();
  })
  .catch((err) => {
    console.error("Error connecting to Mongo Database", err);
  });

module.exports = mongoose;
