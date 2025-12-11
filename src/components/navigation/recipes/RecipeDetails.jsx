import { useParams, useNavigate } from "react-router";
import { Card, Button } from "react-bootstrap";
import { getRecipeById } from "../../../data/recipes";

export default function RecipeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const recipe = getRecipeById(id);

    if (!recipe) {
        return (
            <div>
                <h1>Recipe Not Found</h1>
                <Button onClick={() => navigate("/contents")}>
                    Back to All Recipes
                </Button>
            </div>
        );
    }

    return (
        <div>
            <Button 
                className="mb-3"
                onClick={() => navigate("/contents")}
            >
                Back to All Recipes
            </Button>

            <Card className="p-4">

                {/* Header Info */}
                <h1>{recipe.name}</h1>
                <p><strong>Category:</strong> {recipe.category}</p>
                <p><strong>Date Created:</strong> {recipe.created}</p>

                {/* Ingredients */}
                {recipe.ingredients && recipe.ingredients.length > 0 && (
                    <>
                        <h4 className="mt-4">Ingredients</h4>
                        <ul>
                            {recipe.ingredients.map((ing, idx) => {
                                // Support both object and string just in case
                                if (typeof ing === "string") {
                                    return <li key={idx}>{ing}</li>;
                                } else {
                                    const amt = ing.amount?.trim();
                                    const item = ing.item?.trim();
                                    return (
                                        <li key={idx}>
                                            {amt ? `${amt} ` : ""}
                                            {item}
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </>
                )}

                {/* Directions */}
                {recipe.directions && recipe.directions.length > 0 && (
                    <>
                        <h4 className="mt-4">Directions</h4>
                        <ol>
                            {recipe.directions.map((step, idx) => (
                                <li key={idx}>{step}</li>
                            ))}
                        </ol>
                    </>
                )}

                {/* Notes Section */}
                <h4 className="mt-4">Notes</h4>
                <p style={{ whiteSpace: "pre-wrap" }}>
                    {recipe.notes ? recipe.notes : "No notes added."}
                </p>
            </Card>
        </div>
    );
}
