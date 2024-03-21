const mongoose = require("mongoose");
const mongoURI ="mongodb+srv://bakarbro123:k8HaDkxr4xxAoLqe@cluster0.ckmcwuj.mongodb.net/goshopmern?retryWrites=true&w=majority&appName=Cluster0";

const mongodb = async () => {
  try {
    await mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connect to mongodb");

    const fetched_data = await mongoose.connection.db.collection("shop_items");
    const data = await fetched_data.find({}).toArray();
    console.log(data);

    // console.log(fetched_data);
  } catch (err) {
    console.log("database not connected", err);
  }
};

module.exports = mongodb;
