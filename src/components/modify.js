import React from "react";
import ReactDOM from 'react-dom';
import {Form, Button, Container, Col, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tasks from "./tasks";

function Modify(props){

    const Save = async () =>{
        const idTask=props.task.id;
        const nameTask = document.getElementById('newName').value;
        
        const task = {
            name: nameTask,
        }
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task),
        };
        const result = await fetch(props.urlT+"/"+ idTask,options);
        const resultMsg = await result.json();

        ReactDOM.render(
            <Tasks/>,
            document.getElementById('root')
        );


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
                                <Form.Control id="newName" type="text"/>
                                </Form.Group>
                                <Button  type="primary" onClick={Save}>Save</Button>
                                <Button  type="primary" onClick={Cancel}>Cancel</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
            
        );
}

export default Modify;