import React, {Component} from "react";
import {Form, Button, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component{
    render(){
        return(
            <Container>
                <Form>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeHolder="Enter email"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeHolder="Password"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">LogIn</Button>
                </Form>
            </Container>
        )
    }
}