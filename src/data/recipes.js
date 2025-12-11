const STORAGE_KEY = "recipes-data";

// Default recipes shown the first time (or if storage is empty)
const defaultRecipes = [
    {
        id: 0,
        name: "Scotcheroos",
        builtIn: true,
        category: "Dessert",
        created: "2023-01-04",
        notes: "Stoltz Family Cookbook",
        imageData: import.meta.env.BASE_URL + "images/scotcheroos.jpeg",
        ingredients: [],
        directions: [],
        url: ""
    },
    {
        id: 1,
        name: "Blueberry Muffins",
        builtIn: true,
        category: "Baking",
        created: "2024-07-06",
        notes: "Jordan Marsh’s Blueberry Muffins on NYT Cooking — may need to log in",
        url: "https://cooking.nytimes.com/recipes/2868-jordan-marshs-blueberry-muffins",
        ingredients: [],
        directions: [],
        imageData: ""
    },
    {
        id: 2,
        name: "Chocolate Mug Cake",
        builtIn: true,
        category: "Dessert",
        created: "2025-10-04",
        notes: "Can top with whipped cream or vanilla ice cream!",
        ingredients: [
            { amount: "4 tbsp", item: "Flour" },
            { amount: "3 tbsp", item: "Sugar" },
            { amount: "2 tbsp", item: "Cocoa powder" },
            { amount: "1/8 tsp", item: "Baking soda" },
            { amount: "Pinch", item: "Salt" },
            { amount: "3 tbsp", item: "Milk" },
            { amount: "2 tbsp", item: "Canola oil" },
            { amount: "To taste", item: "Vanilla extract" }
        ],
        directions: [
            "Combine dry ingredients in a mug and stir with a fork.",
            "Add wet ingredients and stir well so no dry ingredients remain at the bottom.",
            "Microwave for 1 minute, adding 20-second intervals until cooked to your liking."
        ],
        url: "",
        imageData: ""
    }
];

function loadRecipes() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) {
            return defaultRecipes;
        }
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
            return parsed;
        }
        return defaultRecipes;
    } catch (err) {
        console.error("Error loading recipes from localStorage:", err);
        return defaultRecipes;
    }
}

function saveRecipes(recipesToSave) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recipesToSave));
    } catch (err) {
        console.error("Error saving recipes to localStorage:", err);
    }
}

// In-memory copy initialized from storage or defaults
let recipes = loadRecipes();

// ----- public functions -----

// Return all recipes
export function getRecipes() {
    return recipes;
}

// Return one recipe by ID
export function getRecipeById(id) {
    const numId = Number(id);
    return recipes.find(r => r.id === numId);
}

// Add a new recipe
export function addRecipe({
    name,
    category,
    ingredients = [],
    directions = [],
    notes = "",
    url = "",
    imageData = ""
}) {
    const newRecipe = {
        id: recipes.length > 0 ? recipes[recipes.length - 1].id + 1 : 0,
        name,
        category,
        created: new Date().toISOString().slice(0, 10),
        ingredients,
        directions,
        notes,
        url,
        imageData
    };

    recipes = [...recipes, newRecipe];
    saveRecipes(recipes);

    return newRecipe;
}


export function deleteRecipe(id) {
    const numId = Number(id);

    // Do NOT delete built-in recipes
    const recipe = recipes.find(r => r.id === numId);
    if (recipe?.builtIn) {
        console.warn("Cannot delete built-in recipe:", recipe.name);
        return;
    }

    recipes = recipes.filter(r => r.id !== numId);
    saveRecipes(recipes);
}


// Most recently added recipe
export function getNewestRecipe() {
    if (recipes.length === 0) return null;
    return recipes[recipes.length - 1];
}

// (Optional) helper you can call in console to wipe everything
export function _resetRecipesToDefaults() {
    recipes = defaultRecipes;
    saveRecipes(recipes);
}