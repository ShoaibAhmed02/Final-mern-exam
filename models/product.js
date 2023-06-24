// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
const connectionString = "mongodb://127.0.0.1:27017/Recipes";

const mongoose = require("mongoose");
mongoose.connect(connectionString);

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  description: String,
  ingredients: String,
  description: String,
  
});

module.exports = mongoose.model("item", ProductSchema);






app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});