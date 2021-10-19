import React from 'react';
import './Footer.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className="bg-dark text-white p-2 mt-5  d-block text-center">
            <small>CopiRight <FontAwesomeIcon icon={faCopyright} /> 2021 || Healthy Huiman</small>
        </div>
    );
};

export default Footer;