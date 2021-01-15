/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- Title (a string), 
- Servings (a number), and 
- Ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

You should write and log at least 5 recipes

**/

let recipes = [

        {
          title: "Vegetable Soup",
          servings: 7,
          ingredients: ["water", "onions", "carrots", "potatoes", "garlic", "green beans", "celery"],
        },
        {
          title: "Coffee",
          servings: 3,
          ingredients: ["water", "coffee beans", "milk"],
        },
        {
          title: "Pizza",
          servings: 6,
          ingredients: ["dough", "tomato sauce","cheese", "chicken", "pineapple toppings", "barbecue sauce"],
        },
        {
          title: "ice cream",
          servings: 4,
          ingredients: ["milk protein", "ice", "water", "sugar"],
        },
        {
          title: "Tea",
          servings: 3,
          ingredients: ["teabag", "water", "milk"],
        },
        ];

        let food = recipes.forEach((value) => {
            console.log(`${value.title} ${value.servings} ${value.ingredients}`); 
        }) 
      














