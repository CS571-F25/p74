import { Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function AddRecipe() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Add a Recipe</h1>

      <Row className="g-4 mt-3">
        <Col md={4}>
          <Card className="p-3 h-100 d-flex flex-column justify-content-between">
            <div>
              <h4>Type it in</h4>
              <p>Write your recipe manually using a text editor.</p>
            </div>
            <Button onClick={() => navigate("/addText")}>Add Text Recipe</Button>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 h-100 d-flex flex-column justify-content-between">
            <div>
              <h4>From a URL</h4>
              <p>Pull recipe content from a webpage (future feature).</p>
            </div>
            <Button onClick={() => navigate("/addUrl")}>Add URL Recipe</Button>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 h-100 d-flex flex-column justify-content-between">
            <div>
              <h4>From an image</h4>
              <p>Upload an image of a recipe (future feature).</p>
            </div>
            <Button onClick={() => navigate("/addImage")}>Add Image Recipe</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
