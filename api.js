const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('./models/recipe')
const bodyParser = require('body-parser');

const app = new express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017');

mongoose.connection.on('connected', () => {
    console.log('connected to mongod')
});

mongoose.connection.on('error', () => {
    console.log('connected to mongod')
});

app.use(express.json())

// const recipe = [
//     {
//         id: 1,
//         title: "pancakes",
//         prepTime: 5,
//         cookTime: 10,
//         difficulty: "easy",
//         mealType: "breakfast",
//         serves: 4,
//         cuisine: "French",
//         ingredients: [
//             {
//                 quantity: "2",
//                 name: "eggs"
//             },
//             {
//                 quantity: "2 cups",
//                 name: "flour"
//             },
//             {
//                 quantity: "1/2 cup",
//                 name: "sugar"
//             },
//             {
//                 quantity: "1 cup",
//                 name: "milk"
//             },
//             {
//                 quantity: "a pinch",
//                 name: "salt"
//             }
//         ],
//         method: [
//             {
//                 description: "Put all ingredients in a bowl and whisk until smooth texture."
//             },
//             {
//                 description: "Add butter to the frying pan."
//             },
//             {
//                 description: "Pour a big dollop of mixture onto the fry pan."
//             },
//             {
//                 description: "Flip when bubbles pop."
//             },
//             {
//                 description: "Serve in a stack with some butter and drizzle with maple syrup. Enjoy!"
//             },
//         ]
//     }
// ]

app.get('/', (req, res) => {
    res.send(Recipe)
})

app.get('/:id', (req, res) => {
    const id = req.params._id
    Recipe.findOne({ id })
        .then(rec => res.send(rec))
})

app.post('/', (req, res) => {
    const { title, prepTime, cookTime, difficulty, mealType, serves, cuisine, ingredients, method } = req.body
    const rec = new Recipe({ title, prepTime, cookTime, difficulty, mealType, serves, cuisine, ingredients, method });
    rec.save()
        .then(doc => res.send(doc));
})

app.put('/:id', (req, res) => {
    const id = req.params._id
    const { title, prepTime, cookTime, difficulty, mealType, serves, cuisine, ingredients, method } = req.body
    Recipe.findOneAndUpdate(
        { id },
        { title, prepTime, cookTime, difficulty, mealType, serves, cuisine, ingredients, method },
        {
            new: true,
            runValidators: true
        }
    )
    .then(doc => res.send(doc));
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})