// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled


//created the connections with mongodb and created the model 
const connectionString = "mongodb://127.0.0.1:27017/Recipes";

const mongoose = require("mongoose");
mongoose.connect(connectionString);

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  description: String,
  ingredients: String,
  instructions: String,
});

module.exports = mongoose.model("item", ProductSchema);
