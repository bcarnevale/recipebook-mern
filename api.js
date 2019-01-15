const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = new express();
const port = process.env.PORT || 5000;

app.use(express.json())

const recipe = [
    {
        title: "pancakes",
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
                description: "Put all ingredients in a bowl and whisk until smooth texture."
            },
            {
                description: "Add butter to the frying pan."
            },
            {
                description: "Pour a big dollop of mixture onto the fry pan."
            },
            {
                description: "Flip when bubbles pop."
            },
            {
                description: "Serve in a stack with some butter and drizzle with maple syrup. Enjoy!"
            },
        ]
    }
]

app.get('/', (req, res) => {
    res.send(recipe)
})

app.get('/:title', (req, res) => {
    const { title } = req.params
    const rec = recipe.find(r => r.title === title)
    if(!rec) {
        return res.status(404).send("Recipe does not exist")
    }
    res.send(rec)
})

app.post('/', (req, res) => {
    const { title, prepTime, cookTime, difficulty, mealType, serves, cuisine, ingredients, method } = req.body
    const rec = { title, prepTime, cookTime, difficulty, mealType, serves, cuisine, ingredients, method };
    recipe.push(rec);
    return res.send(rec);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})