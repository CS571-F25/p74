import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { addRecipe } from "../../../data/recipes";

export default function AddImageRecipe() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("Breakfast");
    const [notes, setNotes] = useState("");
    const [imageData, setImageData] = useState("");
    const [dragActive, setDragActive] = useState(false);

    function handleFiles(files) {
        if (!files || files.length === 0) return;
        const file = files[0];

        if (!file.type.startsWith("image/")) {
            alert("Please choose an image file.");
            return;
        }

        const reader = new FileReader();
        reader.onload = e => {
            setImageData(e.target.result); // data URL string
        };
        reader.readAsDataURL(file);
    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const files = e.dataTransfer.files;
        handleFiles(files);
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    }

    function handleFileInputChange(e) {
        const files = e.target.files;
        handleFiles(files);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!imageData) {
            alert("Please add an image before saving.");
            return;
        }

        addRecipe({
            name,
            category,
            notes,
            url: "",
            ingredients: [],
            directions: [],
            imageData
        });

        navigate("/contents");
    }

    return (
        <div>
            <h1>Add an Image Recipe</h1>

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

                    {/* Image Drop Area */}
                    <Form.Group className="mb-3">
                        <Form.Label>Recipe Image</Form.Label>

                        <div
                            className={`image-drop-zone ${dragActive ? "image-drop-zone-active" : ""}`}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                        >
                            <p>Drag and drop an image here, or click to choose a file.</p>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleFileInputChange}
                            />
                        </div>

                        {imageData && (
                            <div className="mt-3">
                                <p>Preview:</p>
                                <img
                                    src={imageData}
                                    alt={name || "Recipe preview"}
                                    style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: "8px" }}
                                />
                            </div>
                        )}
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
