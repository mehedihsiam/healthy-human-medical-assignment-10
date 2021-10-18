import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, designation, degree, phone, img } = doctor;
    return (
        <div className="doctor-cart mx-4 my-4 p-4">
            <img src={img} className="img-fluid doctor-profile" alt="" />
            <h4 className="color-b">{name}</h4>
            <p className="fw-bold">{designation}</p>
            <p>{degree}</p>
            <p>{phone}</p>
            <button className="btn btn-a text-white"> <FontAwesomeIcon icon={faCalendarCheck} />  Get Appointment</button>
        </div>
    );
};

export default Doctor;