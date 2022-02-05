import React, {Component} from "react";
import ReactDOM from 'react-dom';

import {ListGroup, Button, Container, Col,Row, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Tasks extends Component{
    render(){
        const urlTask="https://jsonplaceholder.typicode.com/users";
        
        return(
            
            fetch(urlTask)
            .then((resp)=>resp.json())
            .then((data)=>{
                console.log(data);
                const container = document.getElementById('list');
                const template = data.map(user=>    `<div style="display: grid; grid-template-columns: repeat(4,1fr); grid-gap:1px; grid-auto-rows:50px;">
                                                        <div >
                                                            <input id="status" type="checkbox" onClick="Change(this)">
                                                        </div>
                                                        <div >
                                                            ${user.name}
                                                        </div>
                                                        <div >
                                                            <input type="button" value="Edit" onClick="Edit()">
                                                        </div>
                                                        <div >
                                                            <input type="button" value="Delete" onClick="Delete()">
                                                        </div>
                                                    </div`);
                container.innerHTML=`${template}`;
            }),

            <Container>
                <Col xs={8}>
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
                </Col>
            </Container>
            
        )
    }
}