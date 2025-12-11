import { Card } from "react-bootstrap";
import { getNewestRecipe } from "../../../data/recipes";

export default function Feature() {
    const recipe = getNewestRecipe();

    if (!recipe) {
        return <h1>No recipes found.</h1>;
    }

    const isImageRecipe = !!recipe.imageData;
    const isUrlRecipe = !!recipe.url && !isImageRecipe;

    return (
        <div>
            <h1>Featured Recipe</h1>
            <h2>The newest entry....</h2>

            <Card className="p-3 mt-3">
                <h2>{recipe.name}</h2>
                <p><strong>Category:</strong> {recipe.category}</p>
                <p><strong>Date Created:</strong> {recipe.created}</p>

                {isImageRecipe ? (
                    <>
                        <h4 className="mt-3">Recipe Image</h4>
                        <img
                            src={recipe.imageData}
                            alt={recipe.name}
                            style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: "8px" }}
                        />

                        {recipe.notes && (
                            <>
                                <h4 className="mt-3">Notes</h4>
                                <p style={{ whiteSpace: "pre-wrap" }}>
                                    {recipe.notes}
                                </p>
                            </>
                        )}
                    </>
                ) : isUrlRecipe ? (
                    <>
                        <h4 className="mt-3">Recipe Link</h4>
                        <p>
                            <a href={recipe.url} target="_blank" rel="noreferrer">
                                {recipe.url}
                            </a>
                        </p>

                        {recipe.notes && (
                            <>
                                <h4 className="mt-3">Notes</h4>
                                <p style={{ whiteSpace: "pre-wrap" }}>
                                    {recipe.notes}
                                </p>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        {recipe.ingredients && recipe.ingredients.length > 0 && (
                            <>
                                <h4 className="mt-3">Ingredients</h4>
                                <ul>
                                    {recipe.ingredients.map((ing, idx) => {
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

                        {recipe.directions && recipe.directions.length > 0 && (
                            <>
                                <h4 className="mt-3">Directions</h4>
                                <ol>
                                    {recipe.directions.map((step, idx) => (
                                        <li key={idx}>{step}</li>
                                    ))}
                                </ol>
                            </>
                        )}

                        {recipe.notes && (
                            <>
                                <h4 className="mt-3">Notes</h4>
                                <p style={{ whiteSpace: "pre-wrap" }}>
                                    {recipe.notes}
                                </p>
                            </>
                        )}
                    </>
                )}
            </Card>
        </div>
    );
}
