import {Button, Col, Row} from "react-bootstrap";
import { useNavigate } from "react-router";
import Recipe from "../recipes/Recipe";

export default function Contents (props) {

    const navigate = useNavigate();

    function handleAdd(e) {
        e?.preventDefault();
        navigate("/add");
    }

    function handlePostDelete(e) {
        e?.preventDefault();
    }

    function handlePostSave(e) {
        e?.preventDefault();
    }

    return <div>
        <h1>Table of Contents</h1>
        <Button onClick={handleAdd}>Add Recipe</Button>
        <Col>
            {/* Example Recipes */}
            <Row>
                <Recipe name={"Soup"} author={"Angela"} 
                    created={"11/3/2005"} id={"0"} currentUser={"Angela"} 
                    deletePost={handlePostDelete} savePost={handlePostSave}/>
            </Row>
            <Row>
                <Recipe name={"Bread"} author={"Isa"} 
                    created={"04/07/2006"} id={"1"} currentUser={"Angela"} 
                    deletePost={handlePostDelete} savePost={handlePostSave}/>
            </Row>
        </Col>
    </div>
}