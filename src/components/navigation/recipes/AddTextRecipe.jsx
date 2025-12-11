import { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { addRecipe } from "../../../data/recipes";

export default function AddTextRecipe() {
    const navigate = useNavigate();

    // Form state
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Breakfast");

    const [ingredients, setIngredients] = useState([
        { amount: "", item: "" }
    ]);

    const [directions, setDirections] = useState([
        ""
    ]);

    const [notes, setNotes] = useState("");


    /* INGREDIENT HANDLERS */
    function handleIngredientChange(index, field, value) {
        const updated = [...ingredients];
        updated[index][field] = value;
        setIngredients(updated);
    }

    function addIngredientRow() {
        setIngredients([...ingredients, { amount: "", item: "" }]);
    }

    function removeIngredientRow(index) {
        setIngredients(ingredients.filter((_, i) => i !== index));
    }


    /* DIRECTIONS HANDLERS */
    function handleDirectionChange(index, value) {
        const updated = [...directions];
        updated[index] = value;
        setDirections(updated);
    }

    function addDirectionRow() {
        setDirections([...directions, ""]);
    }

    function removeDirectionRow(index) {
        setDirections(directions.filter((_, i) => i !== index));
    }


    /* SUBMIT */
    function handleSubmit(e) {
        e.preventDefault();

        addRecipe({
            name,
            category,
            ingredients,
            directions,
            notes
        });

        navigate("/contents");
    }


    return (
        <div>
            <h1>Add a New Recipe</h1>

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

                    {/* INGREDIENTS */}
                    <Form.Group className="mb-3">
                        <Form.Label>Ingredients</Form.Label>

                        {ingredients.map((ing, i) => (
                            <Row key={i} className="mb-2">
                                <Col xs={4}>
                                    <Form.Control
                                        placeholder="Amount"
                                        value={ing.amount}
                                        onChange={(e) =>
                                            handleIngredientChange(i, "amount", e.target.value)
                                        }
                                        required
                                    />
                                </Col>

                                <Col xs={6}>
                                    <Form.Control
                                        placeholder="Ingredient"
                                        value={ing.item}
                                        onChange={(e) =>
                                            handleIngredientChange(i, "item", e.target.value)
                                        }
                                        required
                                    />
                                </Col>

                                <Col xs={2}>
                                    {ingredients.length > 1 && (
                                        <Button
                                            variant="danger"
                                            onClick={() => removeIngredientRow(i)}
                                        >
                                            X
                                        </Button>
                                    )}
                                </Col>
                            </Row>
                        ))}

                        <Button 
                            variant="secondary" 
                            className="mt-2"
                            onClick={addIngredientRow}
                        >
                            + Add Ingredient
                        </Button>
                    </Form.Group>


                    {/* DIRECTIONS — ordered list builder */}
                    <Form.Group className="mb-3">
                        <Form.Label>Directions (Steps)</Form.Label>

                        {directions.map((step, i) => (
                            <Row key={i} className="mb-2">
                                <Col xs={10}>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        placeholder={`Step ${i + 1}`}
                                        value={step}
                                        onChange={(e) =>
                                            handleDirectionChange(i, e.target.value)
                                        }
                                        required
                                    />
                                </Col>

                                <Col xs={2}>
                                    {directions.length > 1 && (
                                        <Button
                                            variant="danger"
                                            onClick={() => removeDirectionRow(i)}
                                        >
                                            X
                                        </Button>
                                    )}
                                </Col>
                            </Row>
                        ))}

                        <Button
                            variant="secondary"
                            className="mt-2"
                            onClick={addDirectionRow}
                        >
                            + Add Step
                        </Button>
                    </Form.Group>

                    {/* NOTES */}
                    <Form.Group className="mb-3">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Optional notes, tips, substitutions..."
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
