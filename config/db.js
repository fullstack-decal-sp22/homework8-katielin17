const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb://testuser:192.184.221.66/32/node-auth";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
