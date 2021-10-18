import React, { useEffect, useState } from 'react';
import Banner from '../../component/Banner/Banner';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            {
                doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                ></Doctor>)
            }
        </div>
    );
};

export default Doctors;