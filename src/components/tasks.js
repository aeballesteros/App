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
        body: JSON.stringify(task),
    };
    const result = await fetch(urlTask,options);
    const resultMsg = await result.json();
    alert(resultMsg);
  }

  const Edit = async () =>{
    const nameTask = document.getElementById('nameTask').value;
    const taskF = arrayTask.find(task=>task.name===nameTask);
    
    ReactDOM.render(
        <Modify 
        task={taskF}
        urlT={urlTask}></Modify>,
        document.getElementById('root')
    );
  }

  const Delete = async () =>{
    const nameTask = document.getElementById('nameTask').value;
    const taskF = arrayTask.find(task=>task.name===nameTask);
    const idTask=taskF.id;

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    const result = await fetch(urlTask +"/"+ idTask,options);
    const resultMsg = await result.json();
    alert(resultMsg);
  }

  const Change = async () =>{
    const checkbox = document.getElementById('mark');

    checkbox.addEventListener('change',(event)=>{
      if(checkbox.checked){
        
        const nameTask = document.getElementById('nameTask').value;
        const taskF = arrayTask.find(task=>task.name===nameTask);
        const idTask=taskF.id;
        
        const task = {
            status: "C",
        }
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task),
        };
        const result = fetch(urlTask+"/"+ idTask,options);
        const resultMsg = result.json();
      }else{
        const nameTask = document.getElementById('nameTask').value;
        const taskF = arrayTask.find(task=>task.name===nameTask);
        const idTask=taskF.id;
        
        const task = {
            status: "P",
        }
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task),
        };
        const result = fetch(urlTask+"/"+ idTask,options);
        const resultMsg = result.json();

      }
    }) 
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
                                            <Col xs={2}><input type="checkbox" id="mark" onClick={Change}></input></Col>
                                            <Col xs={6} id="nameTask">{user.name}</Col>
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