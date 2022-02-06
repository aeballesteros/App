import {Form, Button, Container, Col, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import Tasks from "./components/tasks";

function App() {
  
    const Submit = async (e)=>{
        ReactDOM.render(
            <Tasks/>,
            document.getElementById('root')
        );
    };

return (

<Container>
                <Col xs={8}>
                    <Card>
                        <Card.Body>
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

                                <Button variant="primary" type="submit" onClick={Submit}>LogIn</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
   
  );
}

export default App;