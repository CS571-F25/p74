import { useState } from "react";
import { Button, Card, Col, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { getRecipes } from "../../../data/recipes";

export default function Contents() {
    const navigate = useNavigate();

    // get list from shared data store
    const allRecipes = getRecipes();

    // search + filter state
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");

    // category list (unique values)
    const categories = ["All", ...new Set(allRecipes.map(r => r.category))];

    // filtered + sorted
    const filtered = allRecipes
        .filter(r =>
            r.name.toLowerCase().includes(search.toLowerCase())
        )
        .filter(r =>
            categoryFilter === "All" ? true : r.category === categoryFilter
        )
        .sort((a, b) =>
            a.name.localeCompare(b.name)
        );

    return (
        <div>
            <h1>All Recipes</h1>

            <Row className="mb-3 g-3">
                <Col md={5}>
                    <Form.Control
                        placeholder="Search recipes..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Col>

                <Col md={4}>
                    <Form.Select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </Form.Select>
                </Col>

                <Col md={3}>
                    <Button onClick={() => navigate("/add")}>
                        Add Recipe
                    </Button>
                </Col>
            </Row>

            <Row className="g-4">
                {filtered.map(recipe => (
                    <Col md={4} key={recipe.id}>
                        <Card className="p-3">
                            <h3>{recipe.name}</h3>
                            <p><strong>Category:</strong> {recipe.category}</p>
                            <p><strong>Created:</strong> {recipe.created}</p>

                            <Button
                                onClick={() => navigate(`/recipe/${recipe.id}`)}
                            >
                                See More
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
