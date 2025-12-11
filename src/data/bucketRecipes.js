const BASE_URL = "https://cs571api.cs.wisc.edu/rest/f25/bucket";
const COLLECTION = "recipes";       // <- you can rename this if you want
const BUCKET_ID = "PASTE_YOUR_X-CS571-ID_HERE"; // from Postman header

// Helper to build headers
function getHeaders() {
  return {
    "Content-Type": "application/json",
    "X-CS571-ID": "bid_c55e84aef148a084ef7a6dfe381e6e628c63c9138d668a44bdbf23e62acd52f9",
  };
}

// ---- READ ALL RECIPES ----
export async function fetchRecipes() {
  const res = await fetch(`${BASE_URL}/${COLLECTION}`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!res.ok) {
    // If collection doesn't exist yet, just return empty array
    // or you can fall back to some default recipes.
    return [];
  }

  // We will store { recipes: [...] } in the collection.
  const data = await res.json();
  return data.recipes ?? [];
}

// ---- WRITE FULL LIST (helper) ----
async function saveRecipes(recipes) {
  // Uses the "Update Collection" (PUT) behavior.
  // We store one JSON object: { recipes: [...] } for this collection.
  const res = await fetch(`${BASE_URL}/${COLLECTION}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify({ recipes }),
  });

  if (!res.ok) {
    console.error("Failed to save recipes", await res.text());
  }
}

// ---- ADD ONE RECIPE ----
export async function addRecipeRemote({ name, category, ingredients = [], directions = [], notes = "" }) {
  // 1. Load current recipes from bucket
  const recipes = await fetchRecipes();

  // 2. Build new recipe
  const newRecipe = {
    id: recipes.length > 0 ? recipes[recipes.length - 1].id + 1 : 0,
    name,
    category,
    created: new Date().toISOString().slice(0, 10),
    ingredients,
    directions,
    notes,
  };

  const updated = [...recipes, newRecipe];

  // 3. Save whole updated list back to the bucket
  await saveRecipes(updated);

  return newRecipe;
}

// ---- GET ONE RECIPE BY ID ----
export async function fetchRecipeById(id) {
  const recipes = await fetchRecipes();
  const numId = Number(id);
  return recipes.find(r => r.id === numId) || null;
}

// ---- GET NEWEST RECIPE ----
export async function fetchNewestRecipe() {
  const recipes = await fetchRecipes();
  if (recipes.length === 0) return null;
  return recipes[recipes.length - 1];
}