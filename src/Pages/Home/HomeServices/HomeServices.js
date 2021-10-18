import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import HomeService from './HomeService/HomeService';

const HomeServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)))
    }, [])
    return (
        <div className="container">
            <h1 className="color-b text-center mt-5">Our Services</h1>
            <CardGroup className="row">
                {
                    services.map(service => <HomeService
                        key={service.id}
                        service={service}
                    ></HomeService>)
                }
            </CardGroup>
        </div>
    );
};

export default HomeServices;