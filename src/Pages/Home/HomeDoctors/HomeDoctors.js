import React, { useEffect, useState } from 'react';
import HomeDoctor from './HomeDoctor/HomeDoctor';
import './HomeDoctors.css'

const HomeDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data.slice(0, 3)))
    }, [])
    return (
        <div className="container">
            <h1 className="color-b text-center">Our Doctors</h1>
            <div className="grid text-center">
                {
                    doctors.map(doctor => <HomeDoctor
                        key={doctor.key}
                        doctor={doctor}
                    ></HomeDoctor>)
                }
            </div>
        </div>
    );
};

export default HomeDoctors;