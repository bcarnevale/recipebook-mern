const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema ({
    id: Number,
    title: String,
    prepTime: Number,
    cookTime: Number,
    difficulty: String,
    type: String,
    serves: Number,
    cuisine: String,
    ingredients: [{
      quantity: String,
      name: String
    }],
    method: [{
      description: String
    }]
})

module.exports = mongoose.model('Recipe', RecipeSchema)