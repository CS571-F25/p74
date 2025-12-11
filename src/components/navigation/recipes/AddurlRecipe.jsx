import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { addRecipe } from "../../../data/recipes";

export default function AddurlRecipe() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("Breakfast");
    const [url, setUrl] = useState("");
    const [notes, setNotes] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        addRecipe({
            name,
            category,
            url,
            notes,
            // URL recipe: no ingredients/directions
            ingredients: [],
            directions: []
        });

        navigate("/contents");
    }

    return (
        <div>
            <h1>Add a URL Recipe</h1>

            <Card className="p-4 mt-3">
                <Form onSubmit={handleSubmit}>

                    {/* Recipe Name */}
                    <Form.Group className="mb-3">
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    {/* Category */}
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Dessert</option>
                            <option>Snack</option>
                            <option>Baking</option>
                            <option>Drinks</option>
                        </Form.Select>
                    </Form.Group>

                    {/* URL */}
                    <Form.Group className="mb-3">
                        <Form.Label>Recipe URL</Form.Label>
                        <Form.Control
                            type="url"
                            placeholder="https://example.com/my-recipe"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            required
                        />
                    </Form.Group>

                    {/* NOTES */}
                    <Form.Group className="mb-3">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Optional notes, tips, or why you like this recipe..."
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </Form.Group>

                    <Button type="submit">
                        Save Recipe
                    </Button>
                </Form>
            </Card>
        </div>
    );
}
