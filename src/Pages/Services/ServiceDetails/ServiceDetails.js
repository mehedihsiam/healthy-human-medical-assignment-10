import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceID } = useParams()
    const [serviceDetails, setSerbiveDetails] = useState([])
    const [singleService, setSingleService] = useState({})
    useEffect(() => {
        fetch("/serviceDetails.json")
            .then((res) => res.json())
            .then((data) => setSerbiveDetails(data.service))
    }, [])

    useEffect(() => {
        const foundService = serviceDetails.find(service => service.id === serviceID)
        setSingleService(foundService)
    }, [serviceDetails])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 mx-auto my-5">
                    <img src={singleService?.img} alt="" />
                    <h2 className="my-3">{singleService?.name}</h2>
                    <p>{singleService?.description}</p>
                    <p className="color-b fw-bold">{singleService?.contact}</p>
                    <Link to="/services"><button className="btn btn-a text-white">Go back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;