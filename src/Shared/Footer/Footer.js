import React from 'react';
import './Footer.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    return (
        <footer className="bg-dark text-white p-2 mt-5">
            <div className="  d-block container">
                <div className="footer-container py-4">
                    <div>
                        <br />
                        <p className="footer-about">To serve the humanity as a whole with this noble vision the Healthy Human started its journey in June 1980. The institute has agreed upon to provide health care service to the people of Bangladesh with affordable cost.
                        </p>
                        <br />
                        <p><span className="fs-4 color-b">{map} </span> Savar, Dhaka, Bangladesh</p>
                        <p><span className="fs-4 color-b">{phone} </span> +8801953387415</p>
                    </div>
                    <div>
                        <p className="color-b fw-bold text-center fs-4">Visitor Counter</p>
                        <h3 className="text-center">20123654</h3>
                    </div>
                    <div>
                        <p className="color-b fs-4 fw-bold text-center">Contact</p>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Messege"></textarea>
                        </div>
                        <input type="submit" value="Send" className="btn btn-a text-white" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;