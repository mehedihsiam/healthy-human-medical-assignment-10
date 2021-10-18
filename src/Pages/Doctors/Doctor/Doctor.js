import React from 'react';

const Doctor = (props) => {
    const { name, img } = props.doctor;
    return (
        <div>
            <h6>{name}</h6>
            <img src={img} alt="" />
        </div>
    );
};

export default Doctor;