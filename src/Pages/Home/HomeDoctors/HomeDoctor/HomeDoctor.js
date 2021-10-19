import React from 'react';
import './HomeDoctor.css';

// fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const HomeDoctor = ({ doctor }) => {
    const { id, name, designation, degree, phone, img } = doctor;
    return (
        <div className="doctor-cart mx-4 p-4">
            <img src={img} className="img-fluid doctor-profile" alt="" />
            <h4 className="color-b">{name}</h4>
            <p className="fw-bold">{designation}</p>
            <p>{degree}</p>
            <p>{phone}</p>
            <Link to={`/appointment/${id}`}>
                <button className="btn btn-a text-white"> <FontAwesomeIcon icon={faCalendarCheck} />  Get Appointment</button>
            </Link>
        </div>
    );
};

export default HomeDoctor;