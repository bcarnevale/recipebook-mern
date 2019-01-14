const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = new express();
const port = process.env.PORT || 5000;

const Recipe = {
    title: "Pancakes",
    prepTime: 5,
    cookTime: 10,
    difficulty: "easy",
    mealType: "breakfast",
	serves: 4,
	cuisine: "French",
    ingredients: [
        {
            quantity: "2",
            name: "eggs"
        },
        {
            quantity: "2 cups",
            name: "flour"
        },
        {
            quantity: "1/2 cup",
            name: "sugar"
        },
        {
            quantity: "1 cup",
            name: "milk"
        },
        {
            quantity: "a pinch",
            name: "salt"
        }
    ],
    method: [
        {
            step: 1,
            description: "Put all ingredients in a bowl and whisk until smooth texture."
        },
        {
            step: 2,
            description: "Add butter to the frying pan."
        },
        {
            step: 3,
            description: "Pour a big dollop of mixture onto the fry pan."
        },
        {
            step: 4,
            description: "Flip when bubbles pop."
        },
        {
            step: 5,
            description: "Serve in a stack with some butter and drizzle with maple syrup. Enjoy!"
        },
    ]
}

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})