let recipes = [
    {
        id: 0,
        name: "Soup",
        category: "Dinner",
        created: "2005-11-03",
        ingredients: [
            { amount: "2 cups", item: "Water" },
            { amount: "1 cup", item: "Vegetables" }
        ],
        directions: ["Boil water.", "Add veggies.", "Stir."],
        notes: "Good on cold days.",
        text: "Boil water. Add veggies. Stir.",   // optional legacy field
    },
    {
        id: 1,
        name: "Bread",
        category: "Baking",
        created: "2006-04-07",
        ingredients: [
            { amount: "2 cups", item: "Flour" },
            { amount: "1 cup", item: "Water" }
        ],
        directions: ["Mix flour and water.", "Bake."],
        notes: "",
        text: "Mix flour and water. Bake.", // optional legacy field
    }
];

// Return all recipes
export function getRecipes() {
    return recipes;
}

// Return one recipe by ID
export function getRecipeById(id) {
    id = Number(id);
    return recipes.find(r => r.id === id);
}

// Add a new recipe
export function addRecipe({ 
    name, 
    category,
    ingredients = [],
    directions = [],
    notes = "",
}) {
    const newRecipe = {
        id: recipes.length > 0 ? recipes[recipes.length - 1].id + 1 : 0,
        name,
        category,
        created: new Date().toISOString().slice(0, 10),
        ingredients,
        directions,
        notes,
    };

    recipes = [...recipes, newRecipe];
    return newRecipe;
}

// Get most recently added recipe
export function getNewestRecipe() {
    if (recipes.length === 0) return null;
    return recipes[recipes.length - 1];
}
