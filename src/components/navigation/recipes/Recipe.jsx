import React from "react"
import { Card, Button, Row, Col } from "react-bootstrap";

function Recipe(props) {

// need: date added (created), name, author

    const dt = new Date(props.created);

    return (
        <Card style={{margin: "0.5rem", padding: "0.5rem"}}>
            <h2>{props.name}</h2>
            <sub>Posted on {dt.toLocaleDateString()} at {dt.toLocaleTimeString()}</sub>
            <br/>
            <i>{props.author}</i>
            {props.currentUser === props.author && (
                <Button variant="danger" onClick={() => props.deletePost(props.id)}>Delete Recipe</Button>
            )}
            <Button onClick={() => props.savePost(props.id)}>Bookmark Recipe!</Button>
        </Card>
    )
}

export default Recipe;