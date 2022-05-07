const mongoose = require('mongoose');
require('dotenv').config();

const conn = process.env.DB_STRING;

const connection = mongoose.createConnection(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Creates simple schema for a singular cooking method.  

const CookingMethodSchema = new mongoose.Schema({
    method_name: String,
    ingredients:String,
})
const RecipeSchema = new mongoose.Schema({
    cooking_methods: [{type:CookingMethodSchema}],
});


const Recipe = connection.model('Recipe', RecipeSchema);

// Expose the connection
module.exports = connection;