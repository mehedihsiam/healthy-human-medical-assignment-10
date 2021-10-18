import React from 'react';

const Service = (props) => {
    const { name, img } = props.service;
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Service;