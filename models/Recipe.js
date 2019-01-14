const mongoose = require('mongoose');

const ReceipeSchema = new Schema ({
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
      step: Number,
      description: String
    }]
})

module.exports = mongoose.model('Recipe', ReceipeSchema)