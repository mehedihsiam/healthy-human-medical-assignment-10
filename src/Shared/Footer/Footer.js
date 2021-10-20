import React from 'react';
import './Footer.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <footer className="bg-dark text-white p-2 mt-5">
            <div className="  d-block text-center container">
                <div className="footer-container">
                    <p className="">To serve the humanity as a whole with this noble vision the Healthy Human started its journey in June 1980. The institute has agreed upon to provide health care service to the people of Bangladesh with affordable cost.
                    </p>
                    <p className="">To serve the humanity as a whole with this noble vision the Healthy Human started its journey in June 1980. The institute has agreed upon to provide health care service to the people of Bangladesh with affordable cost.
                    </p>
                    <p className="">To serve the humanity as a whole with this noble vision the Healthy Human started its journey in June 1980. The institute has agreed upon to provide health care service to the people of Bangladesh with affordable cost.
                    </p>
                </div>
                <small>CopiRight <FontAwesomeIcon icon={faCopyright} /> 2021 || Healthy Huiman</small>
            </div>
        </footer>
    );
};

export default Footer;