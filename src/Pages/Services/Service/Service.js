import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, description, contact, img } = service;
    return (
        <div className="col-md-4 my-3">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h6 className="color-b">{contact}</h6>
                </Card.Body>
                <Button className="btn btn-a text-white"><FontAwesomeIcon icon={faInfoCircle} /> Details</Button>
            </Card>
        </div>
    );
};

export default Service;