import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Cover() {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="mb-4">Welcome to the Recipe Book!</h1>

            <Row className="g-4 align-items-stretch">
                <Col md={4}>
                    <Card className="p-3 text-center h-100 d-flex flex-column justify-content-between">
                        <div>
                            <h3>All Recipes</h3>
                            <p>Browse the available recipes!</p>
                        </div>

                        <Button onClick={() => navigate("/contents")}>
                            View All
                        </Button>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="p-3 text-center h-100 d-flex flex-column justify-content-between">
                        <div>
                            <h3>Featured</h3>
                            <p>Check out which recipe was just added!</p>
                        </div>

                        <Button onClick={() => navigate("/feature")}>
                            View Featured
                        </Button>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="p-3 text-center h-100 d-flex flex-column justify-content-between">
                        <div>
                            <h3>Add a Recipe</h3>
                            <p>Create or add your own recipe!</p>
                        </div>

                        <Button onClick={() => navigate("/add")}>
                            Add Recipe
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
