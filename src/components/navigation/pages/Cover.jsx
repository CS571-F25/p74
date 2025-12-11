import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Cover() {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="mb-4">Welcome to the Recipe Book</h1>

            <Row className="g-4">
                <Col md={4}>
                    <Card className="p-3 text-center">
                        <h3>All Recipes</h3>
                        <p>Browse everything in the recipe list.</p>
                        <Button onClick={() => navigate("/contents")}>
                            View All
                        </Button>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="p-3 text-center">
                        <h3>Featured</h3>
                        <p>Check the most recently added recipe.</p>
                        <Button onClick={() => navigate("/feature")}>
                            View Featured
                        </Button>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="p-3 text-center">
                        <h3>Add a Recipe</h3>
                        <p>Create your own recipe entry.</p>
                        <Button onClick={() => navigate("/add")}>
                            Add Recipe
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}