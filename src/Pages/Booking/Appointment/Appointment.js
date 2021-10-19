import React from 'react';
import { useParams } from 'react-router';

const Appointment = () => {
    const { appointmentID } = useParams()
    return (
        <div>
            <h2>Appointment {appointmentID}</h2>
        </div>
    );
};

export default Appointment;