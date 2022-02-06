import { useEffect, useState } from 'react';
import {Form, Button, Container, Col, Row, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import Modify from './modify';

function Tasks() {
  
  const [arrayUser,setArrayUser]=useState([]);
  const [refresh,setRefresh]=useState([true]);
  
  const query = async () =>{
    const urlUser="https://jsonplaceholder.typicode.com/users";
    const queryUser = await fetch(urlUser);
    const resUser= await queryUser.json();
    setArrayUser(resUser)
  }

  useEffect(()=>{
    if(refresh){
      query();
      setRefresh(false);
    }
  })

  const Add = async () =>{

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
            <Col xs={10}><Form.Control type="text"/></Col>              
            <Col xs={2}><Button variant="primary" onClick={Add}>Add</Button></Col>
            </Row>
            </Container>                 
          

            <Card.Body>
              {arrayUser.map(user=> <Container>
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