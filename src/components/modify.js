import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Form, Button, Container, Col, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Modify extends Component{
    render(){
        return(

            <Container>
                <Col xs={4}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                <Form.Label>Editing Task</Form.Label>
                                <Form.Control type="text"/>
                                </Form.Group>
                                <Button  type="submit">Save</Button>
                                <Button  type="submit">Cancel</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
            
        )
    }
}