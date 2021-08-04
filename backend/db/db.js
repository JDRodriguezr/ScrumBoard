const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CONNECTION, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: OK");
  } catch (error) {
      console.log("Error connecting to MongoDB: ", error);
      throw new Error("Error connecting to MongoDB");
  }
};
module.exports = {dbConnection}
