import { getAuth } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const { signUpWithEmail, handleRegistration, error, handleEmailChange, handlePasswordChange } = useAuth()
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-4 mx-auto my-5">
                    <h3 className="color-b">Healthy Human Medical</h3>
                    <Form className="my-4" onSubmit={handleRegistration}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} />
                        </Form.Group>
                        <input type="submit" value="Sign Up" className="btn btn-a text-white" />
                        <p>{error}</p>
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