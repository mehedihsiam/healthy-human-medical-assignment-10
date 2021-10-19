import React from 'react';
import { Link } from 'react-router-dom';
const Appointment = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <img src="https://i.ibb.co/zm66zWg/pexels-rodnae-productions-7564224.jpg" alt="" className="img-fluid" />
                    <Link to="/doctors"><button className="btn btn-a text-white my-2">Go Bac</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Appointment;