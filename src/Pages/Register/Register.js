import React from 'react';
import { Form } from 'react-bootstrap';
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const { signinUsingGoogle, handleRegistration, error, handleEmailChange, handlePasswordChange, handleNameChange, users } = useAuth()
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-4 mx-auto my-5">
                    <h3 className="color-b">Healthy Human Medical</h3>
                    <Form className="my-4" onSubmit={handleRegistration}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Enter Name" onBlur={handleNameChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} required />
                        </Form.Group>
                        <input type="submit" value="Sign Up" className="btn btn-a text-white" />
                        <p>{error}</p>
                    </Form>
                    <br />
                    <p>Or</p>
                    {
                        !users.email && <button className="btn btn-warning" onClick={signinUsingGoogle}>Signup with Google</button>
                    }
                    {
                        !users.email && <p className="my-4">Already Have an account? <Link to="/login">Login</Link></p>
                    }
                </div>
            </div>
        </div>
    );
};
export default Register;