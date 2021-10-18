import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="container">
            <h1 className="color-b text-center mt-5">Our Doctors</h1>
            <div className="grid text-center">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.key}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;