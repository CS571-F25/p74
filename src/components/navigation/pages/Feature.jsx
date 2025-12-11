import { Card } from "react-bootstrap";
import { getNewestRecipe } from "../../../data/recipes";

export default function Feature() {
    const recipe = getNewestRecipe();

    // Safety check (usually unnecessary since you start with placeholder recipes)
    if (!recipe) {
        return <h1>No recipes found.</h1>;
    }

    return (
        <div>
            <h1>Featured Recipe</h1>
            <h2>Most Recently Added</h2>

            <Card className="p-3 mt-3">
                <h2>{recipe.name}</h2>
                <p><strong>Category:</strong> {recipe.category}</p>
                <p><strong>Date Created:</strong> {recipe.created}</p>
                
                <h5 className="mt-3">Recipe</h5>
                <p style={{ whiteSpace: "pre-wrap" }}>
                    {recipe.text}
                </p>
            </Card>
        </div>
    );
}
