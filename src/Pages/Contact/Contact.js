import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="container">
            <h1 className="color-b text-center my-4">Contact Us</h1>
            <div className="row my-5">
                <div className="col-md-6">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="15" placeholder="Write Your comment"></textarea>
                    <button className="btn btn-a my-4 text-white">Send</button>
                </div>
                <div className="col-md-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233731.5954237038!2d90.23220621640623!3d23.74537600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4c7c2d90a9%3A0x26436b1b9dcd741e!2sIbn%20Sina%20Diagnostic%20and%20Imaging%20Center%20(Dhanmondi%209A)!5e0!3m2!1sen!2sbd!4v1634576756733!5m2!1sen!2sbd" width="600" height="450" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;