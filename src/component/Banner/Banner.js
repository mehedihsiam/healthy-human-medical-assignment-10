import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-6 banner-messege mx-auto mt-5 text-center">
                        <h1>Healthy Human Medical</h1>
                        <p className="text-white">Best Service Is Our First Priority. Business Is not Our Main Goal. Poor People Is Our Friend.</p>
                        <Link to="/services"><Button className="btn btn-banner text-white">Check Our Services</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;