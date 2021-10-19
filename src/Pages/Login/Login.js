import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signinUsingGoogle, handleLoginWithEmail, handleEmailChange, handlePasswordChange, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'

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
                    <Form className="my-4" onSubmit={handleLoginWithEmail}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} />
                        </Form.Group>
                        <input type="submit" value="Log In" className="btn btn-a text-white" />
                    </Form>
                    <p>{error}</p>
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