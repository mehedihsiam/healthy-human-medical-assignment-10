import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signinUsingGoogle } = useAuth();
    const location = useLocation();
    console.log(location.state?.from);
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'
    const loginBtn = <FontAwesomeIcon icon={faSignInAlt} />

    const handleGoogleLogin = () => {
        signinUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }


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
                            Login {loginBtn}
                        </Button>
                    </Form>
                    <br />
                    <p>Or</p>
                    <button className="btn btn-warning" onClick={handleGoogleLogin}>Login with Google</button>
                    <p className="my-4">New User?<Link to="/register"> Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;