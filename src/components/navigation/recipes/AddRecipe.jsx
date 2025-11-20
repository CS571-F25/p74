import {Button, Card, Col, Row} from "react-bootstrap";
import { useNavigate } from "react-router";

export default function AddRecipe (props) {
    const navigate = useNavigate();

    return (
        <div>
            <h1>How would you like to enter your recipe?</h1>
            <Row>
                <Col>
                    <Card>
                        <p>Manually type in:</p>
                        <Button onClick={() => {navigate("/addText")}}>Add Recipe</Button>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <p>Enter a link/url to a website:</p>
                        <Button onClick={() => {navigate("/addUrl")}}>Add Recipe</Button>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <p>Bring in an image of a recipe:</p>
                        <Button onClick={() => {navigate("/addImage")}}>Add Recipe</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}


