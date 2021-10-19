import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-4 mx-auto my-5">
                    <h3 className="color-b">Healthy Human Medical</h3>
                    <Form className="my-4">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn btn-a text-white">
                            Signup
                        </Button>
                    </Form>
                    <br />
                    <p>Or</p>
                    <button className="btn btn-warning">Signup with Google</button>
                    <p className="my-4">Already Have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;