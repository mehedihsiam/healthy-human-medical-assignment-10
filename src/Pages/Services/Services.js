import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <h1 className="color-b text-center mt-5">Our Services</h1>
            <CardGroup className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </CardGroup>
        </div>
    );
};

export default Services;