import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Form, Button, Container, Col, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tasks from "./tasks";

function Modify(){
    
    const Save = async () =>{

      }

      const Cancel = async () =>{
        ReactDOM.render(
            <Tasks/>,
            document.getElementById('root')
        );
      }


    return(
            <Container>
                <Col xs={8}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                <Form.Label>Editing Task</Form.Label>
                                <Form.Control type="text"/>
                                </Form.Group>
                                <Button  type="submit">Save</Button>
                                <Button  type="submit" onClick={Cancel}>Cancel</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
            
        );
}

export default Modify;