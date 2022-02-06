import { useEffect, useState } from 'react';
import {Form, Button, Container, Col, Row, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import Modify from './modify';

function Tasks() {
  
  const [arrayTask,setArrayTask]=useState([]);
  const [refresh,setRefresh]=useState([true]);
  const urlTask="https://jsonplaceholder.typicode.com/users";
  
  const query = async () =>{
    const queryTask = await fetch(urlTask);
    const resTask= await queryTask.json();
    setArrayTask(resTask)
  }

  useEffect(()=>{
    if(refresh){
      query();
      setRefresh(false);
    }
  })

  const Add = async () =>{
    const nameTask = document.getElementById('name').value;
    const task = {
        name: nameTask,
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: task,
    };
    const result = await fetch(urlTask,options);
    const resultMsg = await result.json();
    alert(resultMsg);

  }

  const Edit = async () =>{
    ReactDOM.render(
        <Modify/>,
        document.getElementById('root')
    );
  }

  const Delete = async () =>{

  }

return (
    
    <Container>

        <Card>
    
            <Card.Title>To-Do List</Card.Title>
            
            <Container> 
            <Row>                
            <Col xs={10}><Form.Control id="name" type="text"/></Col>              
            <Col xs={2}><Button variant="primary" onClick={Add}>Add</Button></Col>
            </Row>
            </Container>                 
          

            <Card.Body>
              {arrayTask.map(user=> <Container>
                                        <Row>
                                            <Col xs={2}><input type="checkbox"></input></Col>
                                            <Col xs={6}>{user.name}</Col>
                                            <Col xs={2}><Button variant="link" onClick={Edit}>Edit</Button></Col>
                                            <Col xs={2}><Button variant="link" onClick={Delete}>Delete</Button></Col>
                                        </Row>
                                    </Container>
              )}
            </Card.Body>
        </Card>
  
</Container>
   
  );
}

export default Tasks;