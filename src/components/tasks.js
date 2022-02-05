import React, {Component} from "react";
import ReactDOM from 'react-dom';

import {ListGroup, Button, Container, Col,Row, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Tasks extends Component{
    render(){
        return(
            <Container>
                    <Card>
                        <Card.Body>
                            <Card.Title>To-do List</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                                <div id="list">
                                </div>
                        </Card.Body>
                    </Card>
            </Container>
            
        )
    }
}