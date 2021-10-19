import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceID } = useParams()
    return (
        <div>
            <h2>Service of {serviceID}</h2>
        </div>
    );
};

export default ServiceDetails;