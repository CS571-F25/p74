import { useNavigate } from "react-router";
import { useRef } from "react";
import {Form, Button} from "react-bootstrap";

export default function Front (props) {
    const navigate = useNavigate();
    const usernameRef = useRef();
    const pinRef = useRef();

    function handleLoginSubmit(e) {
        e?.preventDefault();
    }

    return <>
        <h1>This Book Belongs To...</h1>
        <Form onSubmit={handleLoginSubmit}>
            <Form.Label htmlFor="usernameInput">Name:</Form.Label>
            <Form.Control id="usernameInput" ref={usernameRef}></Form.Control>
            <Form.Label htmlFor="pinInput">Password:</Form.Label>
            <Form.Control id="pinInput" type="password" ref={pinRef}></Form.Control>
            <br/>
            <Button type="submit" onClick={handleLoginSubmit}>Login</Button>
        </Form>

        <br />
        <p>Register here to add and bookmark recipes!</p>
        {/* TODO make "here" clickable to go to register page */}
    </>
}